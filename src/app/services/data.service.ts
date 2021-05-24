import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser="";
  accountDetails:any = {
    1000: { acno: 1000, actype: "savings", username: "userone", password: "userone", balance: 5000 },
    1001: { acno: 1001, actype: "savings", username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, actype: "current", username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, actype: "current", username: "userfour", password: "userfour", balance: 6000 }
}
  constructor() {
    this.getDetails();
   }
  saveDetails(){
    localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails))
    if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
  }
 getDetails(){
   if(localStorage.getItem("accountDetails")){
    this.accountDetails= JSON.parse(localStorage.getItem("accountDetails") || '') 
   }
   if(localStorage.getItem("currentUser")){
this.currentUser=JSON.parse(localStorage.getItem("currentUser") || '')
   }
 }
 register(uname:any,acno:any,paswd:any){
  let user=this.accountDetails;
  if(acno in user){
    return false;
    
  }
  else{
    user[acno]={
      acno,
      username:uname,
      password:paswd,
      balance:0
    }
    this.saveDetails();
    return true;
    
  }
 }
 login(accnum:any,paswd:any){
  let users=this.accountDetails;
  if(accnum in users )
  {
    if(paswd ==users[accnum]["password"]){
   this.currentUser=users[accnum]["username"]
   this.saveDetails()
      return true;
      
    }
    else{
      alert("login failed")
      return false;
    }
  }
  else{
    alert("invalid accont number")
    return false;
  }
 }
 deposite(acno:any,pswd:any,amount:any){
   let user=this.accountDetails;
   if(acno in user){
     if(pswd==user[acno]["password"]){
    let depoAmount= user[acno]["balance"]+=parseInt(amount);
    this.saveDetails();
    
       return depoAmount;
       
     }
     else{
       alert("incorrect password");
       return false;
     }
   }
   else{
     alert("invalid account number");
     return false;
   }
 }
 withdraw(acno:any,paswd:any,amount:any){
   let users=this.accountDetails;
   if(acno in users){
     if(paswd==users[acno]["password"]){
       if(amount< users[acno]["balance"]){
         let withAmount= users[acno]["balance"] -=parseInt(amount);
         this.saveDetails();
         return withAmount;
       }
       else{
         alert("insuffcient balance");
         return false;
       }
     }
     else{
       alert("incorrect password");
       return false;
     }
   }
   else{
     alert("invalid account");
     return false;
   }
 }
}
