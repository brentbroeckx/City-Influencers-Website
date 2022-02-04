import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchValidator } from 'src/app/shared/validators/checkPassword-validator';
import { passwordValidator } from 'src/app/shared/validators/password-validator';

import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';
import { CityChange } from 'src/app/models/cityChange';
import { sha256 } from 'crypto-hash';
import { ToastrService } from 'ngx-toastr';
import * as cloudinary from 'cloudinary-core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  pictureURL: string = "";

  settingsForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, passwordValidator(), matchValidator('passwordCheck', true)]),
    passwordCheck: new FormControl('', [Validators.required, matchValidator('password')]),
    postcode: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    image: new FormControl('')
  })
  
  thisCity: City = {id: "", naam: "", gebruikersnaam:"", wachtwoord: "", postcode: "", image: "", isactief: "", emailadres: "", isnew: ""}

  constructor(private _renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document, private cityService: CityService, private toastr: ToastrService ) { }

  ngOnInit(): void {
    const cityId = localStorage.getItem("id");
    console.log(cityId)
    if (cityId != null){
        this.cityService.getCityById(cityId).subscribe(res => {
          this.thisCity = res.data[0];
          this.pictureURL = this.thisCity.image;

          this.settingsForm.controls.email.setValue(this.thisCity.emailadres);
          this.settingsForm.controls.username.setValue(this.thisCity.gebruikersnaam);
          this.settingsForm.controls.postcode.setValue(this.thisCity.postcode);
          this.settingsForm.controls.city.setValue(this.thisCity.naam);
      })
    }

    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
    {
      function success() {
        var data = JSON.parse(this.responseText);
        console.log(data);
      }
    
      function error(err) {
          console.log('Error Occurred :', err);
      }

      var myWidget = cloudinary.createUploadWidget({
        cloudName: 'dbyo9rarj', 
        uploadPreset: 'CI-img-upload', 
        folder: 'Cities',
        maxImageFileSize: 10000000,
        cropping: true
        }, (error, result) => { 
          if (!error && result && result.event === "success") { 
            console.log('Done! Here is the image info: ', result.info);
            var url = result.info.url;

            var imageURL = document.getElementById("imageURL").innerHTML = url;
          }
        }
      )
    
      document.getElementById("upload_widget")?.addEventListener("click", function(){
          myWidget.open();
        }, false);
    }
    
    `;


    this._renderer2.appendChild(this._document.body, script);
    this._renderer2.data


  }

  onSubmit() {
    const cityId = localStorage.getItem("id");
    var password = this.settingsForm.controls.password.value;

    var pictureURL = document.getElementById("imageURL")?.textContent?.toString()
    console.log("testing: " +pictureURL);

    if (password == "") {
      if (cityId != null){
        var settingsChange: CityChange = {
          id: cityId,
          username: this.settingsForm.controls.username.value,
          name: this.settingsForm.controls.city.value,
          postcode: this.settingsForm.controls.postcode.value,
          emailadres: this.settingsForm.controls.email.value,
          picture: pictureURL
        }
        this.cityService.changeCity(settingsChange).subscribe(res => {
            console.log(res)
        });
      }
    } else {
      var encryptedPass = sha256(password).then(res => {
        if (cityId != null){
          var settingsChange: CityChange = {
            id: cityId,
            username: this.settingsForm.controls.username.value,
            password: res,
            name: this.settingsForm.controls.city.value,
            postcode: this.settingsForm.controls.postcode.value,
            emailadres: this.settingsForm.controls.email.value,
            picture: pictureURL
          }
          this.cityService.changeCity(settingsChange).subscribe(res => {
            console.log(res)
            
          });
        }
      })
    }

    
    this.toastr.success("Succesfully updated", "City")
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

  get image() {
    return this.settingsForm.get('image');
  }


}
