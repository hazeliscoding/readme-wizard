import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './store/reducers';

import { AppRoutingModule } from './app-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MdPreviewComponent } from './components/md-preview/md-preview.component';
import { BackgroundComponent } from './components/background/background.component';
import { MultiPickerComponent } from './components/multi-picker/multi-picker.component';
import { RawCodeSnippetComponent } from './components/raw-code-snippet/raw-code-snippet.component';
import { MdCodeSnippetComponent } from './components/md-code-snippet/md-code-snippet.component';
import { ToastComponent } from './components/toast/toast.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './components/form/form.component';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { FormRadioComponent } from './components/form-radio/form-radio.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { MultiFieldComponent } from './components/multi-field/multi-field.component';
import { LogPipe } from './pipes/log.pipe';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RepoComponent } from './components/repo/repo.component';

@NgModule({
  declarations: [
    AppComponent,
    MdPreviewComponent,
    BackgroundComponent,
    MultiPickerComponent,
    RawCodeSnippetComponent,
    MdCodeSnippetComponent,
    ToastComponent,
    FormComponent,
    FormCheckboxComponent,
    FormFieldComponent,
    FormRadioComponent,
    SectionTitleComponent,
    MultiFieldComponent,
    LogPipe,
    SvgIconComponent,
    HeaderComponent,
    FooterComponent,
    RepoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
    }),
    MarkdownModule.forRoot(),
    ReactiveFormsModule,
    NoopAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
