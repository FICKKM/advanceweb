import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  employees: any;

  constructor(private http: HttpClient) { }

  addEmployee(employee) {
    return this.http.post<any>('http://localhost:4400/employees/add', employee)
      .pipe(map(data => {
        return data;
      }));
  }
  getEmployee() {
    return this.http.get<any>('http://localhost:4400/employees/get')
      .pipe(map(data => {
        if (data) {
          this.employees = data;
          console.log(this.employees);
        }
        return this.employees;
      }));
  }
}