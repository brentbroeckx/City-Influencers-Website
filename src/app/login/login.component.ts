import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { AuthService } from '../auth/auth.service';
import { ToastrService } from 'ngx-toastr';


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

  constructor(private toastr: ToastrService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit() {
    const loginCredentials: Login = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }

    this.authService.authenticate(loginCredentials).subscribe(res => {
      if (res.error == "AuthCredsWrong") {
        this.toastr.warning(res.message, 'Login')
        return;
      }

      console.log(res);

      if (res.data.token != null) {
        localStorage.setItem('token', res.data.token)

        this.authService.validateToken().subscribe(res => {
          localStorage.setItem('id', res.data.id)

          console.log(res.data)

          if (res.data.isSuper || res.data.type == "admin") {
            this.toastr.success("Succesfully logged in", "Admin")
            this.router.navigateByUrl('/admin');

          } else if (res.data.type == "stad")  {
              this.toastr.success("Succesfully logged in", "City")
              this.router.navigateByUrl('/dashboard/overview');
          }
      

        })

      } else {
        //show error message (wrong username/password/...)
        this.toastr.warning("Wrong username or password", "Login")
      }
    })

  }
}
