import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';
import { InfluencerService } from 'src/app/services/influencer.service';

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.css']
})
export class AdminOverviewComponent implements OnInit {
  cities: City[] | undefined;
  selected: boolean = false;
  getCount: boolean = true;


  constructor(private cityService:CityService, private authService: AuthService) { }

  ngOnInit(): void {

    this.authService.reRouteNonAuth("admin");

    this.cityService.getAllValidatedCities().subscribe(res=>{
      this.cities=res.data     
    })
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
