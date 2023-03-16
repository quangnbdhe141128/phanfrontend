import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { ForgetComponent } from './views/forget/forget.component';
import { ProfileComponent } from './views/profile/profile.component';
import { BoardCustomerComponent } from './views/board-customer/board-customer.component';
import { BoardRentalComponent } from './views/board-rental/board-rental.component';
import { BoardAdminComponent } from './views/board-admin/board-admin.component';
import { Booking_customerComponent } from './views/booking_customer/booking_customer.component';
import { Booking_infoComponent } from './views/booking_info/booking_info.component';
import { View_orderComponent } from './views/view_order/view_order.component';
import { Post_manage_rentalComponent } from './views/post_manage_rental/post_manage_rental.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'forget', component: ForgetComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'customer', component: BoardCustomerComponent },
  { path: 'rental', component: BoardRentalComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'bookingCustomer/:', component: Booking_customerComponent },
  { path: 'bookingInfo', component: Booking_infoComponent },
  { path: 'viewOrder', component: View_orderComponent },
  { path: 'postManageRental', component: Post_manage_rentalComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
