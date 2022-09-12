import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { PersonnelComponent } from './components/personnel/personnel.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectdetailComponent } from './components/projectdetail/projectdetail.component';
import { RoleComponent } from './components/role/role.component';
import { TaskComponent } from './components/task/task.component';
import { AuthService } from './services/authentication.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path: 'customers',
    component: CustomerComponent
  },
  {
    path: 'projects',
    component: ProjectComponent
  },
  {
    path: 'personnel',
    component: PersonnelComponent
  },
  {
    path: 'roles',
    component: RoleComponent
  },
  {
    path: 'projects/:id',
    component: ProjectdetailComponent
  },
  {
    path: 'tasks/:id',
    component: TaskComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
