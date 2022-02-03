import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Influencer } from 'src/app/models/influencer';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-my-posts-card',
  templateUrl: './my-posts-card.component.html',
  styleUrls: ['./my-posts-card.component.css']
})
export class MyPostsCardComponent implements OnInit {
  @Input() influencer: Influencer = {id: "", voornaam: "", familienaam: "", geslacht: "", gebruikersnaam: "", profielfoto: "", adres: "", postcode: "", stad: "", geboortedatum: "", telefoonnummer: "", emailadres: "", gebruikersnaaminstagram: "", gebruikersnaamfacebook: "", gebruikersnaamtiktok: "", infoovervolgers: "", badge: "", aantalPunten: "", categories: [], aantalvolgersinstagram: "", aantalvolgersfacebook: "", aantalvolgerstiktok: "" }
  @Input() post: Post  = {
    id: "",
    influencerid: '',
    stadid: '',
    foto: '',
    beschrijving: '',
    isgoedgekeurd: '',
    commentaarstad: '',
    aantallikes: '',
    aantalcomments: '',
    bereik: ''
  }

  @Input() winnerId: String = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  

  toDetailPage(influencerId: String, postId: String) {
    this.router.navigate(['/dashboard/my-influencers/' + influencerId + '/posts/' + postId])
  }


}
