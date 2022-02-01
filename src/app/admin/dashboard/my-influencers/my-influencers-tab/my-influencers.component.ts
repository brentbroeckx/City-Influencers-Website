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
  filterNameParam: string = "";
  filterSurnameParam: string = "";
  searchCategoryParam: string[] = ["All"];
  isFiltering: Boolean = false;
  allCategories: Category[] | undefined;

  errormessage: string = "";
  nameEvent: any;

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

  /*filterByName(category: string, name: string) {
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


  }*/


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

  setFilterName(event: any) {
    this.errormessage = "";
    var filtervalue = "";

    console.log(event);

    if (event != null) {
      filtervalue = event.target.value;
      console.log(filtervalue);
      //this.nameEvent = event;


      this.filterNameParam = filtervalue;
    }

    console.log(this.filterNameParam)
    

    this.influencerService.filter("name", this.filterNameParam)?.subscribe(res => {
      console.log(res);

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
        return;
      }
    });

  }

  setFilterSurname(event: any) {
    this.errormessage = ""
    var filtervalue = "";

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

    
      if (!this.filterNameParam && this.filterSurnameParam) {
        console.log("filter param is not empty")
        this.influencers = res.data;
      } else if (this.filterNameParam && this.filterSurnameParam) {
        console.log("no filter param")
        this.influencers = this.filterDistinct(this.influencers, res.data);
      } else {
        this.influencers = res.data;
      }
    });

  }

  setFilterCategory(event: any) {
    var filtervalue = event.target.value;
    console.log(filtervalue);

    this.influencerService.filter("category", filtervalue);

  }

  setFilterGender(event: any) {
    var filtervalue = event.target.value;
    console.log(filtervalue);

    this.influencerService.filter("gender", filtervalue);

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
