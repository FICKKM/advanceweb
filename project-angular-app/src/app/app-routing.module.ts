import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninAdminComponent } from './components/signin-admin/signin-admin.component';
import { SigninEmployeeComponent } from './components/signin-employee/signin-employee.component';

const routes: Routes = [
  {path: 'signin', component: SigninAdminComponent},
  {path: 'signin', component: SigninEmployeeComponent},
  {path: '', 
    redirectTo: 'signin',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
