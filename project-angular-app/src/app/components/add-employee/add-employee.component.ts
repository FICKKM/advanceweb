import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
  });
  previewLoaded: boolean = false;

  constructor(private emp: EmployeeService) { }

  ngOnInit(): void {
  }
  addEmployee() {
    this.emp.addEmployee(this.employForm.value).subscribe(
      data => {
        console.log(data)
        alert('Employee added successfully');
        this.employForm.reset();
      },
      err => {
        console.log(err);
      });
  }

  onChangeImg(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      var pattern = /image-*/;
      const reader = new FileReader();
      if (!file.type.match(pattern)) {
        alert('invalid format');
        this.employForm.reset();
      } else {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.previewLoaded = true;
          this.employForm.patchValue({
            img: reader.result
          });
        };
      }
    }
  }

  resetForm() {
    this.employForm.reset();
    this.previewLoaded = false;
  }
}
