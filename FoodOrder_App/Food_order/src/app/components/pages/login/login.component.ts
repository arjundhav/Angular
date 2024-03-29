import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup;
isSubmitted=false;
returnUrl="";
  constructor(private formbuilder:FormBuilder, private userservice:UserService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
    this.returnUrl=this.activatedRoute.snapshot.queryParams['returnUrl']
  }
get formControls(){
  return this.loginForm.controls;
}
submit(){  

  this.isSubmitted=true;
  if(this.loginForm.invalid)
  return 
  this.userservice.login({
    email: this.formControls['email'].value,
    password: this.formControls['password'].value}).subscribe(()=>{
      this.router.navigateByUrl(this.returnUrl)
    })
}
}
