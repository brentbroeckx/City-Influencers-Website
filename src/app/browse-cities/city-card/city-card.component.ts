import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})
export class CityCardComponent implements OnInit {

  @Input() city: City = { id: "", naam: "", postcode: "", image: "", isActief: ""};

  constructor() { }

  ngOnInit(): void {
  }

}
