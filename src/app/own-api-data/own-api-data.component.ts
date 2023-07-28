import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-own-api-data',
  templateUrl: './own-api-data.component.html',
  styleUrls: ['./own-api-data.component.css']
})
export class OwnApiDataComponent {
 users:any;
 constructor(private userData:UserdataService) {
  userData.usersDataByOwnApi().subscribe((data)=>{
    console.warn("data",data)
    this.users = data;
  });
}
getUserData(data:any){
  // console.warn(data);
  this.userData.saveUsers(data).subscribe((result)=>{
    console.warn(result);
  });
  

}
}
