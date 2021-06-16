import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AddMemberService } from '../../services/add-member.service'
@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  memberForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    tel: new FormControl(''),
    sum_price: new FormControl(''),
  });

  previewLoaded: boolean = false;
  constructor(private addmem: AddMemberService) { }

  ngOnInit(): void {
  }
  addMem() {
    this.addmem.addMem(this.memberForm.value).subscribe(
      data => {
        console.log(data)
        alert('Member added successfully');
        this.memberForm.reset();
      },
      err => {
        console.log(err);
      });
  }


  resetForm() {
    this.memberForm.reset(this.memberForm.value);
    this.previewLoaded = false;
  }

}
