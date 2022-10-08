import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; /** to get the text from the text field */

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  /** to get the text from the text field */ 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
