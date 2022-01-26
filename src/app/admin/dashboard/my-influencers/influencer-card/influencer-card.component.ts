import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Influencer } from 'src/app/models/influencer';

@Component({
  selector: 'app-influencer-card',
  templateUrl: './influencer-card.component.html',
  styleUrls: ['./influencer-card.component.css']
})
export class InfluencerCardComponent implements OnInit {

  @Input() influencer: Influencer = {id: "", voornaam: "", familienaam: "", geslacht: "", gebruikersnaam: "", profielfoto: "", adres: "", postcode: "", stad: "", geboortedatum: "", telefoonnummer: "", emailadres: "", gebruikersnaaminstagram: "", gebruikersnaamfacebook: "", gebruikersnaamtiktok: "", infoovervolgers: "", badge: "", aantalPunten: "", categories: [], aantalvolgersinstagram: "", aantalvolgersfacebook: "", aantalvolgerstiktok: "" }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toDetailPage(id: String) {
    this.router.navigate(['/dashboard/my-influencers/detail', id])
  }

}
