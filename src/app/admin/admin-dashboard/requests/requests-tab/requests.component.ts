import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  cities: City[] | undefined;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {

    this.cityService.getAllRequestedCities().subscribe(res => {
      this.cities = res.data;
    });


  }

  changeStatus(city: City) {
    if (city.isactief == "f") {
      // change to true
      city.isactief = "t";
      this.cityService.changeCityStatus(city.id, true).subscribe(res => {
        return;
      });
    } else {
      // change to false
      city.isactief = "f";
      this.cityService.changeCityStatus(city.id, false).subscribe(res => {
        return;
      });
    }
  }

}
