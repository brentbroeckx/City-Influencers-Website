import { Component, OnInit } from '@angular/core';
import { List } from 'echarts';
import { City } from '../models/city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-browse-cities',
  templateUrl: './browse-cities.component.html',
  styleUrls: ['./browse-cities.component.css']
})
export class BrowseCitiesComponent implements OnInit {

  cities: City[] | undefined;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {

    this.cityService.getAllCities().subscribe(res => {
      res.data.forEach(city => {
        if(city.picture == null){
          var randomImage = Math.floor(Math.random() * (5 - 1 + 1) + 1);
          city.picture = "../../../../assets/images/city-profile-picture-" + randomImage + ".jpg"
        }
      });

      this.cities = res.data;
    })



  }

}
