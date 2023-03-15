import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { ForgetComponent } from './views/forget/forget.component';
import { BoardAdminComponent } from './views/board-admin/board-admin.component';
import { BoardCustomerComponent } from './views/board-customer/board-customer.component';
import { BoardRentalComponent } from './views/board-rental/board-rental.component';
import { ProfileComponent } from './views/profile/profile.component';
import { Booking_customerComponent } from './views/booking_customer/booking_customer.component';
import { Booking_infoComponent } from './views/booking_info/booking_info.component';
import { View_orderComponent } from './views/view_order/view_order.component';
import { Post_manage_rentalComponent } from './views/post_manage_rental/post_manage_rental.component';

import { authInterceptorProviders } from './helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardCustomerComponent,
    BoardRentalComponent,
    ProfileComponent,
    Booking_customerComponent,
    Booking_infoComponent,
    View_orderComponent,
    Post_manage_rentalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
