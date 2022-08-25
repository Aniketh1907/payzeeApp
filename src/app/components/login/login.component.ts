import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials={
    username:"",
    password:""
  }
  constructor() { }

  ngOnInit(): void {
  }
onSubmit(){
  console.log("submitted")
  if((this.credentials.username==""||this.credentials.password=="")||(this.credentials.username==null||this.credentials.password==null))
  {
    
    console.log("fill form")
  }
  else{
    window.location.href="/dashboard";
    
  }
}
}
