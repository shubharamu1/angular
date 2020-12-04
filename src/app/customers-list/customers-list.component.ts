import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from '../ApiResponse';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  users: Object;
  emailId: any;
  result: any;
  constructor(private service:BankService, private route: Router){

  }
 
 
  // customers: Observable<ApiResponse>;
  // //dtOptions: DataTables.Settings = {};
  // //@ViewChild('dtOptions', {static: true}) table;

  // constructor(private bankService: BankService,
  //   private router: Router) { 
  //     setTimeout(function(){
  //       $(function(){
  //         $('#example').DataTable();
  //     });
  //     },2000);
      
  //   }

  // ngOnInit() {
  //   this.customers = this.bankService.getCustomers();
  //   setTimeout(function(){
  //     $(function(){
  //       $('#example').DataTable();
  //   });
  //   },2000);

  // }

  // deleteCustomer(id: number) {
  //   this.bankService.deleteCustomer(id)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.customers = this.bankService.getCustomers();
  //       },
  //       error => console.log(error));
  // }

  // updateCustomer(id: number){
  //   this.router.navigate(['update', id]);
  // }

  public deleteUser(id:number){
    let resp= this.service.deleteUser(id);
    resp.subscribe((data)=>this.users=data);
   }
   
   public findUserByEmailId(){
     let resp= this.service.getUserByEmailId(this.emailId);
     resp.subscribe((data)=>this.users=data);
    }

    public updateUser(id:number){
      console.log("id" +id);
     
      this.route.navigate(['/updatecustomers',id]);
     }
  
   
    //  ngOnInit() {
    //    let resp=this.service.getUsers();
    //    resp.subscribe((data)=>this.users=data);
    //  }

    ngOnInit(){
       this.service.getUsers().subscribe(data=>{
         this.result=data;
         console.log(this.result);
       })

    }
}