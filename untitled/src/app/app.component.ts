import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import {Home} from "./dto/home";
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private roles: string[] | undefined;
  isLoggedIn = false;
  showAdminBoard = false;
  showRentalBoard = false;
  showWaitingTable=false;
  showCustomerBoard = false;
  username: string | undefined;
  key:any|undefined;

  constructor(private tokenStorageService: TokenStorageService,private router: Router) {}
  searchForm(): void {
    const data = this.key
    // this.router.navigate(['/bookingCustomer', JSON.stringify(data)]);
    this.router.navigate(['/viewOrder', JSON.stringify(data)]);
    //   },
    // })
    // this.router.navigate(['/bookingCustomer/:'+data.location]);
    console.log(this.key)
  }
  ngOnInit() {




    // phan de check role khi dang nhap hien man nao tren header
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      // @ts-ignore
      // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // // @ts-ignore
      // this.showRentalBoard = this.roles.includes('ROLE_RENTAL');
      //
      // // @ts-ignore
      // this.showCustomerBoard = this.roles.includes('ROLE_CUSTOMER');

      this.showWaitingTable = this.roles.includes('ROLE_RENTAL');
      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
