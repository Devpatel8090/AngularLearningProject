import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:any;
  constructor(private user:UserdataService){
    console.warn("userdata",user.users());
    this.users = user.users();
  }
  title = 'Dev';
  name:any;
  
  GetData(){
    alert("button Clicked");
  };
  GetBoxData(val:string){
    alert(val);
  }
}
