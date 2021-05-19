import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router, private dataservice:DataService) { }

  ngOnInit(): void {
  }
  acno="";
  pswd="";
  depamount="";
  accno="";
  paswd="";
  withamout="";
  deposite(){
    let accno=this.acno;
    let pasword=this.pswd;
    let depositeAmount=this.depamount;
   const result= this.dataservice.deposite(accno,pasword,depositeAmount)
   if(result){
    alert(`the given amount : ${depositeAmount} is credited, your aval balance is : ${result}`)
   }
    
  }
  withdraw(){
    let accno=this.accno;
    let pasword=this.paswd;
    let withdrawAmount=this.withamout;
   const DataResult= this.dataservice.withdraw(accno,pasword,withdrawAmount)

 if(DataResult){
  alert(`${withdrawAmount} is debited from your account.Your aval balance is : ${DataResult}`);
   }
  }
}
