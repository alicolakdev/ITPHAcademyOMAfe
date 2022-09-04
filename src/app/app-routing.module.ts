import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PersonnelComponent } from './components/personnel/personnel.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectdetailComponent } from './components/projectdetail/projectdetail.component';
import { RoleComponent } from './components/role/role.component';

const routes: Routes = [
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
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
