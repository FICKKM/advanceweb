import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menus: any;

  constructor(private http: HttpClient) { }

  /*addProduct(menu){
    return this.http.post<any>('http://localhost:3000/products/add', menu)
      .pipe(map(data => {
        return data;
      }));
  }*/

  getMenu(){
    return this.http.get<any>('http://localhost:4400/menus/get')
      .pipe(map(data => {
        if(data){
          this.menus = data;
          console.log(this.menus);
        }
        return this.menus;
      }));
  }

  getSomeMenu(id: number){
    return this.menus(id);
  }
}