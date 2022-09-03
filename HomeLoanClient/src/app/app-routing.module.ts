import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { BankFormComponent } from './components/bank-form/bank-form.component';
import { CibilComponent } from './components/cibil/cibil.component';
import { DocFormComponent } from './components/doc-form/doc-form.component';
import { EligibilityCalculatorComponent } from './components/eligibility-calculator/eligibility-calculator.component';
import { EmiCalculatorComponent } from './components/emi-calculator/emi-calculator.component';
import { EmpFormComponent } from './components/emp-form/emp-form.component';
import { FaqComponent } from './components/faq/faq.component';
import { FormSubmittedComponent } from './components/form-submitted/form-submitted.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PropFormComponent } from './components/prop-form/prop-form.component';
import { RegisterComponent } from './components/register/register.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { UserPageComponent } from './components/user-page/user-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'emicalculator',
    component:EmiCalculatorComponent
  },
  {
    path:'eligibility',
    component:EligibilityCalculatorComponent
  },
  {
    path:'cibil',
    component:CibilComponent
  },
  {
    path:'faq',
    component:FaqComponent
  },
  {
    path:'about',
    component:AboutusComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path: 'applicantform',
    component: RegistrationFormComponent
  },
  {
    path: 'empform',
    component: EmpFormComponent
  },
  {
    path: 'propform',
    component: PropFormComponent
  },
  {
    path: 'bankform',
    component: BankFormComponent
  },
  {
    path: 'docform',
    component: DocFormComponent
  },
  {
    path: 'formsubmitted',
    component: FormSubmittedComponent
  },
  {
    path: 'userpage',
    component: UserPageComponent
  },
  {
    path: 'adminpage',
    component: AdminPageComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
