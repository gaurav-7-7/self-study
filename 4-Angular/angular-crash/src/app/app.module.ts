import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestComponent } from './components/test/test.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ArrayFormComponent } from './components/array-form/array-form.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { NestedFormComponent } from './components/nested-form/nested-form.component';
import { SubmitFormComponent } from './components/submit-form/submit-form.component';
import { ValidFormComponent } from './components/valid-form/valid-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: 'departments', component: DepartmentListComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: '', component: TasksComponent},
  {path: 'about', component: AboutComponent}
]

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { PipesComponent } from './components/pipes/pipes.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ReversePipe } from './reverse.pipe';
import { DataSharingComponent } from './components/data-sharing/data-sharing.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
    TestComponent,
    ContactFormComponent,
    ArrayFormComponent,
    BasicFormComponent,
    NestedFormComponent,
    SubmitFormComponent,
    ValidFormComponent,
    PipesComponent,
    DataBindingComponent,
    ReversePipe,
    DataSharingComponent,
    DepartmentListComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatChipsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
