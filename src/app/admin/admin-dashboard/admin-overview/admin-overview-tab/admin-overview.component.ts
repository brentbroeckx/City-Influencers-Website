import { Component, OnInit } from '@angular/core';
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
  constructor(private cityService:CityService, private influencerService:InfluencerService) { }

  ngOnInit(): void {
    this.cityService.getAllCities().subscribe(res=>{
      console.log(res.data)
      this.cities=res.data     
    })
  }

}
