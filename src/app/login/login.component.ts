import { Component, OnInit } from '@angular/core';
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
  constructor(private router:Router,private dataservice:DataService) { }

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
login(){
  
  //var accnum=this.accno;
 // var paswd=this.pswd;
 var accnum=this.accno;
 var paswd=this.pswd;
 const result= this.dataservice.login(accnum,paswd)
 if(result){
  alert("login successful")
  this.router.navigateByUrl("dashboard")
 }
}
createNewAccount(){
  this.router.navigateByUrl("createNewAccount")
}
}
