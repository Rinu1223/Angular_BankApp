import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
aim="welcome";
accno="account number please"
pswd=""
  constructor() { }

  ngOnInit(): void {
  }
   accountDetails:any = {
    1000: { acno: 1000, actype: "savings", username: "userone", password: "userone", balance: 5000 },
    1001: { acno: 1001, actype: "savings", username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, actype: "current", username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, actype: "current", username: "userfour", password: "userfour", balance: 6000 }
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
  
  var accnum=this.accno;
  var paswd=this.pswd;
  let users=this.accountDetails;
  if(accnum in users )
  {
    if(paswd ==users[accnum]["password"]){
      alert("login successful")
    }
    else{
      alert("login failed")
    }
  }
  else{
    alert("invalid accont number")
  }
}
}
