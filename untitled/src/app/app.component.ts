import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] | undefined;
  isLoggedIn = false;
  showAdminBoard = false;
  showRentalBoard = false;

  showCustomerBoard = false;
  username: string | undefined;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      // @ts-ignore
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // @ts-ignore
      this.showRentalBoard = this.roles.includes('ROLE_RENTAL');

      // @ts-ignore
      this.showCustomerBoard = this.roles.includes('ROLE_CUSTOMER');

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
