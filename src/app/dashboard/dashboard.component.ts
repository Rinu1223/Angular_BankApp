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
  user:any
  constructor(private router:Router, private dataservice:DataService,private fb:FormBuilder) {
   this.user= localStorage.getItem("name")
   }
  
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

  ngOnInit(): void {
  }
 
  deposite(){
    if(this.depositForm.valid){
    let accno=this.depositForm.value.acno;
    let password=this.depositForm.value.pswd;
    let depositeAmount=this.depositForm.value.depamount;
    this.dataservice.deposite(accno,password,depositeAmount)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message);
       }
      },
      (result)=>{
        alert(result.error.message)
      
    })
   
  }
  else{
    alert("Invalid Form");
  }
    
  }
  withdraw(){
    if(this.WithdrawForm.valid){
    let accno=this.WithdrawForm.value.accno;
    let password=this.WithdrawForm.value.paswd;
    let withdrawAmount=this.WithdrawForm.value.withamout;
    this.dataservice.withdraw(accno,password,withdrawAmount)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message);
         }
        },
        (result)=>{
          alert(result.error.message)
        
    })
 
  }
  else{
    alert("Invalid Form")
  }
  }
}
