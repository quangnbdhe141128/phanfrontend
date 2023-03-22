import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../_services/vehicle.service';
import { UserService } from '../../_services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FeedbackList, VehicleItem} from "../../dto/vehicleItem";
import {VehicleDetail} from "../../dto/vehicleDetail";
import {Home} from "../../dto/home";
import {FormBooking} from "../../dto/formBooking";
import {BookingDetail} from "../../dto/bookingDetail";
import { HttpClient } from '@angular/common/http';
// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-home',
  templateUrl: './booking_info.component.html',
  styleUrls: ['./booking_info.component.css'],
})
export class Booking_infoComponent implements OnInit {
  dataTest: any | undefined;
  data:any|undefined;
  // ---------------------


  // --------------------
  formBooking: FormBooking = {
    vehicleId: '',
    name :'',
    address:'',
    phone:'',
    bod:'',
    cardId:'',
    total:900,
    from:'',
    to:'',
  };
  home: Home = {
    location: 'hà nội',
    vehicleType: parseInt('1'),
    fromDate: '2023-03-22',
    toDate: '2023-03-24',
    minPrice:0,
  };

  vehicleDetail:VehicleDetail|any;
 bookingDetail:BookingDetail|any;
  constructor(private vehicleService: VehicleService,private userService: UserService,private router: Router,private route: ActivatedRoute,private http: HttpClient) {}
  submitForm(): void {
    this.route.params.subscribe(params => {
      this.dataTest = JSON.parse(params['data']);
      console.log(this.dataTest+'hihihi')
    })
    const data = {
      vehicleId: this.dataTest,
      name: this.formBooking.name,
      address: this.formBooking.address,
      phone: this.formBooking.phone,
      bod: this.formBooking.bod,
      cardId:this.formBooking.cardId,
      total:this.formBooking.total,
      from:this.formBooking.from,
      to:this.formBooking.to
    };
    this.vehicleService.createForm(data).subscribe((response: any) => {
      this.bookingDetail = response.data
      console.log(JSON.stringify(data));
      alert(this.bookingDetail.key)
    });



  }
  backNow(): void {
    const data = {
      location: this.home.location,
      vehicleType: this.home.vehicleType,
      fromDate: this.home.fromDate,
      toDate: this.home.toDate,
      minPrice: 0,
    };

    // this.homeService.create(data).subscribe({
    //   next: (res) => {
    //     console.log(res);

    this.router.navigate(['/bookingCustomer', JSON.stringify(data)]);
    //   },
    // })
    // this.router.navigate(['/bookingCustomer/:'+data.location]);


  }
  ngOnInit():void {
    this.route.params.subscribe(params => {
      this.dataTest = JSON.parse(params['data']);
      // sử dụng biến data để hiển thị dữ liệu trong màn hình danh sách
      console.log(this.dataTest)
      this.vehicleService.getVehicleDetail(this, this.dataTest).subscribe((response: any) => {
        // this.vehicleDetail = JSON.parse(JSON.stringify((response.data)))
        this.vehicleDetail = response.data
        console.log('---------------------------------------------')
        console.log(this.vehicleDetail.featureList)
        console.log(this.vehicleDetail)
        console.log(this.vehicleDetail.feedBackList)

      });
    });
    // this.vehicleDetail.feedbackList=this.feedbackList1
    // this.vehicleService.getVehicleDetail(this,this.dataTest).subscribe(response => this.vehicleDetail =response.data);

  }
  // async ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     this.dataTest = JSON.parse(params['data']);
  //     // sử dụng biến data để hiển thị dữ liệu trong màn hình danh sách
  //     console.log(this.dataTest)
  //   });
  //   await this.loaddata();
  //   console.log(this.vehicleDetail);
  //   console.log(this.vehicleDetail.feedbackList);
  // }
  //
  // async loaddata(){
  //   await this.vehicleService.getVehicleDetail(this,this.dataTest).subscribe(response => this.vehicleDetail = response.data);
  // }
}
