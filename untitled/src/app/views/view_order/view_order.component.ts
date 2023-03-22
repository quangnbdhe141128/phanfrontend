import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import {ActivatedRoute, Router} from "@angular/router";
import { VehicleService } from '../../_services/vehicle.service';
import {BookingDetail} from "../../dto/bookingDetail";
@Component({
  selector: 'app-home',
  templateUrl: './view_order.component.html',
  styleUrls: ['./view_order.component.css'],
})
export class View_orderComponent implements OnInit {
  content: string | undefined;
  data: any;
bookingDetail:BookingDetail|any;
  constructor(private vehicleService: VehicleService,private userService: UserService,private route: ActivatedRoute,private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.data = JSON.parse(params['data']);
      // sử dụng biến data để hiển thị dữ liệu trong màn hình danh sách
      console.log(this.data+'ahuhu')
      this.vehicleService.getBookingDetail(this,this.data).subscribe((response: any) => {
        // this.vehicleDetail = JSON.parse(JSON.stringify((response.data)))
        this.bookingDetail = response.data
        console.log('---------------------------------------------')
        console.log(this.bookingDetail.from)
        console.log(this.bookingDetail)
        console.log(this.bookingDetail)
        console.log(this.bookingDetail)
        console.log(this.bookingDetail)
        console.log(this.bookingDetail.cardId)
        console.log(this.bookingDetail.cardId)
        console.log('-----------------------------------------1')
        console.log(this.bookingDetail.vehicleDetails)
        console.log('-----------------------------------------2')
        console.log(this.bookingDetail.vehicleDetails.feedBackList)
        console.log('-----------------------------------------3')

      });
    });
    this.vehicleService.getBookingDetail(this, this.data).subscribe((response: any) => {
      // this.vehicleDetail = JSON.parse(JSON.stringify((response.data)))

    });
  }
}
