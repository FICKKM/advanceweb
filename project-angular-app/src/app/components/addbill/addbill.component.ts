import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuService } from 'src/app/services/menu.service';
import { BillService } from 'src/app/services/bill.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-addbill',
  templateUrl: './addbill.component.html',
  styleUrls: ['./addbill.component.css']
})
export class AddbillComponent implements OnInit {

  //productType: string[] = ['CPU', 'RAM', 'HDD', 'Mainboard'];

  billForm = new FormGroup({
    bill: new FormControl('', []),
  });

  previewLoaded: boolean = false;

  constructor(private bill: BillService, private order: OrderService) { }

  ngOnInit(): void {
  }

  addBill(){
    this.bill.addBill(this.order.bill).subscribe(
      data => {
        console.log(data)
        alert('Bill added successfully');
        this.billForm.reset();
      },
      err => {
        console.log(err);
      });
  }

  resetForm(){
    this.billForm.reset();
    this.previewLoaded = false;
  }

}
