import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularWebStorageModule } from 'angular-web-storage';
import { SigninAdminComponent } from './components/signin-admin/signin-admin.component';
import { SigninEmployeeComponent } from './components/signin-employee/signin-employee.component';
import { ShowMemberComponent } from './components/show-member/show-member.component';
import { ShowEmployeeComponent } from './components/show-employee/show-employee.component';
import { ShowMenuComponent } from './components/show-menu/show-menu.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ShowmenuComponent } from './components/showmenu/showmenu.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { BillComponent } from './components/bill/bill.component';
import { AddbillComponent } from './components/addbill/addbill.component';
import { ShowbillComponent } from './components/showbill/showbill.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninAdminComponent,
    SigninEmployeeComponent,
    ShowMemberComponent,
    ShowEmployeeComponent,
    ShowMenuComponent,
    HomeComponent,
    NavBarComponent,
    ShowmenuComponent,
    AddOrderComponent,
    AddEmployeeComponent,
    AddMemberComponent,
    BillComponent,
    AddbillComponent,
    ShowbillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularWebStorageModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatSliderModule,
    MatToolbarModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
