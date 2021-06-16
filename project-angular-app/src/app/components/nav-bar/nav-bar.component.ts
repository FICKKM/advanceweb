import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public local: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  signout(){
    this.local.clear();
    this.router.navigate(['/signin-employee']);
  }
}
