import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from '../ApiResponse';
import { BankService } from '../bank.service';

import { User } from '../user';

@Component({
  selector: 'app-update-customers',
  templateUrl: './update-customers.component.html',
  styleUrls: ['./update-customers.component.css']
})
export class UpdateCustomersComponent implements OnInit {

  id: number;
  
  apiResponse:ApiResponse;
  user = new User();
  msg='';
  myGroup: FormGroup;
  result:any
 

  constructor(private route: ActivatedRoute,private router: Router,
    private _service: BankService) { }

  ngOnInit() {
    // this.customer = new Customer();

  //   this.id = this.route.snapshot.params['id'];
  //   this.bankService.getCustomersById(this.id)
  //     .subscribe(data => {
  //       console.log(data)
  //       this.customer = data;
  //     }, error => console.log(error));
  // }

  // onSubmit() {
  //   this.bankService.updateCustomer(this.id, this.customer)
  //     .subscribe(data => console.log(data), error => console.log(error));
  //   this.customer = new Customer();
  //   this.router.navigate(['/customers']);
  //   }

  
  // list(){
  //   this.router.navigate(['customers']);
  // }

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
  

 




 

let id=parseInt(this.route.snapshot.paramMap.get('id'));
this._service.fetchUserByidFromRemote(id).subscribe(
  data=>{
    console.log("data received");
    this.result=data[0];
    console.log(this.result);
  },
  error=>{
    console.log("exception occured");
  }
)
 
}

updateUser(){
  // this.service.fetchUserByidFromRemote(this.customer).subscribe(
  //   data=>{
  //     console.log("response received");
  //     this.msg="updated successfully";
  //     this.router.navigate(['/cutomerslist'])
    // },
    

//     error=>{
//      console.log("exception occured");
//      this.msg=error.error
     
//   }
//   )
//   this.myGroup.reset();
 
this._service.updateUser(this.user).subscribe(data=> {
  this.msg="user updated succesfully"
console.log(this.msg);
  this.router.navigate(['/customerslist'])
   
        },
        error=>("cannot update")
      )
        }
 

gotolist(){
  console.log("go back");
  this.router.navigate(['customerslist']);
}
}


