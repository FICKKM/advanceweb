import { Component, OnInit } from '@angular/core';
import { AddMemberService } from '../../services/add-member.service';

@Component({
  selector: 'app-show-member',
  templateUrl: './show-member.component.html',
  styleUrls: ['./show-member.component.css']
})
export class ShowMemberComponent implements OnInit {

  members: any

  constructor(private mem: AddMemberService) {
    this.onLoading();
  }

  ngOnInit(): void { }

  onLoading(){
    try {
      this.mem.getMem().subscribe(
        data =>{
          this.members = data;
        },
        err => {
          console.log(err)
        });
    }catch(error){
      console.log(error)
    }
  }
}

