import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
title:string = "Template Driven Form";
name:string='';
password:string='';
userLogin(item:any){
  console.warn(item);
  this.name= item.name;
  this.password = item.password;
}
users:any;
constructor(private userData:UserdataService) {
  userData.usersDataByApi().subscribe((data)=>{
    console.warn("data",data)
    this.users = data;
  });

}
}
