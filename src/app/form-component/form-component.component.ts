import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
displaydata: any = {};

Submit(data:NgForm){
console.log(data);
this.displaydata = data;
}

}

