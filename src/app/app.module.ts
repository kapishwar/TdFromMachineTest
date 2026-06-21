import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentComponent } from './shared/components/student/student.component';
import { EmployeeComponent } from './shared/components/employee/employee.component';
import { JobApplicationComponent } from './shared/components/job-application/job-application.component';
import { LoanApplicationComponent } from './shared/components/loan-application/loan-application.component';
import { ECommerceComponent } from './shared/components/e-commerce/e-commerce.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent,
    JobApplicationComponent,
    LoanApplicationComponent,
    ECommerceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
