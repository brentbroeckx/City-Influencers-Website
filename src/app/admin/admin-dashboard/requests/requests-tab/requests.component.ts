import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  cities: City[] | undefined;
  sortingCity: Boolean = false;

  constructor(private cityService: CityService, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.cityService.getAllRequestedCities().subscribe(res => {
      this.cities = res.data;
    });


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

  changeStatus(city: City) {
    if (city.isactief == "f") {
      // change to true
      city.isactief = "t";
      this.cityService.changeCityStatus(city.id, true).subscribe(res => {
        this.toastr.success("Succesfully activated city", "Admin");
        location.reload();
        return;
      });
    } else {
      // change to false
      city.isactief = "f";
      this.cityService.changeCityStatus(city.id, false).subscribe(res => {
        this.toastr.success("Succesfully deactivated city", "Admin");
        location.reload();
        return;
      });
    }
  }

}
