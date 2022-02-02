import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Influencer } from 'src/app/models/influencer';
import { CategoryService } from 'src/app/services/category.service';
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
  isFiltering: Boolean = false;
  allCategories: Category[] | undefined;

  filterNameParam: string = "";
  filterSurnameParam: string = "";
  filterCategoryParam: string[] = ["All"];
  filterGenderParam: string = "";
  filterFollowersParam: string = "";
  filterAgeParam: string = "";


  errormessage: string = "";
  nameEvent: any;
  surnameEvent: any;

  constructor(private influencerService: InfluencerService, private categoryService: CategoryService) { }

  ngOnInit(): void {

    this.influencerService.getAllInfluencers().subscribe(res => {
      this.influencers = res.data;
      this.savedInfluencers = res.data;
    })

    this.categoryService.getAllCategories().subscribe(res => {
      this.allCategories = res.data;
    })

    
  }


  filterDistinct(array: Influencer[] | undefined, array2: Influencer[]) {
    var newArray: Influencer[] = []

    array2.forEach(item => {
      console.log(item)
      if (array?.find(e => e.id === item.id)) {
        newArray.push(item);
      }
    });

    return newArray;

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

  resetFilterValue(type: string) {
    switch(type) {
      case "names":
        if (this.nameEvent == null) break;
        console.log(this.nameEvent)
        this.nameEvent.target.value = "";
        if (this.surnameEvent == null) break;
        this.surnameEvent.target.value = "";
    }
  }

  setFilterName(event: any) {
    this.errormessage = "";
    var filtervalue = "";
    this.nameEvent = event;

    console.log(event);

    if (event != null) {
      filtervalue = event.target.value;
      console.log(filtervalue);

      this.filterNameParam = filtervalue;
    }

    console.log(this.filterNameParam)
    

    this.influencerService.filter("name", this.filterNameParam)?.subscribe(res => {
      console.log(res);

      if (res.data == null) {
        console.log("errormessage");
        this.errormessage = "No results with name: " + filtervalue;
        return;
      };

      if (!this.filterSurnameParam && this.filterNameParam) {
        this.influencers = res.data;
      } else if (this.filterSurnameParam && this.filterNameParam) {
        this.influencers = this.filterDistinct(this.influencers, res.data);
      } else if (!this.filterNameParam && this.filterSurnameParam) {
        this.setFilterSurname(null);

      } else {
        this.influencers = res.data;
      }
    });

  }

  setFilterSurname(event: any) {
    this.errormessage = ""
    var filtervalue = "";
    this.surnameEvent = event;

    if (event != null) {
      filtervalue = event.target.value;
      console.log(filtervalue);

      this.filterSurnameParam = filtervalue;
    }


    console.log(this.filterSurnameParam);

    this.influencerService.filter("surname", this.filterSurnameParam)?.subscribe(res => {
      console.log(res.data);

      if (res.data == null) {
        this.errormessage = "No results with surname: " + filtervalue;
        return;
      };

      console.log(this.filterNameParam + " : " + this.filterSurnameParam)
    
      if (!this.filterNameParam && this.filterSurnameParam) {
        console.log("filter param is not empty")
        this.influencers = res.data;
      } else if (this.filterNameParam && this.filterSurnameParam) {
        console.log("no filter param")
        this.influencers = this.filterDistinct(this.influencers, res.data);
      } else if (this.filterNameParam && !this.filterSurnameParam) {
        console.log("nothing else")
        this.setFilterName(null);
      } else {
        this.influencers = res.data;
      }
    });

  }

  setFilterCategory(event: any) {
    this.errormessage = "";
    var filtervalue = "";
    
    if (this.filterCategoryParam.length != 1 && this.filterCategoryParam[0] == "All") {
      this.filterCategoryParam.pop()
    }

    if (event != null) {
      filtervalue = event.target.value;
      console.log(filtervalue);
      if (event.target.value != "All") {
        
  
        this.filterCategoryParam.push(filtervalue);
      }

      

    }

    console.log(this.filterCategoryParam);

    this.influencerService.filter("category", filtervalue)?.subscribe(res => {
      console.log(res.data);
      this.resetFilterValue("names");

      if (res.data == null) {
        this.errormessage = "No results for category: " + this.filterCategoryParam;
      }

      if (!this.filterGenderParam && this.filterCategoryParam) {
        this.influencers = res.data;
      } else if (this.filterGenderParam && this.filterCategoryParam) {
        this.influencers = this.filterDistinct(this.influencers, res.data);
      } else if (this.filterGenderParam && !this.filterCategoryParam) {
        this.setFilterGender(null);
      } else {
        this.influencers = res.data;
      }

    });

  }

  setFilterGender(event: any) {
    this.errormessage = ""
    var filtervalue = "";

    if (event != null) {
      filtervalue = event.target.value;
      console.log(filtervalue);

      this.filterGenderParam = filtervalue;
    }



    this.influencerService.filter("gender", filtervalue)?.subscribe(res => {
      console.log(res.data);
      this.resetFilterValue("names");

      if (res.data == null) {
        this.errormessage = "No results with gender: " + this.filterGenderParam;
      }

    });

  }

  setFilterFollowers(event: any) {
    var filtervalue = event.target.value;
    console.log(filtervalue);

    this.influencerService.filter("followersinstagram", filtervalue);

  }

  setFilterAge(event: any) {
    var filtervalue = event.target.value;
    console.log(filtervalue);

    this.influencerService.filter("age", filtervalue);

  }


}
