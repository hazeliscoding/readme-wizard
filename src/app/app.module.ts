import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './store/reducers';

import { AppRoutingModule } from './app-routing.module';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { MdPreviewComponent } from './components/md-preview/md-preview.component';

@NgModule({
  declarations: [AppComponent, MdPreviewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
    }),
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
