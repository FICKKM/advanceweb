import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-employee',
  templateUrl: './signin-employee.component.html',
  styleUrls: ['./signin-employee.component.css']
})
export class SigninEmployeeComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router,private auth: AuthService) { }

  ngOnInit(): void {

  }

  signinEmployee(){
    console.log(this.authForm.value);
    this.auth.signIn(this.authForm.value).subscribe(
      data => {
        if(data.status == true){
          this.router.navigate(['/products']);
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
