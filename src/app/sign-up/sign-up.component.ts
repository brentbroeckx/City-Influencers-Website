import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CityRegister } from '../models/cityRegister';
import { matchValidator } from '../shared/validators/checkPassword-validator';
import { passwordValidator } from '../shared/validators/password-validator';

import * as bcrypt from 'bcryptjs';
import { SignUpService } from '../services/sign-up.service';
import { sha256 } from 'crypto-hash';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CityService } from '../services/city.service';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  show: boolean = false;
  showCheck: boolean = false;
  zipcodes: [] | undefined;
  cities: string[] | undefined;


  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, passwordValidator(), matchValidator('passwordCheck', true)]),
    passwordCheck: new FormControl('', [Validators.required, matchValidator('password')]),
    postcode: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required])
  })

  constructor(private signUpSerivce: SignUpService, private cityService: CityService, private toastr: ToastrService, private router: Router) { }
  
  showPassword() {
    this.show = !this.show;
}

showPasswordCheck() {
  this.showCheck = !this.showCheck;
}
  
  ngOnInit(): void {
    this.cityService.getListCities().subscribe(res => {
      console.log(Object.keys(res.data).find(key => res.data[key] == "1000"))


      this.cities = Object.keys(res.data);
      console.log(this.cities)
    })
  }

  onSubmit() {
    console.log("registering button clicked")

    var password = this.registerForm.controls.password.value;
    var encryptedPass = sha256(password).then(res => {
      var cityRegister: CityRegister = {
        username: this.registerForm.controls.username.value,
        password: res,
        name: this.registerForm.controls.city.value,
        postcode: this.registerForm.controls.postcode.value,
        email: this.registerForm.controls.email.value,
        type: "stad"
      }  
      this.signUpSerivce.processLogin(cityRegister).subscribe(res => {
        console.log(res)
        this.toastr.success("Successful registration, you will hear from us soon", "City")
        this.router.navigateByUrl('');

      });

    })
  }

  get email() {
    return this.registerForm.get('email');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get passwordCheck() {
    return this.registerForm.get('passwordCheck')
  }

  get postcode() {
    return this.registerForm.get('postcode');
  }

  get city() {
    return this.registerForm.get('city')
  }

}
