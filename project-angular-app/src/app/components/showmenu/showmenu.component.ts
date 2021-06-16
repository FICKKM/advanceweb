import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { OrderService } from 'src/app/services/order.service';
import { menuType } from 'src/app/services/menu.model';

@Component({
  selector: 'app-showmenu',
  templateUrl: './showmenu.component.html',
  styleUrls: ['./showmenu.component.css']
})
export class ShowmenuComponent implements OnInit {

  menus: menuType[]

  constructor(private menu: MenuService, private order: OrderService) { 
    this.onLoading();
  }

  ngOnInit(): void {
  }

  onLoading(){
    try {
      this.menu.getAllMenu().subscribe(
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

  addOrder(id: number){
    this.order.add(id);
  }

  getCounter(){
    return this.order.getCounter();
  }

  getAllMenu(){
    return this.menu.getAllMenu();
  }
}
