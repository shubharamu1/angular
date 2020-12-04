import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';

import { HeaderComponent } from './header/header.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddCustomersComponent } from './add-customers/add-customers.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserNavComponent } from './user-nav/user-nav.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { UpdateCustomersComponent } from './update-customers/update-customers.component';
import { DeleteCutomersComponent } from './delete-cutomers/delete-cutomers.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyTransactionsComponent } from './my-transactions/my-transactions.component';
import { AtmSimulatorComponent } from './atm-simulator/atm-simulator.component';
import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { CustomerRequestComponent } from './customer-request/customer-request.component';
import { CustomerGriveancesComponent } from './customer-griveances/customer-griveances.component';
import { AdminGriveancesComponent } from './admin-griveances/admin-griveances.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { LogoutComponent } from './logout/logout.component';
import { AddbeneficiaryComponent } from './addbeneficiary/addbeneficiary.component';
import { FilterPipe } from './filter.pipe';
import { PaytobeneficiaryComponent } from './paytobeneficiary/paytobeneficiary.component';




@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    AdminLoginComponent,
    HeaderComponent,
    AddCustomersComponent,
  
    UserNavComponent,
    CustomersListComponent,
    UpdateCustomersComponent,
    DeleteCutomersComponent,
    HomeComponent,
    NewsComponent,
    AboutUsComponent,
    AdminNavComponent,
    ContactUsComponent,
    MyTransactionsComponent,
    
    AtmSimulatorComponent,
    TransferFundsComponent,
    WelcomeAdminComponent,
    WelcomeUserComponent,
    CustomerRequestComponent,
    CustomerGriveancesComponent,
    AdminGriveancesComponent,
    EditprofileComponent,
    LoginsuccessComponent,
    LogoutComponent,
    AddbeneficiaryComponent,
    FilterPipe,
    PaytobeneficiaryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    HttpClientModule,
   
   
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
