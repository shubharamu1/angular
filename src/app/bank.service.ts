import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiResponse } from './ApiResponse';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private _http: HttpClient) { }
  // private baseUrl: string = 'http://localhost:8080/onlinebanking/';

  

  // getCustomers() : Observable<ApiResponse> {
  //   return this.http.get<ApiResponse>(this.baseUrl);
  // }

  // getCustomersById(id: number): Observable<any> {
  //   return this.http.get(this.baseUrl + id);
  // }

  // createCustomer(customer: Customer): Observable<ApiResponse> {
  //   return this.http.post<ApiResponse>(this.baseUrl, customer);
  // }

  // updateCustomer(id: number, customer: Customer): Observable<ApiResponse> {
  //   return this.http.put<ApiResponse>(this.baseUrl + customer.id, customer);
  // }

  // deleteCustomer(id: number): Observable<ApiResponse> {
  //   return this.http.delete<ApiResponse>(this.baseUrl + id);
  // }
 //to call from spring rest

 public doPostnews(news){
  return this._http.post("http://localhost:8080/news/postnews",news,{responseType:'text' as 'json' });
}

  public loginUserFromRemote(user :User):Observable<any>{ // respo
      return this._http.post<any>("http://localhost:8081/login/",user)


  }

  public addUserFromRemote(user :User):Observable<any>{ // respo
    return this._http.post("http://localhost:8081/customer",user);
}

public updateUser(user: User){
  return this._http.put("http://localhost:8081/update",user);
}


public deleteUser(id){
  return this._http.delete("http://localhost:8081/cancel/"+id);
}

public fetchUserByidFromRemote(id:number){
  return this._http.get("http://localhost:8081/getuserbyid/"+id);
}

public getUsers(){
  return this._http.get("http://localhost:8081/customers");
}

public getUserByEmailId(emailId){
  return this._http.get("http://localhost:8081/findUser/"+emailId);
}

public doAddBeneficiary(benef){
  return this._http.post("http://localhost:8081/beneficiary",benef,{responseType:'text' as 'json'});
}

deleteBenefeciary(benefId){
  return this._http.delete("http://localhost:8081/beneficiary?beneficiaryId="+benefId);
}
getAllBeneficiary(){
  return this._http.get("http://localhost:8081/beneficiaries");
}

getAllNews(){
  return this._http.get("http://localhost:8081/news/news");
}

getlogin(username:String,password:String){
  return this._http.get("http://localhost:8081/customer/Username-Password?username="+username+"&password="+password);
}

}

