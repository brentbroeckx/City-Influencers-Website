import { Component, OnInit } from '@angular/core';

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
