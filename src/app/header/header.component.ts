import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navHidden: Boolean = true;
  type = "guest";

  constructor(private toastr: ToastrService, private authService: AuthService) { }

  ngOnInit(): void {


    if (!localStorage.getItem('token')) return;

    this.authService.validateToken().subscribe(res => {
      if (res.error) return;
      this.type = res.data.type;
    })
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.type = "guest";
    this.toastr.success("Succesfully logged out", "Logout")
  }

  changeNav(value: Boolean) {
    this.navHidden = value;
  }

}
