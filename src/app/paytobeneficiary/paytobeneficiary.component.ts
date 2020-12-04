import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paytobeneficiary',
  templateUrl: './paytobeneficiary.component.html',
  styleUrls: ['./paytobeneficiary.component.css']
})
export class PaytobeneficiaryComponent implements OnInit {
  constructor(private route:Router) { }

  ngOnInit() {
  }

  back(){

    this.route.navigateByUrl('usernav');
  }



}
