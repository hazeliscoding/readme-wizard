import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { initFlowbite } from 'flowbite';

import {
  selectDisplayMarkdown,
  selectEditorDescription,
} from './store/selectors/editor.selectors';
import { AppState } from './store/state.interface';

import { MarkdownService } from './services/markdown.service';
import { UtilsService } from './services/utils.service';
import { ToastService } from './services/toast.service';

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
  formattedCode = '';

  constructor(
    private store: Store<AppState>,
    private markdownService: MarkdownService,
    private utilsService: UtilsService,
    public toastService: ToastService
  ) {
    this.description$ = this.store.select(selectEditorDescription);
    this.displayMarkdown$ = this.store.select(selectDisplayMarkdown);
  }

  ngOnInit() {
    initFlowbite();

    this.markdownData = this.markdownService.test();
  }
}
