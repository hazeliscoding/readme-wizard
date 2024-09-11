import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { initFlowbite } from 'flowbite';

import { selectGeneratedMarkdown } from './store/selectors/editor.selectors';
import { AppState } from './store/state.interface';

import { MarkdownService } from './services/markdown.service';
import { ToastService } from './services/toast.service';

import { readmeDemo } from '../data/data';
import { Actions } from './store/actions/action-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  public generatedMarkdown$: Observable<string>;
  public markdownData = readmeDemo;

  constructor(
    private store: Store<AppState>,
    private markdownService: MarkdownService,
    public toastService: ToastService
  ) {
    this.generatedMarkdown$ = this.store.select(selectGeneratedMarkdown);
  }

  ngOnInit() {
    initFlowbite();

    // this.markdownData = this.markdownService.test();
  }

  generateMarkdown() {
    this.store.dispatch(Actions.generateMarkdown({ generate: true }));
    window.scroll(0, 0);
  }
}
