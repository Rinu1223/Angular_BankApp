import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private router:Router, private dataservice:DataService,private fb:FormBuilder) { }
  
  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    depamount:['',[Validators.required,Validators.minLength(1),Validators.pattern('[0-9]*')]],
     
  })
  WithdrawForm=this.fb.group({
  accno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  paswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
 withamout:['',[Validators.required,Validators.minLength(1),Validators.pattern('[0-9]*')]]
})
user=this.dataservice.currentUser;
  ngOnInit(): void {
  }
 
  deposite(){
    if(this.depositForm.valid){
    let accno=this.depositForm.value.acno;
    let pasword=this.depositForm.value.pswd;
    let depositeAmount=this.depositForm.value.depamount;
   const result= this.dataservice.deposite(accno,pasword,depositeAmount)
   if(result){
    alert(`the given amount : ${depositeAmount} is credited, your aval balance is : ${result}`)
   }
  }
  else{
    alert("Invalid Form");
  }
    
  }
  withdraw(){
    if(this.WithdrawForm.valid){
    let accno=this.WithdrawForm.value.accno;
    let pasword=this.WithdrawForm.value.paswd;
    let withdrawAmount=this.WithdrawForm.value.withamout;
   const DataResult= this.dataservice.withdraw(accno,pasword,withdrawAmount)

 if(DataResult){
  alert(`${withdrawAmount} is debited from your account.Your aval balance is : ${DataResult}`);
   }
  }
  else{
    alert("Invalid Form")
  }
  }
}
