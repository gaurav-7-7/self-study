import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/auth.guard';
import { EditListComponent } from './components/edit-list/edit-list.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NewListComponent } from './components/new-list/new-list.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { TaskViewComponent } from './components/task-view/task-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/lists', pathMatch: 'full'},
  {path: 'new-list', component: NewListComponent},
  {path: 'edit-list/:listId', component: EditListComponent},
  {path: 'lists/:listId/edit-task/:taskId', component: EditTaskComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'lists/:listId/new-task', component: NewTaskComponent },
  {path: 'lists', canActivate: [AuthGuard], component: TaskViewComponent},
  {path: 'lists/:listId', component: TaskViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
