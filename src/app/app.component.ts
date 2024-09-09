import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { initFlowbite } from 'flowbite';

import { selectDisplayMarkdown } from './store/selectors/editor.selectors';
import { AppState } from './store/state.interface';

import { MarkdownService } from './services/markdown.service';
import { ToastService } from './services/toast.service';

import { readmeDemo } from '../data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  public displayMarkdown$: Observable<boolean>;
  public markdownData = readmeDemo;
  formattedCode = '';

  constructor(
    private store: Store<AppState>,
    private markdownService: MarkdownService,
    public toastService: ToastService
  ) {
    this.displayMarkdown$ = this.store.select(selectDisplayMarkdown);
  }

  ngOnInit() {
    initFlowbite();

    this.markdownData = this.markdownService.test();
  }
}
