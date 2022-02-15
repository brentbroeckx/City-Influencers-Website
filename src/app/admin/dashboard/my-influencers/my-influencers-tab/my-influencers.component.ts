import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Influencer } from 'src/app/models/influencer';
import { CategoryService } from 'src/app/services/category.service';
import { InfluencerService } from 'src/app/services/influencer.service';

import { Options } from '@angular-slider/ngx-slider';


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
  testId = localStorage.getItem('id');

  // AGE SLIDER VALUES
  minValue = 18;
  maxValue = 80;
  options: Options = {
    ceil: 100,
    showSelectionBar: true,
    selectionBarGradient: {
      from: 'white',
      to: '#FC0'
    }
  }


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
    switch (type) {
      case "names":
        if (this.nameEvent == null) break;
        this.nameEvent.target.value = "";
        if (this.surnameEvent == null) break;
        this.surnameEvent.target.value = "";
    }
  }

  setFilterName(event: any) {
    this.errormessage = "";
    var filtervalue = "";
    this.nameEvent = event;


    if (event != null) {
      filtervalue = event.target.value;

      this.filterNameParam = filtervalue;
    }



    this.influencerService.filter("name", this.filterNameParam)?.subscribe(res => {

      if (res.data == null) {
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

      this.filterSurnameParam = filtervalue;
    }



    this.influencerService.filter("surname", this.filterSurnameParam)?.subscribe(res => {
      if (res.data == null) {
        this.errormessage = "No results with surname: " + filtervalue;
        return;
      };


      if (!this.filterNameParam && this.filterSurnameParam) {
        this.influencers = res.data;
      } else if (this.filterNameParam && this.filterSurnameParam) {
        this.influencers = this.filterDistinct(this.influencers, res.data);
      } else if (this.filterNameParam && !this.filterSurnameParam) {
        this.setFilterName(null);
      } else {
        this.influencers = res.data;
      }
    });

  }

  setFilterCategory(event: any) {
    this.errormessage = "";
    var filtervalue = "";
    this.filterCategoryParam = ["All"]

    if (this.filterCategoryParam.length != 1 && this.filterCategoryParam[0] == "All") {
      this.filterCategoryParam.pop()
    }

    if (event != null) {
      filtervalue = event.target.value;
      if (event.target.value != "All") {


        this.filterCategoryParam.push(filtervalue);
      }
    }

    if (this.filterCategoryParam.length != 1) {
      this.filterCategoryParam.splice(0, 1)
    }


    this.influencerService.filter("category", "", this.filterCategoryParam)?.subscribe(res => {
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

      this.filterGenderParam = filtervalue;
    }

    this.influencerService.filter("gender", filtervalue)?.subscribe(res => {
      this.resetFilterValue("names");

      if (res.data == null) {
        this.errormessage = "No results with gender: " + this.filterGenderParam;
      }

      this.influencers = res.data;
    });

  }

  setFilterFollowers(event: any) {
    this.errormessage = ""
    var filtervalue = "";


    filtervalue = event.target.value;
    this.filterFollowersParam = filtervalue;

    this.influencerService.filter("followers", filtervalue.toString())?.subscribe(res => {
      this.resetFilterValue("names");

      if (res.data == null) {
        this.errormessage = "No results with Followers: " + this.filterFollowersParam;
      }

      this.influencers = res.data;

    });

  }

  sliderEvent() {
    var min = this.minValue;
    var max = this.maxValue;
    this.setFilterAge(min, max);
  }

  setFilterAge(min: number, max: number) {
    this.errormessage = ""

    var array = []
    array.push(min);
    array.push(max);

    this.influencerService.filter("age", "", [], array)?.subscribe(res => {
      this.resetFilterValue("names");

      if (res.data == null) {
        this.errormessage = "No results for age between: " + this.minValue + " - " + this.maxValue;
      }

      this.influencers = res.data;

    });

  }


}
