import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddMemberService {

  members: any;
  constructor(private http: HttpClient) { }

  addMem(member) {
    return this.http.post<any>('http://localhost:4400/members/add', member)
      .pipe(map(data => {
        return data;
      }));
  }
  getMem() {
    return this.http.get<any>('http://localhost:4400/members/get')
      .pipe(map(data => {
        if (data) {
          this.members = data;
          console.log(this.members);
        }
        return this.members;
      }));
  }

  deleteMember(member){
    return this.http.delete<any>('http://localhost:4400/members/delete', member)
  }

}
