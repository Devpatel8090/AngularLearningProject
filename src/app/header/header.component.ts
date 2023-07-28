import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserdataService } from '../services/userdata.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  users: any;
  constructor(private user:UserdataService){
    console.warn("userdata",user.users());
    this.users = user.users();
  }
  TotalTask: any[] = [];
  addTask(val: string) {

    this.TotalTask.push({ id: this.TotalTask.length, name: val });
    console.log(this.TotalTask);

  }

  removeTask(id: number) {
    console.log(id);

    this.TotalTask = this.TotalTask.filter(val => val.id !== id)
  }


  
}
