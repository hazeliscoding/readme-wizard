import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { PickerItem } from '../multi-picker/multi-picker.component';
import { Actions } from '../../store/actions/action-types';
import { AppState } from '../../store/state.interface';
import { MarkdownService } from '../../services/markdown.service';

import { LicenseType } from '../../enums/licensetype.enum';
import { technologies } from '../../../data/technologies';
import { debounceTime, distinctUntilChanged, Observable, Subject } from 'rxjs';
import { InputInteraction } from '../../interfaces/input-interaction.interface';
import {
  editorSelector,
  selectGeneratingMarkdown,
} from '../../store/selectors/editor.selectors';
import { EditorState } from '../../store/reducers/editor.reducer';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  technologies = technologies;
  licenses: { name: string; value: string }[] = [];
  protected readonly LicenseType = LicenseType;

  public debounceInput$ = new Subject<InputInteraction>();
  public generating$ = new Observable<boolean>();
  public state$ = new Observable<EditorState>();

  constructor(
    private store: Store<AppState>,
    private mdService: MarkdownService
  ) {
    this.getLicenses();

    this.generating$ = this.store.select(selectGeneratingMarkdown);
    this.state$ = this.store.select(editorSelector);
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

      case 'features':
        const features: any[] = [];

        (input.value as any[]).forEach((acknowledge) => {
          features.push({ title: acknowledge[0], description: acknowledge[1] });
        });

        this.store.dispatch(Actions.modifyFeatures({ features: features }));
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

  generateMarkdown() {
    this.store.dispatch(Actions.generateMarkdown({ generate: true }));
    window.scroll(0, 0);
  }
}
