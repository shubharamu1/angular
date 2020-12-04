import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';
import { Beneficiary } from '../beneficiary';

@Component({
  selector: 'app-addbeneficiary',
  templateUrl: './addbeneficiary.component.html',
  styleUrls: ['./addbeneficiary.component.css']
})
export class AddbeneficiaryComponent implements OnInit {

  benef: Beneficiary=new Beneficiary();
  addbeneficiary:any;
  message: any;
  beneficiary: any;
  constructor(private route:Router,private service:BankService) { }

  beneficiaryForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    mobileno: new FormControl(),
    accountno: new FormControl(),
    email: new FormControl(),
  });

  ngOnInit() {
  }
  back(){

    this.route.navigateByUrl('usernav');
  }

  onAddBenef(){
    let data={
      beneficiaryfirstName:this.beneficiaryForm.value.firstname,
      beneficiarylastName:this.beneficiaryForm.value.lastname,
      b_emailid:this.beneficiaryForm.value.email,
      b_accountno:this.beneficiaryForm.value.accountno,
      mobileno:this.beneficiaryForm.value.mobileno,
      b_balance:0
    }
    let resp=this.service.doAddBeneficiary(data);
    resp.subscribe((data)=>this.message=data);
  }


}
