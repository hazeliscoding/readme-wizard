import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './store/reducers';

import { AppRoutingModule } from './app-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MdPreviewComponent } from './components/md-preview/md-preview.component';
import { BackgroundComponent } from './components/background/background.component';
import { TechPickerComponent } from './components/tech-picker/tech-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    MdPreviewComponent,
    BackgroundComponent,
    TechPickerComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
