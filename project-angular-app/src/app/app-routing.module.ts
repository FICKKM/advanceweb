import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShowEmployeeComponent } from './components/show-employee/show-employee.component';
import { ShowMemberComponent } from './components/show-member/show-member.component';
import { ShowMenuComponent } from './components/show-menu/show-menu.component';
import { SigninAdminComponent } from './components/signin-admin/signin-admin.component';
import { SigninEmployeeComponent } from './components/signin-employee/signin-employee.component';
import { ShowmenuComponent } from './components/showmenu/showmenu.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'show-employee', component: ShowEmployeeComponent},
  {path: 'show-member', component: ShowMemberComponent},
  {path: 'show-menu', component: ShowMenuComponent},
  {path: 'signin-admin', component: SigninAdminComponent},
  {path: 'signin-employee', component: SigninEmployeeComponent},
  {path: 'show-menu', component: ShowmenuComponent},
  {path: '', 
    redirectTo: 'signin-employee',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
