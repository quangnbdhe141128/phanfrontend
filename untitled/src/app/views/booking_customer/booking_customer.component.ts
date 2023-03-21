import {Component, Input, OnInit} from '@angular/core';
import { VehicleService } from '../../_services/vehicle.service';
import {VehicleType} from "../../dto/vehicleType";
import {Seat} from "../../dto/seat";
import {Company} from "../../dto/company";
import {Fuel} from "../../dto/fuel";
import {Shop} from "../../dto/shop";
import {VehicleItem} from "../../dto/vehicleItem";
import {HomeService} from "../../_services/home.service";
import { Location } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './booking_customer.component.html',
  styleUrls: ['./booking_customer.component.css']
})
export class Booking_customerComponent implements OnInit {
  data: any;
  id: any;
  // location: this.home.location,
  // vehicleType: this.home.vehicleType,
  // fromDate: this.home.fromDate,
  // toDate: this.home.toDate,
  // minPrice: 0,

  // currentUrl: string;
  // encodedUrl: string;
  vehicleTypes: VehicleType[] | undefined;

  seats: Seat[] | undefined
  companies:Company[]|undefined

  fuels:Fuel[]|undefined
  shops:Shop[]|undefined
  vehicleItems:VehicleItem[]|undefined
  constructor(private vehicleService: VehicleService,private route: ActivatedRoute,private router: Router, private homeService: HomeService
              // ,private location: Location
  ) {
    // this.currentUrl = this.location.path();
    // this.encodedUrl = encodeURIComponent(this.currentUrl);
  }
  onItemClicked(item:any) {
    const data = item
    this.router.navigate(['/bookingInfo', JSON.stringify(data)]);
  }
  ngOnInit(): void {
    this.getTypeList();
    this.getSeat();
    this.getCompany();
    this.getFuel();
    this.getShop();
    // this.getItem();
    this.route.params.subscribe(params => {
      this.data = JSON.parse(params['data']);
      // sử dụng biến data để hiển thị dữ liệu trong màn hình danh sách
    });
    const vehicleItems = {
      location: this.data.location,
      vehicleType: this.data.vehicleType,
      fromDate: this.data.fromDate,
      toDate: this.data.toDate,
      // minPrice: 0,
      // location: 'Hà Nội',
      // vehicleType: 1,
      // fromDate: '2023-03-24',
      // toDate: '2023-03-25',
      minPrice: 0,
    };
    console.log(vehicleItems.location);
    this.homeService.create(vehicleItems).subscribe(response => this.vehicleItems = response.data.list);
    // console.log(this.encodedUrl);
    // console.log(this.currentUrl);

  }
  private getTypeList(){
    this.vehicleService.getTypeVehicleList(this).subscribe(response => this.vehicleTypes = response.data.list);
  }
  private getSeat(){
    this.vehicleService.getSeatVehicleList(this).subscribe(response => this.seats = response.data.list);
  }
  private getCompany(){
    this.vehicleService.getCompanyVehicleList(this).subscribe(response => this.companies = response.data.list);
  }
  private getFuel(){
    this.vehicleService.getFuelVehicleList(this).subscribe(response => this.fuels = response.data.list);
  }
  private getShop(){
    this.vehicleService.getShopVehicleList(this).subscribe(response => this.shops = response.data.list);
  }
  // private getItem(){
  //   this.homeService.create(data).subscribe
  // }
}
