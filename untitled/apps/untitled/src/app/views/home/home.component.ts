// @ts-ignore
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../_services/home.service';
import { Home } from '../../dto/home';

// @ts-ignore
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  home: Home = {
    location: '',
    vehicleType: 1,
    fromDate: '',
    toDate: '',
  };
  submitted = false;

  constructor(private homeService: HomeService) {}
  saveTutorial(): void {
    const data = {
      location: this.home.location,
      vehicleType: this.home.vehicleType,
      fromDate: this.home.fromDate,
      toDate: this.home.toDate,
      minPrice: 0,
    };

    this.homeService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
    });
  }
  ngOnInit() {}
}
