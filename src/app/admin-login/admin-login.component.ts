import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';
import { User } from '../user';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  user = new User();
  msg='';

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });  
  valid: boolean;
  isSubmited: boolean;
  constructor(private fb: FormBuilder, private route: Router, private _service:BankService) { }

  adminnav(){
    this.route.navigateByUrl('adminnav');
  }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm);
    if (this.loginForm.value.username === 'shubha' && this.loginForm.value.password === 'Password@123') {
      this.valid = true;
      console.log(this.valid);
      localStorage.setItem('userDetails', JSON.stringify({ username: 'shubha', password: 'Password@123' }));
      this.route.navigateByUrl('adminnav');
    } else {
      this.isSubmited = true;
      this.valid = false;
      setInterval(() => {
        this.isSubmited = false;
      }, 5000);
      this.valid = null;
    }
    //this.loginForm.reset();
  }

  adminLogin(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response received");
        this.route.navigate(['/admin-nav'])
      },
      error=>{
        console.log("exception occured")
      this.msg="please enter valid emailId and password";
      }

    ); //returns response in the form of subscribe so return subscribe method
 
  }

}



