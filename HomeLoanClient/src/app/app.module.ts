import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmiCalculatorComponent } from './components/emi-calculator/emi-calculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { EligibilityCalculatorComponent } from './components/eligibility-calculator/eligibility-calculator.component';
import { FaqComponent } from './components/faq/faq.component';
import { CibilComponent } from './components/cibil/cibil.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AdminComponent } from './components/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { EmpFormComponent } from './components/emp-form/emp-form.component';
import { PropFormComponent } from './components/prop-form/prop-form.component';
import { BankFormComponent } from './components/bank-form/bank-form.component';
import { DocFormComponent } from './components/doc-form/doc-form.component';
import { FormSubmittedComponent } from './components/form-submitted/form-submitted.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    EmiCalculatorComponent,
    HomeComponent,
    EligibilityCalculatorComponent,
    FaqComponent,
    CibilComponent,
    AboutusComponent,
    AdminComponent,
    RegistrationFormComponent,
    EmpFormComponent,
    PropFormComponent,
    BankFormComponent,
    DocFormComponent,
    FormSubmittedComponent,
    AdminPageComponent,
    UserPageComponent,
    UserDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
