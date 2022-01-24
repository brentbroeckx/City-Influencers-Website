import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  })

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log("submitbutton")
    const loginCredentials: Login = {
      type: "stad",
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }

    this.authService.authenticate(loginCredentials).subscribe(res => {
      if (res.data.token != null) {
        console.log("logging in")
        localStorage.setItem('token', res.data.token)
        this.router.navigateByUrl('/dashboard/overview');
      } else {
        //show error message (wrong username/password/...)
      }
    })

  }

}
