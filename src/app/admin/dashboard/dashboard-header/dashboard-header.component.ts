import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {

  @Input() headerTitle: String = "";
  city: City = {id: "", naam: "", postcode: "", image: "", isActief: ""};

  constructor(private authService: AuthService, private cityService: CityService) { }

  ngOnInit(): void {
    this.authService.validateToken().subscribe(res =>{
      if (this.authService.reRouteNonAuth("stad") == false) {
        console.log("auth verified")
        this.cityService.getCityById(res.data.id).subscribe(res => {
          this.city = res.data[0];
        })
      }

      
    })
  }

}
