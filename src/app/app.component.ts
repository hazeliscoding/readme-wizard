import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { initFlowbite } from 'flowbite';

import {
  selectDisplayMarkdown,
  selectEditorDescription,
} from './store/selectors/editor.selectors';
import { Actions } from './store/actions/action-types';
import { AppState } from './store/state.interface';
import { Toast } from './models/toast.model';

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

  developmentTechnologies = [
    // Languages
    { name: 'JavaScript', value: 'javascript' },
    { name: 'Python', value: 'python' },
    { name: 'Java', value: 'java' },
    { name: 'Ruby', value: 'ruby' },
    { name: 'HTML', value: 'html' },
    { name: 'CSS', value: 'css' },
    { name: 'PHP', value: 'php' },
    { name: 'Swift', value: 'swift' },
    { name: 'Kotlin', value: 'kotlin' },
    { name: 'C#', value: 'csharp' },
    { name: 'TypeScript', value: 'typescript' },
    { name: 'Go', value: 'go' },
    { name: 'Rust', value: 'rust' },
    { name: 'Scala', value: 'scala' },
    { name: 'Perl', value: 'perl' },
    { name: 'SQL', value: 'sql' },
    { name: 'Objective-C', value: 'objectivec' },
    { name: 'C++', value: 'cpp' },
    { name: 'R', value: 'r' },
    { name: 'Shell', value: 'shell' },
    { name: 'Assembly', value: 'assembly' },
    { name: 'Dart', value: 'dart' },
    { name: 'Lua', value: 'lua' },
    { name: 'Haskell', value: 'haskell' },

    // Frontend Frameworks
    { name: 'React', value: 'react' },
    { name: 'Angular', value: 'angular' },
    { name: 'Vue.js', value: 'vue' },
    { name: 'Ember.js', value: 'ember' },
    { name: 'Svelte', value: 'svelte' },
    { name: 'Backbone.js', value: 'backbone' },
    { name: 'Meteor', value: 'meteor' },
    { name: 'Astro', value: 'astro' },
    { name: 'Next.js', value: 'nextjs' },

    // Backend Frameworks
    { name: 'Node.js', value: 'nodejs' },
    { name: 'Express.js', value: 'express' },
    { name: 'Django', value: 'django' },
    { name: 'Flask', value: 'flask' },
    { name: 'Spring Boot', value: 'spring' },
    { name: 'Ruby on Rails', value: 'rubyonrails' },
    { name: 'Laravel', value: 'laravel' },
    { name: 'ASP.NET', value: 'aspnet' },
    { name: 'NestJS', value: 'nestjs' },

    // Frontend Tools
    { name: 'Webpack', value: 'webpack' },
    { name: 'vite', value: 'vite' },
    { name: 'Babel', value: 'babel' },
    { name: 'Sass', value: 'sass' },
    { name: 'LESS', value: 'less' },
    { name: 'PostCSS', value: 'postcss' },
    { name: 'ESLint', value: 'eslint' },
    { name: 'Prettier', value: 'prettier' },
    { name: 'Jest', value: 'jest' },

    // Backend Tools
    { name: 'Docker', value: 'docker' },
    { name: 'Kubernetes', value: 'kubernetes' },
    { name: 'Nginx', value: 'nginx' },
    { name: 'Apache', value: 'apache' },
    { name: 'Postman', value: 'postman' },
    { name: 'Git', value: 'git' },
    { name: 'GitHub', value: 'github' },
    { name: 'GitLab', value: 'gitlab' },
  ];

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

  generateMarkdown() {
    this.store.dispatch(Actions.displayMarkdownResult());
    window.scroll(0, 0);
  }

  addDescription() {
    this.store.dispatch(
      Actions.addDescription({ description: 'testing ngrx' })
    );
  }

  selectedTechnologies(technologies: any) {
    console.log(technologies);
  }

  generateToast(toast: Toast) {}
}
