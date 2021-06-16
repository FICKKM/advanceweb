import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'angular-web-storage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, public local: LocalStorageService) { }

  signInAdmin(authData: any){
    return this.http.post<any>('http://localhost:3000/signin-admin/signin-admin', authData)
      .pipe(map(data => {
        if(data){
          this.local.set('signin', data, 1, 'w');
          console.log(this.local.get('signin'));
        }
        return data;
      }));
  }

  signInEmployee(authData: any){
    return this.http.post<any>('http://localhost:3000/signin-employee/signin-employee', authData)
      .pipe(map(data => {
        if(data){
          this.local.set('signin', data, 1, 'w');
          console.log(this.local.get('signin'));
        }
        return data;
      }));
  }

}
