import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BankService } from '../bank.service';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
 //user 
 user = new User();
 msg='';

  // loginForm = new FormGroup({
  //   username: new FormControl(),
  //   password: new FormControl()
  // });  
  // valid: boolean;
  // isSubmited: boolean;
  constructor(private fb: FormBuilder, private route: Router, private _service: BankService) { }

  ngOnInit() {
  }

  usernav(){
    this.route.navigateByUrl('usernav');
  }


  // login() {
  //   console.log(this.loginForm);
  //   if (this.loginForm.value.username === 'shubha' && this.loginForm.value.password === 'Password@123') {
  //     this.valid = true;
  //     console.log(this.valid);
  //     localStorage.setItem('userDetails', JSON.stringify({ username: 'shubha', password: 'Password@123' }));
  //     this.route.navigateByUrl('');
  //   } else {
  //     this.isSubmited = true;
  //     this.valid = false;
  //     setInterval(() => {
  //       this.isSubmited = false;
  //     }, 5000);
  //     this.valid = null;
  //   }
    //this.loginForm.reset();//
  // }
  logout(){
    this.route.navigateByUrl('home');
  }

  // loginUser from remote
  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response received");
        this.route.navigate(['/loginsuccess'])
      },
      error=>{
        console.log("exception occured")
      this.msg="please enter valid emailId and password";
      }

    ); //returns response in the form of subscribe so return subscribe method
 
  }

}



