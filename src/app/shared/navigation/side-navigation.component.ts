import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  navHidden: Boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeNav(value: Boolean) {
    this.navHidden = value;
  }

}
