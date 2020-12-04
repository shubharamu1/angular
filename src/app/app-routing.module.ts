import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { AddbeneficiaryComponent } from './addbeneficiary/addbeneficiary.component';
import { AdminGriveancesComponent } from './admin-griveances/admin-griveances.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AtmSimulatorComponent } from './atm-simulator/atm-simulator.component';

import { CustomerGriveancesComponent } from './customer-griveances/customer-griveances.component';


import { CustomersListComponent } from './customers-list/customers-list.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { LogoutComponent } from './logout/logout.component';
import { MyTransactionsComponent } from './my-transactions/my-transactions.component';
import { NewsComponent } from './news/news.component';
import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';

import { UpdateCustomersComponent } from './update-customers/update-customers.component';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';


const routes: Routes = [
  { path:'login', component:UserLoginComponent},
  { path:'home', component:HomeComponent},
  { path:'aboutus', component:AboutUsComponent},
  { path:'news', component:NewsComponent},
  { path:'admin', component:AdminLoginComponent},
  { path:'addcustomers', component:AddCustomersComponent},
  
  { path:'usernav', component:UserNavComponent},
  { path:'updatecustomers/:id', component:UpdateCustomersComponent},
  { path:'customerslist', component:CustomersListComponent},
  { path:'adminnav', component:AdminNavComponent},
  { path:'mytransactions', component:MyTransactionsComponent},

  { path:'atmsimulator', component:AtmSimulatorComponent},

  { path:'transferfunds', component:TransferFundsComponent},
  
  { path:'welcomeadmin', component:WelcomeAdminComponent},
  { path:'welcomeuser', component:WelcomeUserComponent},
  { path:'customerrequest', component:CustomerGriveancesComponent},
  { path:'adminrequest', component:AdminGriveancesComponent},
 
  { path:'loginsuccess', component:LoginsuccessComponent},
  { path:'logout', component:LogoutComponent},
  { path:'addbeneficiary', component:AddbeneficiaryComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
