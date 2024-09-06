import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { PickerItem } from '../multi-picker/multi-picker.component';
import { Actions } from '../../store/actions/action-types';
import { AppState } from '../../store/state.interface';
import { MarkdownService } from '../../services/markdown.service';

import { technologies } from '../../../data/technologies';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  technologies = technologies;

  constructor(
    private store: Store<AppState>,
    private mdService: MarkdownService
  ) {}

  selectedTechnologies(technologies: PickerItem[]) {
    console.log(technologies);
  }

  generateMarkdown() {
    this.store.dispatch(Actions.displayMarkdownResult());
    window.scroll(0, 0);
  }
}
