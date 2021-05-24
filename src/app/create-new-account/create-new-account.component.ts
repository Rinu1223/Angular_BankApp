import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.css']
})
export class CreateNewAccountComponent implements OnInit {

  constructor(private dataservice:DataService, private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    accno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })
  
  register(){
    if(this.registerForm.valid){
      var username=this.registerForm.value.uname;
    var acno=this.registerForm.value.accno;
    var paswd=this.registerForm.value.pswd;
   const result= this.dataservice.register(username,acno,paswd)
   if(result){
    alert("successfully registered...");
    this.router.navigateByUrl("");
   }
   else{
    alert("user exit... please Login");
   }
    }
    else{
//if(this.registerForm.get('uname')?.errors){
alert("user name required");
//}
    }

  }

}
