import { Injectable } from '@angular/core';
import { MenuService } from './menu.service';
import { menuType } from './menu.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  counter: number = 0;
  sumPrice: number = 0;
  bill: menuType = [];

  constructor(private menu: MenuService) { }

  add(id: number){
    console.log('Add menu id: '+id+' to order');
    this.bill.push(this.menu.getSomeMenu[id]);
    this.sumPrice += this.menu.getSomeMenu[id].price;
    //this.counter = this.bill.length;
    this.counter += 1;
    //this.counter += 1 --> ข้อ2
  }

  addMenu(id: number){
    //this.counter += 1;
  }

  getCounter(){
    return this.counter;
  }

  getSumPrice(){
    return this.sumPrice;
  }

  getCart(){
    //return this.cart;
  }

}
