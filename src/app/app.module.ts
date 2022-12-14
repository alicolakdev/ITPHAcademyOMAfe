import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoleComponent } from './components/role/role.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectdetailComponent } from './components/projectdetail/projectdetail.component';
import { PersonnelComponent } from './components/personnel/personnel.component';
import { CommentsComponent } from './components/comments/comments.component';
import { TaskComponent } from './components/task/task.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    CustomerComponent,
    LoginComponent,
    ProjectComponent,
    ProjectdetailComponent,
    PersonnelComponent,
    CommentsComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
