import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './booking_info.component.html',
  styleUrls: ['./booking_info.component.css'],
})
export class Booking_infoComponent implements OnInit {
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
