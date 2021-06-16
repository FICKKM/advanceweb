import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { OrderService } from 'src/app/services/order.service';
import { menuType } from 'src/app/services/menu.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-showmenu',
  templateUrl: './showmenu.component.html',
  styleUrls: ['./showmenu.component.css']
})
export class ShowmenuComponent implements OnInit {

  menus: menuType[]

  previewLoaded: boolean = false;

  constructor(private menu: MenuService, private order: OrderService, private bill: BillService) { 
    this.onLoading();
  }

  billForm = new FormGroup({
    id: new FormControl('', []),
    name: new FormControl('', []),
    sum: new FormControl('', []),
  });
  sum = this.getSumPrice();
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

  addOrder(id){
    this.order.add(id);
  }

  deleteOrder(id){
    this.order.add(id);
  }

  getCounter(){
    return this.order.getCounter();
  }

  getAllMenu(){
    return this.menu.getAllMenu();
  }
  getSumPrice(){
    return this.order.getSumPrice();
  }
  resetForm(){
    this.billForm.reset();
    this.previewLoaded = false;
  }
  addBill(){
    this.bill.addBill(this.billForm.value).subscribe(
      data => {
        console.log(data)
        alert('Bill added successfully');
        this.billForm.reset();
      },
      err => {
        console.log(err);
      });
      window.location.reload();
  }
}
