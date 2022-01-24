import { Component, Input, OnInit } from '@angular/core';
import { Influencer } from 'src/app/models/influencer';

@Component({
  selector: 'app-influencer-card',
  templateUrl: './influencer-card.component.html',
  styleUrls: ['./influencer-card.component.css']
})
export class InfluencerCardComponent implements OnInit {

  @Input() influencer: Influencer = {id: "", voornaam: "", familienaam: "", geslacht: "", gebruikersnaam: "", profielfoto: "", adres: "", postcode: "", stad: "", geboortedatum: "", telefoonnummer: "", emailadres: "", gebruikersnaaminstagram: "", gebruikersnaamfacebook: "", gebruikersnaamtiktok: "", infoovervolgers: "", badge: "", aantalPunten: "", categories: []}

  constructor() { }

  ngOnInit(): void {
    console.log(this.influencer)
  }

}
