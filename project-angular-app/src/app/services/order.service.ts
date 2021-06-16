import { Injectable } from '@angular/core';
import { MenuService } from './menu.service';
import { menuType } from './menu.model';
import { LocalStorageService } from 'angular-web-storage';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  menus: any;
  counter: number = 0;
  sumPrice: number = 0;
  bill: menuType = [];

  constructor(private menu: MenuService,private http: HttpClient, private local: LocalStorageService) { }

  add(id: any){
    console.log('Add menu id: '+id+' to order');
    this.bill.push(this.menu.getSomeMenu(id));
    this.sumPrice += this.menu.getSomeMenu(id).price;
    //this.counter += 0.5;
    this.counter = this.bill.length;
  }
  delete(id: number){
    console.log('Add menu id: '+id+' to order');
    this.bill.push(this.menu.getSomeMenu[id]);
    this.sumPrice -= this.menu.getSomeMenu[id].price;
    //this.counter += 0.5;
    //this.counter = this.bill.length;
  }

  getAllMenu(){
    return this.http.get<any>('http://localhost:4400/menus/get')
      .pipe(map(data => {
        if(data){
          this.menus = data;
          console.log(this.menus);
        }
        return this.menus;
      }));
  }

  

  addMenu(id: number){
    //this.counter += 1;
  }

  getCounter(){
    //this.counter += 0.5;
    return this.counter;
  }

  getSumPrice(){
    return this.sumPrice;
  }

  getBill(){
    return this.bill;
  }

}
