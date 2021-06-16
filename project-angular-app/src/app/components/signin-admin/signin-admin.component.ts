import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-admin',
  templateUrl: './signin-admin.component.html',
  styleUrls: ['./signin-admin.component.css']
})
export class SigninAdminComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {

  }

  signinAdmin(){
    console.log(this.authForm.value);
    this.auth.signInAdmin(this.authForm.value).subscribe(
      data => {
        if(data.status == true){
          this.router.navigate(['/show-employee']);
        }else{
          alert('Username or Password is incorrect!');
        }
      },
      err => {
        console.log(err)
        alert('Username or Password is incorrect!');
      });
  }

}
