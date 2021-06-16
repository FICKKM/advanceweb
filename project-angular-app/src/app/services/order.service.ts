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

  constructor(private mn: MenuService) { }

  add(id: number){
    console.log('Add product id: '+id+' to cart');
    this.bill.push(this.mn.menus(id));
    this.sumPrice += this.mn.getSomeMenu(id).price;
    //this.counter = this.cart.length;
    //this.counter += 1 --> ข้อ2
  }

  addMenu(id: number){
    this.counter += 1;
  }

  /*deleteMenu(counter: number = this.addMenu()){
    counter -= 1;
    return counter;
  }*/

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
