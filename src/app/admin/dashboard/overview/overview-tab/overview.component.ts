import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import * as echarts from 'echarts/core';
import {
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';
import { Influencer } from 'src/app/models/influencer';
import { InfluencerService } from 'src/app/services/influencer.service';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  
  constructor(private authService: AuthService, private elRef: ElementRef, private cityService: CityService, private influencerService: InfluencerService, private taskService: TaskService, private postsService: PostsService) {}
  
   option: any;
   
   requestCount: number = 0;
  
   totalInfluencers: number = 0;
   totalPosts: number = 0;
   totalOpenTasks: number = 0;
   totalCompletedTasks : number = 0;

   cities: City[] | undefined;
   task: Task[] | undefined;
   influencer: Influencer[] | undefined;
   posts: Post[] | undefined;
   cityID: string | null | undefined;

  
  ngOnInit(): void {

    this.cityID = localStorage.getItem('id')

    if (this.cityID){    
      this.cityService.getCityById(this.cityID).subscribe(res => 
        {this.totalInfluencers = Number(res.data[0].influencercount)
          console.log( this.totalInfluencers)
      })
    }


    this.cityService.getAllRequestedCities().subscribe(res => {
      this.cities = res.data;
      this.requestCount = this.cities?.length;
    });



    // this.postsService.getAllPosts().subscribe(res => {
    //   this.posts = res.data;
    // });

    this.taskService.getAllTasks().subscribe(res => {
      this.task = res.data;
      if(this.task){
         this.task.forEach(task => {
        if (task.winnaarid === null){
          this.totalOpenTasks ++
        }
        else {
          this.totalCompletedTasks ++
        }
        
      });
      console.log (this.totalOpenTasks, this.totalCompletedTasks)}
     
    });

  

  
    echarts.use([
      DatasetComponent,
      TooltipComponent,
      GridComponent,
      LegendComponent,
      BarChart,
      CanvasRenderer
    ]);
    
    var app = {};
    
    var chartDom = document.getElementById('main');
    var myChart: any;

    if (chartDom != null) {
      myChart = echarts.init(chartDom);
    }

    console.log(this.totalOpenTasks, '###########')
    
    this.option = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['Category', 'Influencers', 'Tasks', 'Tasks done'],
          ['Travel', this.totalOpenTasks, 85, 93],
          ['Food', 54, 73.4, 55],
          ['Sport', 5, 65.2, 82],
          ['Clothes', 35, 53.9, 39.1],
          ['Lifestyle', 3, 52, 39.1],
          ['DJ', 37, 53.9, 39.1],
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    };
    if (typeof this.option !== 'undefined'){
      this.option && myChart.setOption(this.option);
    }
  }
}


