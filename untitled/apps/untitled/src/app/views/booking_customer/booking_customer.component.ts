import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './booking_customer.component.html',
  styleUrls: ['./booking_customer.component.css'],
})
export class Booking_customerComponent implements OnInit {
  showForm: boolean = false;
  content: string | undefined;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getPublicContent().subscribe(
      (data) => {
        this.content = data;
      },
      (err) => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
