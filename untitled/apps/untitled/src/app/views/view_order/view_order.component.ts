import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './view_order.component.html',
  styleUrls: ['./view_order.component.css'],
})
export class View_orderComponent implements OnInit {
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
