import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../_services/vehicle.service';
import { UserService } from '../../_services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {VehicleItem} from "../../dto/vehicleItem";
import {VehicleDetail} from "../../dto/vehicleDetail";
// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-home',
  templateUrl: './booking_info.component.html',
  styleUrls: ['./booking_info.component.css'],
})
export class Booking_infoComponent implements OnInit {
  dataTest: any | undefined;
  testString: string|undefined;

  vehicleDetail:VehicleDetail|undefined
  constructor(private vehicleService: VehicleService,private userService: UserService,private router: Router,private route: ActivatedRoute) {}

  ngOnInit():void {
    this.route.params.subscribe(params => {
      this.dataTest = JSON.parse(params['data']);
      // sử dụng biến data để hiển thị dữ liệu trong màn hình danh sách
      console.log(this.dataTest)
    });
    this.vehicleDetail = new VehicleDetail();
    this.vehicleService.getVehicleDetail(this,this.dataTest).subscribe(response => this.vehicleDetail =response.data);
    console.log(this.dataTest+'testdemo')
    console.log(this.vehicleDetail)
    console.log(this.vehicleDetail.owner)
    console.log(this.vehicleDetail)
    console.log(this.vehicleDetail.owner)
    console.log('--------------------')
    console.log(this)
    console.log(this)
    console.log(this.vehicleDetail)
  }
}
