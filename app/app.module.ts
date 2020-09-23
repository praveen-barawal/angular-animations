import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdToolbarModule,
  MdTabsModule,
  MdButtonModule,
  MdInputModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdCheckboxModule,
  MdRadioModule,
  MatSlideToggleModule} from '@angular/material';

import { AppComponent } from './app.component';
import { SwitchComponent } from './toggle/toggle.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MdToolbarModule, MdTabsModule, MdButtonModule, MdInputModule, MdDatepickerModule, MdNativeDateModule, MdCheckboxModule, MdRadioModule ,MatSlideToggleModule],
  declarations: [ AppComponent, SwitchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
