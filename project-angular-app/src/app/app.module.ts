import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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

@NgModule({
  declarations: [
    AppComponent,
    SigninAdminComponent,
    SigninEmployeeComponent,
    ShowMemberComponent,
    ShowEmployeeComponent,
    ShowMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularWebStorageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
