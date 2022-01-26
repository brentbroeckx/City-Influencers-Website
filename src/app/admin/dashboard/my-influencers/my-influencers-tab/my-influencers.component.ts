import { Component, OnInit } from '@angular/core';
import { Influencer } from 'src/app/models/influencer';
import { InfluencerService } from 'src/app/services/influencer.service';

@Component({
  selector: 'app-my-influencers',
  templateUrl: './my-influencers.component.html',
  styleUrls: ['./my-influencers.component.css']
})
export class MyInfluencersComponent implements OnInit {

  influencers: Influencer[] | undefined;
  sorting: Boolean = false;

  constructor(private influencerService: InfluencerService) { }

  ngOnInit(): void {

    this.influencerService.getAllInfluencers().subscribe(res => {
      this.influencers = res.data;
    })

  }

  changeSort() {
    this.sorting = !this.sorting;

    switch (this.sorting) {
        case true:
            console.log("sort")
            this.influencers?.sort((a, b) => {
              var textA = a.voornaam.toLowerCase();
              var textB = b.voornaam.toLowerCase();
              return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
            })
          break;
        case false:
            console.log("unsort")
            this.influencers?.sort((a, b) => {
              var textA = a.voornaam.toLowerCase();
              var textB = b.voornaam.toLowerCase();
              return (textA < textB) ? 1 : (textA > textB) ? -1 : 0
            })
          break;
    }

  }



}
