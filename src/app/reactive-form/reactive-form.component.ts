import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveFormId:any;
constructor(private route:ActivatedRoute){ }

  ngOnInit(): void {   
    this.reactiveFormId =  Number(this.route.snapshot.params['id']);
    
}
title: string = "Reactive Form";
loginForm = new FormGroup({
  user:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
  password:new FormControl('',[Validators.required,Validators.minLength(5)])
});
userLogin(){
  console.warn(this.loginForm.value);
  // console.warn(this.loginForm.value.user);
  
}
get userValidation() {
  return this.loginForm.get('user');
}
get passwordValidation(){
  return this.loginForm.get('password');
}
}
