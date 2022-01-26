import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Influencer } from 'src/app/models/influencer';
import { InfluencerService } from 'src/app/services/influencer.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-influencer-detail',
  templateUrl: './influencer-detail.component.html',
  styleUrls: ['./influencer-detail.component.css']
})
export class InfluencerDetailComponent implements OnInit {

  influencer: Influencer = {id: "", voornaam: "", familienaam: "", geslacht: "", gebruikersnaam: "", profielfoto: "", adres: "", postcode: "", stad: "", geboortedatum: "", telefoonnummer: "", emailadres: "", gebruikersnaaminstagram: "", gebruikersnaamfacebook: "", gebruikersnaamtiktok: "", infoovervolgers: "", badge: "", aantalPunten: "", categories: [], aantalvolgersfacebook: "", aantalvolgersinstagram: "", aantalvolgerstiktok: ""};
  influencerFullName: String = "";
  highestFollowCount: String = "";
  mostLikes: string = "";
  mostReach: string = "";

  constructor(private postsService: PostsService, private influencersService: InfluencerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const influencerId = this.route.snapshot.paramMap.get('id');
    console.log(influencerId)
    if (influencerId != null) {
      this.influencersService.getInfluencerById(influencerId).subscribe(res => {
        this.influencer = res.data[0];

        if (this.influencer.aantalvolgersinstagram > this.influencer.aantalvolgersfacebook 
          && this.influencer.aantalvolgersinstagram > this.influencer.aantalvolgerstiktok) {
            this.highestFollowCount = "Instagram";
        } else if (this.influencer.aantalvolgersfacebook > this.influencer.aantalvolgersinstagram
          && this.influencer.aantalvolgersfacebook > this.influencer.aantalvolgerstiktok) {
            this.highestFollowCount = "Facebook";
          } else {
            this.highestFollowCount = "Tiktok";
          }


        this.postsService.getPostsByInfluencerId(this.influencer.id).subscribe(res => {
          res.data.forEach(post => {
            console.log(post)

            if (post.aantallikes > this.mostLikes) {
              this.mostLikes = post.aantallikes;
            }

            if (post.bereik > this.mostReach) {
              this.mostReach = post.bereik;
            }
 
          });
        })
        

      });


    }
    
  }



}
