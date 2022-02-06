import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  type = "guest";

  constructor(private cityService: CityService, private router:Router, private toastr: ToastrService) { }
  

  ngOnInit(): void {

    

    this.cityService.getAllRequestedCities().subscribe(res => {
      this.cities = res.data;
      this.requestCount = this.cities?.length;
    });

    
  }
  
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.type = "guest";
    this.toastr.success("Succesfully logged out", "Logout")
    this.router.navigateByUrl("/")
  }

  changeNav(value: Boolean) {
    this.navHidden = value;
  }


}


