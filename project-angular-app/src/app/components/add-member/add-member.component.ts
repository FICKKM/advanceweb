import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AddMemberService } from '../../services/add-member.service'
@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  memberForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required]),
    sum_price: new FormControl('', [Validators.required]),
  });

  previewLoaded: boolean = false;
  constructor(private addmem: AddMemberService) { }

  ngOnInit(): void {
  }
  addMember() {
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

  onChangeImg(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      var pattern = /image-*/;
      const reader = new FileReader();
      if (!file.type.match(pattern)) {
        alert('invalid format');
        this.memberForm.reset();
      } else {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.previewLoaded = true;
          this.memberForm.patchValue({
            img: reader.result
          });
        };
      }
    }
  }

  resetForm() {
    this.memberForm.reset();
    this.previewLoaded = false;
  }

}
