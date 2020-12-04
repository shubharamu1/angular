import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {
  // addcustomers: any;
  user = new User();
  msg='';
  myGroup: FormGroup;
 
  // customer: Customer = new Customer();
  // submitted = false;

  // constructor(private bankService: BankService,
  //   private router: Router) { }
  constructor(private fb: FormBuilder,  private _service: BankService){};
// addCustomersForm=this.fb.group({
//   firstName: ['',[Validators.required,Validators.minLength(4)]]




// });

// get firstName(){
//   return this.addCustomersForm.get('firstName');
// }
  ngOnInit() {

    // this.addcustomers=this.fb.group({
    //   firstname: this.fb.control('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    //   lastname: this.fb.control('',[Validators.required,Validators.minLength(9),Validators.maxLength(10)]),
    //   date: this.fb.control('',[Validators.required]),
    //   adharno: this.fb.control('',[Validators.required,Validators.minLength(10)]),
    //   email: this.fb.control('',[Validators.required,Validators.email]),
    //   mobileno: this.fb.control('',[Validators.required,Validators.minLength(9),Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    //   address: this.fb.control('',[Validators.required]),
    //   accountno: this.fb.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(6)]),
    //   branch: this.fb.control('',[Validators.required]),
    //   balance: this.fb.control('',[Validators.required,Validators.maxLength(7)]),
    //   pin: this.fb.control('',[Validators.required,Validators.minLength(3),Validators.maxLength(4)]),
    //   username: this.fb.control('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
    //   password: this.fb.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
      
    // })

    this.myGroup = new FormGroup({
      id: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl(),
      dob: new FormControl(),
      gender: new FormControl(),
      adharno: new FormControl(),
      address: new FormControl(),
      emailId: new FormControl(),
      accountno: new FormControl(),
      branch: new FormControl(),
      mobileno: new FormControl(),
      balance: new FormControl(),
      pin: new FormControl(),
      username: new FormControl(),
      password: new FormControl()
    });
  }

  // onSubmit() {
  //   this.submitted = true;
  //   this.bankService.createCustomer(this.customer)
  //   .subscribe(data => console.log(data), error => console.log(error));
  //   this.customer = new Customer();
  //   this.router.navigate(['/']);
  // }

//  onSubmit(){
//    console.log("form submitted");
//    }
    

   addUser(){
     this._service.addUserFromRemote(this.user).subscribe(
       data=>{
         console.log("response received");
         this.msg="added successfully";
       },
       

       error=>{
        console.log("exception occured");
        this.msg=error.error
     }
     )
     this.myGroup.reset();




   }




}
