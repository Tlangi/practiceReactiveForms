import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormControlComponent} from './forms/form-control/form-control.component';
import {FormGroupComponent} from './forms/form-group/form-group.component';
import {FormBuilderComponent} from './forms/form-builder/form-builder.component';
import {FormArrayComponent} from './forms/form-array/form-array.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: 'dashboard', component: HomeComponent },
  { path: 'formControl', component: FormControlComponent },
  { path: 'formGroup', component: FormGroupComponent },
  { path: 'formArray', component: FormArrayComponent },
  { path: 'formBuilder', component: FormBuilderComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
