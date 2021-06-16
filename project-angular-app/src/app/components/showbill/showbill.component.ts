import { Component, OnInit } from '@angular/core';
import { BillService } from '../../services/bill.service'
@Component({
  selector: 'app-showbill',
  templateUrl: './showbill.component.html',
  styleUrls: ['./showbill.component.css']
})
export class ShowbillComponent implements OnInit {

  bills: any

  constructor(private bill: BillService) {
    this.onLoading();
  }

  onLoading(){
    try {
      this.bill.getBill().subscribe(
        data => {
          this.bills = data;
        },
        err => {
          console.log(err)
        });
    } catch (error) {
      console.log(error)
    }
  }

  ngOnInit(): void {
  }

}
