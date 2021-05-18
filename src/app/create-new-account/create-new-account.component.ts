import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.css']
})
export class CreateNewAccountComponent implements OnInit {

  constructor(private dataservice:DataService, private router:Router) { }

  ngOnInit(): void {
  }
  accno="";
  uname="";
  pswd="";
  register(){
    var uname=this.uname;
    var acno=this.accno;
    var paswd=this.pswd;
   const result= this.dataservice.register(uname,acno,paswd)
   if(result){
    alert("successfully registered...");
    this.router.navigateByUrl("");
   }
   else{
    alert("user exit... please Login");
   }

  }

}
