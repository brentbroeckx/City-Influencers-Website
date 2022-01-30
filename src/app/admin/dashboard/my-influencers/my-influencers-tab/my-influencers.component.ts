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
  savedInfluencers: Influencer[] | undefined;
  savedFilteredInfluencers: Influencer[] | undefined;
  sorting: Boolean = false;
  searchNameParam: string = "";
  searchCategoryParam: string[] = ["All"];
  isFiltering: Boolean = false;

  constructor(private influencerService: InfluencerService) { }

  ngOnInit(): void {

    this.influencerService.getAllInfluencers().subscribe(res => {
      this.influencers = res.data;
      this.savedInfluencers = res.data;
    })

    
  }

  filterByName(category: string, name: string) {
    this.influencerService.getInfluencersFiltered(category, name).subscribe(res => {
      this.influencers = res.data;
      this.savedFilteredInfluencers = res.data;
    })

  }

  searchName(event: any) {

    if (this.searchNameParam == event.target.value) return;
    this.searchNameParam = event.target.value;

    this.filterByName(this.searchCategoryParam[1], this.searchNameParam)

  }

  searchCategory(event: any) {

    if (this.searchCategoryParam.length != 1 && this.searchCategoryParam[0] == "All") {
      this.searchCategoryParam.pop()
    }

    if (event.target.value == "All") {
      if (this.searchNameParam == "") {
        this.influencers = this.savedInfluencers;
        return;
      } else {
        this.influencers = this.savedFilteredInfluencers;
        return;
      }
    }

    if (this.searchCategoryParam.includes(event.target.value)) return;
    this.searchCategoryParam.push(event.target.value);

    this.influencers = this.savedInfluencers?.filter(a => JSON.stringify(a.categories) === JSON.stringify(this.searchCategoryParam));


  }

  changeFilterBar() {
    this.isFiltering = !this.isFiltering;
  }

  changeSort() {
    this.sorting = !this.sorting;

    switch (this.sorting) {
        case true:
            this.influencers?.sort((a, b) => {
              var textA = a.voornaam.toLowerCase();
              var textB = b.voornaam.toLowerCase();
              return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
            })
          break;
        case false:
            this.influencers?.sort((a, b) => {
              var textA = a.voornaam.toLowerCase();
              var textB = b.voornaam.toLowerCase();
              return (textA < textB) ? 1 : (textA > textB) ? -1 : 0
            })
          break;
    }

  }



}
