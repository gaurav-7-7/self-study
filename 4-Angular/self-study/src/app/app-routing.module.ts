import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ErrorComponent } from './components/error/error.component';
import { ParentComponent } from './components/parent/parent.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'EmpL', component: EmployeeListComponent },
  { path: 'EmpD', component: EmployeeDetailComponent},
  { path: 'rForm', component: ReactiveFormComponent },
  { path: 'subject', component: ParentComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
