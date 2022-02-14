import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  sortingCity: Boolean = false;
  sortingInfluencer: Boolean = false;


  constructor(private cityService:CityService, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.authService.reRouteNonAuth("admin");

    this.cityService.getAllValidatedCities().subscribe(res=>{
      this.cities=res.data     
      console.log(this.cities)
    })
  }

  changeSortCity() {
    this.sortingCity = !this.sortingCity;

    switch (this.sortingCity) {
      case true:
        this.cities?.sort((a, b) => {
          var textA = a.naam.toLowerCase();
          var textB = b.naam.toLowerCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
        })
        break;
      case false:
        this.cities?.sort((a, b) => {
          var textA = a.naam.toLowerCase();
          var textB = b.naam.toLowerCase();
          return (textA < textB) ? 1 : (textA > textB) ? -1 : 0
        })
        break;
    }

  }

  changeSortInfluencer() {
    this.sortingInfluencer = !this.sortingInfluencer;

    switch (this.sortingInfluencer) {
      case true:
        this.cities?.sort((a, b) => {
          var numberA = Number(a.influencercount);
          var numberB = Number(b.influencercount);
          return (numberA < numberB) ? -1 : (numberA > numberB) ? 1 : 0
        })
        break;
      case false:
        this.cities?.sort((a, b) => {
          var numberA = Number(a.influencercount);
          var numberB = Number(b.influencercount);
          return (numberA < numberB) ? 1 : (numberA > numberB) ? -1 : 0
        })
        break;
    }

  }

  changeStatus(city: City) {

    if (city.isactief == "f") {
      // change to true
      city.isactief = "t";
      this.cityService.changeCityStatus(city.id, true).subscribe(res => {
        this.toastr.success("Succesfully activated city", "Admin");
        return;
      });
    } else {
      // change to false
      city.isactief = "f";
      this.cityService.changeCityStatus(city.id, false).subscribe(res => {
        this.toastr.success("Succesfully deactivated city", "Admin");
        return;
      });
    }

    
  }


  

}
