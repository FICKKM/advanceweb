import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  bill: any;

  constructor(private http: HttpClient) { }

  addBill(bill){
    return this.http.post<any>('http://localhost:4400/bills/add', bill)
      .pipe(map(data => {
        return data;
      }));
  }

  getBill(){
    return this.http.get<any>('http://localhost:4400/bills/get')
      .pipe(map(data => {
        if(data){
          this.bill = data;
          console.log(this.bill);
        }
        return this.bill;
      }));
  }
}
