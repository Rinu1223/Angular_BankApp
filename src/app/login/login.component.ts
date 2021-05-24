import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
aim="welcome";
accno="account number please"
pswd=""
  constructor(private router:Router,private dataservice:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
   
accnoChange(event:any){
  this.accno=event.target.value;
  console.log(this.accno);
  
}
pswdChange(event:any){
  this.pswd=event.target.value;
  console.log(this.pswd);
  
}
loginform=this.fb.group({
  accno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

})

login(){
  
  //var accnum=this.accno;
 // var paswd=this.pswd;
 if(this.loginform.valid){
 var accnum=this.loginform.value.accno;
 var paswd=this.loginform.value.pswd;
 const result= this.dataservice.login(accnum,paswd)
 if(result){
  alert("login successful")
  this.router.navigateByUrl("dashboard")
 }
}
else
{
  alert("invalid form");
}
}
createNewAccount(){
  this.router.navigateByUrl("createNewAccount")
}
}
