import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchValidator } from 'src/app/shared/validators/checkPassword-validator';
import { passwordValidator } from 'src/app/shared/validators/password-validator';

import * as bcrypt from 'bcryptjs';
import { CityRegister } from 'src/app/models/cityRegister';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';
import { CityChange } from 'src/app/models/cityChange';
import { sha256 } from 'crypto-hash';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settingsForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, passwordValidator(), matchValidator('passwordCheck', true)]),
    passwordCheck: new FormControl('', [Validators.required, matchValidator('password')]),
    postcode: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required])
  })
  
  thisCity: City = {id: "", naam: "", gebruikersnaam:"", wachtwoord: "", postcode: "", image: "", isactief: "", emailadres: "", isnew: ""}

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    const cityId = localStorage.getItem("id");
    console.log(cityId)
    if (cityId != null){
        this.cityService.getCityById(cityId).subscribe(res => {
          this.thisCity = res.data[0];
          this.settingsForm.controls.email.setValue(this.thisCity.emailadres);
          this.settingsForm.controls.username.setValue(this.thisCity.gebruikersnaam);
          this.settingsForm.controls.postcode.setValue(this.thisCity.postcode);
          this.settingsForm.controls.city.setValue(this.thisCity.naam);
      })
    }
  }

  onSubmit() {
    const cityId = localStorage.getItem("id");

    var password = this.settingsForm.controls.password.value;
    var encryptedPass = sha256(password).then(res => {
      if (cityId != null){
        var settingsChange: CityChange = {
          id: cityId,
          username: this.settingsForm.controls.username.value,
          password: res,
          name: this.settingsForm.controls.city.value,
          postcode: this.settingsForm.controls.postcode.value,
          emailadres: this.settingsForm.controls.email.value
        }
        this.cityService.changeCity(settingsChange).subscribe(res => {
          
        });
      }
    })
  }

  get email() {
    return this.settingsForm.get('email');
  }

  get username() {
    return this.settingsForm.get('username');
  }

  get password() {
    return this.settingsForm.get('password');
  }

  get passwordCheck() {
    return this.settingsForm.get('passwordCheck')
  }

  get postcode() {
    return this.settingsForm.get('postcode');
  }

  get city() {
    return this.settingsForm.get('city')
  }


}
