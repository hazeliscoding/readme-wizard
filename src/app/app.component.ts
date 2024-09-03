import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectDisplayMarkdown,
  selectEditorDescription,
} from './store/selectors/editor.selectors';
import { Actions } from './store/actions/action-types';
import { AppState } from './store/state.interface';
import { Observable } from 'rxjs';
import { readmeDemo } from '../data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  public description$: Observable<string>;
  public displayMarkdown$: Observable<boolean>;
  public markdownData = readmeDemo;

  constructor(private store: Store<AppState>) {
    this.description$ = this.store.select(selectEditorDescription);
    this.displayMarkdown$ = this.store.select(selectDisplayMarkdown);
  }

  ngOnInit() {}

  generateMarkdown() {
    this.store.dispatch(Actions.displayMarkdownResult());
  }

  addDescription() {
    this.store.dispatch(
      Actions.addDescription({ description: 'testing ngrx' })
    );
  }
}
