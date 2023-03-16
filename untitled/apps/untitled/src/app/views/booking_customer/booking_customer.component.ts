import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../_services/vehicle.service';
import {VehicleType} from "../../dto/vehicleType";
import {Seat} from "../../dto/seat";
import {Company} from "../../dto/company";
import {Fuel} from "../../dto/fuel";
import {Shop} from "../../dto/shop";
import {VehicleItem} from "../../dto/vehicleItem";
import {HomeService} from "../../_services/home.service";
@Component({
  selector: 'app-home',
  templateUrl: './booking_customer.component.html',
  styleUrls: ['./booking_customer.component.css']
})
export class Booking_customerComponent implements OnInit {
  vehicleTypes: VehicleType[] | undefined;

  seats: Seat[] | undefined
  companies:Company[]|undefined

  fuels:Fuel[]|undefined
  shops:Shop[]|undefined
  vehicleItems:VehicleItem[]|undefined
  constructor(private vehicleService: VehicleService,private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.getTypeList();
    this.getSeat();
    this.getCompany();
    this.getFuel();
    this.getShop();
    this.getItem();
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
  private getItem(){
    this.homeService.create(this).subscribe(response => this.vehicleItems = response.data.list);
  }
}
