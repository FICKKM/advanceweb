import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MenuService } from '../../services/menu.service'
@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  menuForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
  });

  previewLoaded: boolean = false;
  constructor(private addmenu: MenuService) { }

  ngOnInit(): void {
  }

  addMenu() {
    this.addmenu.addMenu(this.menuForm.value).subscribe(
      data => {
        console.log(data)
        alert('Menu added successfully');
        this.menuForm.reset();
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
        this.menuForm.reset();
      } else {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.previewLoaded = true;
          this.menuForm.patchValue({
            img: reader.result
          });
        };
      }
    }
  }

  resetForm() {
    this.menuForm.reset();
    this.previewLoaded = false;
  }

}
