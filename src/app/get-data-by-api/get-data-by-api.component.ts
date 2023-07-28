import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
@Component({
  selector: 'app-get-data-by-api',
  templateUrl: './get-data-by-api.component.html',
  styleUrls: ['./get-data-by-api.component.css']
})
export class GetDataByApiComponent {
  users:any;
  constructor(private userData:UserdataService) {
    userData.usersDataByApi().subscribe((data)=>{
      console.warn("data",data)
      this.users = data;
    });
     
   } 
}
