import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectEditorDescription } from './store/selectors/editor.selectors';
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
  public markdownData = readmeDemo;

  constructor(private store: Store) {
    this.description$ = this.store.select(selectEditorDescription);
  }

  ngOnInit() {}

  addDescription() {
    this.store.dispatch(
      Actions.addDescription({ description: 'testing ngrx' })
    );
  }
}
