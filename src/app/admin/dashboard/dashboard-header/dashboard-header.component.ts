import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {

  @Input() headerTitle: string = "";

  constructor() { }

  ngOnInit(): void {
    console.log(this.headerTitle)
  }

}
