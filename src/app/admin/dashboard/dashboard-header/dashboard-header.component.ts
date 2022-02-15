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
  city: City = {id: "", naam: "", postcode: "", picture: "", isactief: ""};

  constructor(private authService: AuthService, private cityService: CityService) { }

  ngOnInit(): void {
    this.authService.validateToken().subscribe(res =>{
      
      this.cityService.getCityById(res.data.id).subscribe(res => {
        this.city = res.data[0];
        if(this.city.picture == null){
          var randomImage = Math.floor(Math.random() * (5 - 1 + 1) + 1);
          this.city.picture = "../../../../assets/images/city-profile-picture-" + randomImage + ".jpg"
        }
      })

      
    })
  }

}
