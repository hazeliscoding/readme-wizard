import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, Observable, Subject } from 'rxjs';

import { PickerItem } from '../multi-picker/multi-picker.component';
import { Actions } from '../../store/actions/action-types';
import { AppState } from '../../store/state.interface';
import { MarkdownService } from '../../services/markdown.service';

import { InputInteraction } from '../../interfaces/input-interaction.interface';
import { LicenseOptions } from '../../interfaces/license-options.interface';
import { ContributorOptions } from '../../interfaces/contributor-options.interface';
import { ContributionOptions } from '../../interfaces/contribution-options.interface';
import { AcknowledgeOptions } from '../../interfaces/acknowledge-options.interface';
import { TechnologyOptions } from '../../interfaces/technology-options.interface';
import { FeatureOptions } from '../../interfaces/feature-options.interface';
import { LicenseType } from '../../enums/licensetype.enum';
import { technologies } from '../../../data/technologies';
import {
  editorSelector,
  selectAcknowledgment,
  selectAuthorGithubUsername,
  selectAuthorLinkedinUsername,
  selectAuthorName,
  selectBackToTop,
  selectContentTable,
  selectContribution,
  selectContributors,
  selectDescription,
  selectFeatures,
  selectGeneratingMarkdown,
  selectInstallSteps,
  selectLicense,
  selectLogo,
  selectMainImage,
  selectNavigationLinks,
  selectNpmBadges,
  selectNpmPackage,
  selectParameters,
  selectRepository,
  selectRepositoryBadges,
  selectScreenshots,
  selectSectionIcons,
  selectShortDescription,
  selectStackTech,
  selectTitle,
  selectUsageSteps,
} from '../../store/selectors/editor.selectors';
import { EditorState } from '../../store/reducers/editor.reducer';
import { testData } from '../../../data/test';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output()
  generateMarkdown = new EventEmitter();

  technologies = technologies;
  licenses: { name: string; value: string }[] = [];
  protected readonly LicenseType = LicenseType;

  public debounceInput$ = new Subject<InputInteraction>();
  public generating$ = new Observable<boolean>();
  public state$ = new Observable<EditorState>();
  public title$ = new Observable<string>();
  public description$: Observable<string>;
  public shortDescription$ = new Observable<string>();
  public contentTable$ = new Observable<boolean>();
  public navigationLinks$ = new Observable<boolean>();
  public features$ = new Observable<FeatureOptions[]>();
  public repository$ = new Observable<string>();
  public repositoryBadges$ = new Observable<boolean>();
  public npmUrl$ = new Observable<string>();
  public npmBadges$ = new Observable<boolean>();
  public backToTop$ = new Observable<boolean>();
  public sectionIcons$ = new Observable<boolean>();
  public logo$ = new Observable<string>();
  public mainImage$ = new Observable<string>();
  public screenshots$ = new Observable<string[]>();
  public stack$ = new Observable<string[]>();
  public installSteps$ = new Observable<string[]>();
  public usageSteps$ = new Observable<string[]>();
  public parameters$: Observable<
    {
      field: string;
      description: string;
      default?: string | undefined;
    }[]
  >;
  public acknowledgements$ = new Observable<AcknowledgeOptions[]>();
  public contribution$ = new Observable<ContributionOptions>();
  public contributors$: Observable<ContributorOptions[]>;
  public authorName$: Observable<string>;
  public githubUsername$: Observable<string>;
  public linkedinUsername$: Observable<string>;
  public license$: Observable<LicenseOptions>;

  constructor(
    private store: Store<AppState>,
    private mdService: MarkdownService
  ) {
    this.getLicenses();

    this.generating$ = this.store.select(selectGeneratingMarkdown);
    this.state$ = this.store.select(editorSelector);
    this.title$ = this.store.select(selectTitle);
    this.description$ = this.store.select(selectDescription);
    this.shortDescription$ = this.store.select(selectShortDescription);
    this.contentTable$ = this.store.select(selectContentTable);
    this.navigationLinks$ = this.store.select(selectNavigationLinks);
    this.features$ = this.store.select(selectFeatures);
    this.repository$ = this.store.select(selectRepository);
    this.repositoryBadges$ = this.store.select(selectRepositoryBadges);
    this.npmUrl$ = this.store.select(selectNpmPackage);
    this.npmBadges$ = this.store.select(selectNpmBadges);
    this.backToTop$ = this.store.select(selectBackToTop);
    this.sectionIcons$ = this.store.select(selectSectionIcons);
    this.logo$ = this.store.select(selectLogo);
    this.mainImage$ = this.store.select(selectMainImage);
    this.screenshots$ = this.store.select(selectScreenshots);
    this.stack$ = this.store.select(selectStackTech);
    this.installSteps$ = this.store.select(selectInstallSteps);
    this.usageSteps$ = this.store.select(selectUsageSteps);
    this.parameters$ = this.store.select(selectParameters);
    this.acknowledgements$ = this.store.select(selectAcknowledgment);
    this.contribution$ = this.store.select(selectContribution);
    this.contributors$ = this.store.select(selectContributors);
    this.authorName$ = this.store.select(selectAuthorName);
    this.githubUsername$ = this.store.select(selectAuthorGithubUsername);
    this.linkedinUsername$ = this.store.select(selectAuthorLinkedinUsername)''
    this.license$ = this.store.select(selectLicense);
  }

  ngOnInit(): void {
    this.debounceInput$
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((input) => {
        this.processInput(input);
      });

    this.state$.subscribe((state) => {
      console.log(state);
      if (state.generateMarkdown) {
        this.BuildMarkdown(state);
      }
    });
  }

  BuildMarkdown(state: EditorState) {
    const markdown = this.mdService.Build(state);
    this.store.dispatch(Actions.markdownGenerated({ markdown }));
  }

  getLicenses() {
    this.licenses = Object.keys(LicenseType).map((key) => {
      return {
        name: LicenseType[key as keyof typeof LicenseType],
        value: key,
      };
    });
  }

  inputChange(type: string, target: EventTarget | null | boolean) {
    this.debounceInput$.next({
      type,
      value:
        (target as any).type === 'checkbox'
          ? (target as HTMLInputElement).checked
          : (target as HTMLInputElement).value,
    });
  }

  processInput(input: InputInteraction) {
    console.log(input);
    switch (input.type) {
      case 'title':
        this.store.dispatch(Actions.modifyTitle({ title: input.value }));
        break;
      case 'short-description':
        this.store.dispatch(
          Actions.modifyShortDescription({ shortDescription: input.value })
        );
        break;
      case 'description':
        this.store.dispatch(
          Actions.modifyDescription({ description: input.value })
        );
        break;

      case 'content-table':
        this.store.dispatch(
          Actions.modifyContentTable({ contentTable: input.value })
        );
        break;

      case 'navigation-links':
        this.store.dispatch(
          Actions.modifyNavigation({ navigation: input.value })
        );
        break;

      case 'section-icons':
        this.store.dispatch(
          Actions.toggleSectionIcons({ sectionIcons: input.value })
        );
        break;

      case 'back-to-top':
        this.store.dispatch(
          Actions.toggleBackToTop({ backToTop: input.value })
        );
        break;

      case 'features':
        const features: any[] = [];

        (input.value as any[]).forEach((acknowledge) => {
          features.push({ title: acknowledge[0], description: acknowledge[1] });
        });

        this.store.dispatch(Actions.modifyFeatures({ features: features }));
        break;

      case 'installation':
        this.store.dispatch(Actions.modifyInstallation({ steps: input.value }));
        break;

      case 'usage':
        this.store.dispatch(Actions.modifyUsage({ steps: input.value }));
        break;

      case 'repository-url':
        this.store.dispatch(Actions.modifyGithubUrl({ url: input.value }));
        break;

      case 'repository-badges':
        this.store.dispatch(Actions.modifyGithubBadge({ badge: input.value }));
        break;

      case 'npm-url':
        this.store.dispatch(Actions.modifyNpmUrl({ url: input.value }));
        break;

      case 'npm-badges':
        this.store.dispatch(Actions.modifyNpmBadge({ badge: input.value }));
        break;

      case 'logo-url':
        this.store.dispatch(Actions.modifyLogoUrl({ logoUrl: input.value }));
        break;

      case 'main-img-url':
        this.store.dispatch(
          Actions.modifyMainImageUrl({
            mainImageUrl: input.value.replaceAll(' ', ''),
          })
        );
        break;

      case 'screenshots-url':
        this.store.dispatch(
          Actions.modifyImages({
            images: input.value.replaceAll(' ', '').split(/[,\n]/),
          })
        );
        break;

      case 'technologies':
        this.store.dispatch(
          Actions.addTechnologies({ technologies: [...input.value] })
        );
        break;

      case 'tech-stack':
        if (!input.value) {
          this.store.dispatch(Actions.removeTechnology());
        }
        break;

      case 'acknowledge':
        const acknowledgements: any[] = [];

        (input.value as any[]).forEach((acknowledge) => {
          acknowledgements.push({
            title: acknowledge[0],
            url: acknowledge[1],
            description: acknowledge[2],
          });
        });

        this.store.dispatch(
          Actions.modifyAcknowledgement({ acknowledgements: acknowledgements })
        );
        break;

      case 'contribution':
        this.store.dispatch(
          Actions.modifyContribution({ contribution: input.value })
        );
        break;

      case 'contribution-guideline':
        this.store.dispatch(
          Actions.modifyContributionGuideline({
            contributionGuidelinesLink: input.value,
          })
        );
        break;

      case 'author-name':
        this.store.dispatch(
          Actions.modifyAuthorName({ authorName: input.value })
        );
        break;

      case 'author-github':
        this.store.dispatch(
          Actions.modifyAuthorGithub({ authorGithub: input.value })
        );
        break;

      case 'license':
        if (!input.value) {
          this.store.dispatch(Actions.removeLicense());
        }
        break;

      case 'licenseType':
        this.store.dispatch(
          Actions.addLicense({ license: { type: input.value } })
        );
        break;

      case 'custom-license':
        this.store.dispatch(
          Actions.modifyCustomLicense({ customText: input.value })
        );
        break;
    }
  }

  selectedTechnologies(technologies: PickerItem[]) {
    this.processInput({ type: 'technologies', value: technologies });
  }

  generate() {
    this.generateMarkdown.emit();
  }
}
