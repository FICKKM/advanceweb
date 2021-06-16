import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-showmenu',
  templateUrl: './showmenu.component.html',
  styleUrls: ['./showmenu.component.css']
})
export class ShowmenuComponent implements OnInit {

  menus: any

  constructor(private mn: MenuService, private or: OrderService) { 
    this.onLoading();
  }

  ngOnInit(): void {
  }

  onLoading(){
    try {
      this.mn.getMenu().subscribe(
        data => {
          this.menus = data;
        },
        err => {
          console.log(err)
        });
    } catch (error) {
      console.log(error)
    }
  }

  add(id: number){
    this.or.addMenu(id);
  }
  delete(id: number){
    //this.or.deleteMenu(id);
  }
}
