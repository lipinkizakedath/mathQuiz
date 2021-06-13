import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MathQuizComponent } from './math-quiz/math-quiz.component';
import { ValueHighlighterDirective } from './value-highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    MathQuizComponent,
    ValueHighlighterDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
