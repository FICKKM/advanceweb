import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShowEmployeeComponent } from './components/show-employee/show-employee.component';
import { ShowMemberComponent } from './components/show-member/show-member.component';
import { ShowMenuComponent } from './components/show-menu/show-menu.component';
import { SigninAdminComponent } from './components/signin-admin/signin-admin.component';
import { SigninEmployeeComponent } from './components/signin-employee/signin-employee.component';
import { ShowmenuComponent } from './components/showmenu/showmenu.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { BillComponent } from './components/bill/bill.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'show-employee', component: ShowEmployeeComponent},
  {path: 'show-member', component: ShowMemberComponent},
  {path: 'show-menu', component: ShowMenuComponent},
  {path: 'signin-admin', component: SigninAdminComponent},
  {path: 'signin-employee', component: SigninEmployeeComponent},
  {path: 'showmenu', component: ShowmenuComponent},
  {path: 'add-member', component: AddMemberComponent },
  {path: 'add-employee', component: AddEmployeeComponent },
  { path: 'add-menu', component: AddOrderComponent },
  { path: 'bill', component: BillComponent },
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
