import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navHidden: Boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeNav(value: Boolean) {
    this.navHidden = value;
  }

}
