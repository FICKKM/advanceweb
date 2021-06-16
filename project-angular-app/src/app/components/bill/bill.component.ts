import { Component, OnInit } from '@angular/core';
import { menuType } from 'src/app/services/menu.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  bill: menuType = []

  constructor(private order: OrderService) { 
    this.bill = this.order.getBill();
  }

  ngOnInit(): void {}

  getCounter(){
    return this.order.getCounter();
  }

  getSumPrice(){
    return this.order.getSumPrice();
  }

}
