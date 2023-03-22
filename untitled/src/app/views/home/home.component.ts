// @ts-ignore
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../_services/home.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Home } from '../../dto/home';
import {Router, RouterModule, Routes} from '@angular/router';
// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  home: Home = {
    location: '',
    vehicleType: parseInt(''),
    fromDate: '',
    toDate: '',
    minPrice:0,
  };
  validateAlert:string = '';

  constructor(private homeService: HomeService,private router: Router, private fb:FormBuilder) {}
  saveTutorial(): void {
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
  ngOnInit() {
    this.home.vehicleType=1;
  }
  getCurrentDay(){
    return new Date().toISOString().split('T')[0];
  }
  isValid(){
    if(this.home.fromDate && this.home.toDate){
      if(this.home.fromDate >= this.home.toDate){
        this.validateAlert = 'Vui lòng nhập ngày đi nhỏ hơn ngày đến';
        return true;
      }if(this.home.fromDate < this.getCurrentDay()){
        this.validateAlert = 'Vui lòng nhập ngày đi lớn hơn hoặc bằng ngày hiện tại';
        return true;
      }
      return false;
    }
    return true;
  }

}
