import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDetailViewComponent } from './student-detail-view/student-detail-view.component';
import { StudentListViewComponent } from './student-list-view/student-list-view.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatDrawer, MatDrawerContainer } from "@angular/material/sidenav";
import { MatButtonModule, MatIconButton } from "@angular/material/button";
import { MatDivider } from "@angular/material/divider";
import { MatActionList, MatListItem } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioButton, MatRadioGroup } from "@angular/material/radio";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatOption, MatSelect } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule, MatDatepickerToggle } from "@angular/material/datepicker";
import {MatCheckbox} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentDetailViewComponent,
    StudentListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDrawerContainer,
    MatIconButton,
    MatButtonModule,
    MatDrawer,
    MatDivider,
    MatActionList,
    MatFormFieldModule,
    MatRadioGroup,
    FormsModule,
    MatRadioButton,
    MatSelect,
    MatOption,
    MatInputModule,
    MatListItem,
    MatDatepickerToggle,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
