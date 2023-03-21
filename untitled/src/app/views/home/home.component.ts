// @ts-ignore
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../_services/home.service';
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
  submitted = false;

  constructor(private homeService: HomeService,private router: Router) {}
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
        this.submitted = true;
        this.router.navigate(['/bookingCustomer', JSON.stringify(data)]);
    //   },
    // })
    // this.router.navigate(['/bookingCustomer/:'+data.location]);

  }
  ngOnInit() {}
}