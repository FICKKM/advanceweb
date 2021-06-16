import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.css']
})
export class ShowMenuComponent implements OnInit {

  menus: any

  constructor(private menu: MenuService) {
    this.onLoading();
  }

  ngOnInit(): void {  }

  onLoading(){
    try {
      this.menu.getMenu().subscribe(
        data =>{
          this.menus = data;
        },
        err => {
          console.log(err)
        });
    }catch(error){
      console.log(error)
    }
  }

}
