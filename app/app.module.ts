import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MdToolbarModule,
  MdTabsModule,
  MdButtonModule,
  MdInputModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdCheckboxModule,
  MdRadioModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { SwitchComponent } from "./toggle-implementation/switch.component";
import { ToggleComponent } from "./toggle/toggle.component";
import { CdkTableModule } from "@angular/cdk/table";
import { HttpModule } from "@angular/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MdToolbarModule,
    MdTabsModule,
    MdButtonModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdCheckboxModule,
    MdRadioModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  declarations: [AppComponent, SwitchComponent, ToggleComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
