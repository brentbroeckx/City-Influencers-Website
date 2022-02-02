import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-admin-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  navHidden: Boolean = true;
  requestCount: number = 0;
  cities: City[] | undefined;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getAllRequestedCities().subscribe(res => {
      this.cities = res.data;
      this.requestCount = this.cities?.length;
    });

    
  }

  changeNav(value: Boolean) {
    this.navHidden = value;
  }

}
