import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  employees: any

  constructor(private emp: EmployeeService) {
    this.onLoading();
  }

  ngOnInit(): void { }

  onLoading(){
    try {
      this.emp.getEmployee().subscribe(
        data =>{
          this.employees = data;
        },
        err => {
          console.log(err)
        });
    }catch(error){
      console.log(error)
    }
  }
}
