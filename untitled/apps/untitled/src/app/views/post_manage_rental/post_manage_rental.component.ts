import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './post_manage_rental.component.html',
  styleUrls: ['./post_manage_rental.component.css'],
})
export class Post_manage_rentalComponent implements OnInit {
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
