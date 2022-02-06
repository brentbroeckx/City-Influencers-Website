import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  navHidden: Boolean = true;
  type = "guest";


  constructor(private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
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
