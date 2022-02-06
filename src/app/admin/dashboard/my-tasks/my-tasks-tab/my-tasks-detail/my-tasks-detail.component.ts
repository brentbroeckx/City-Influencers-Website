import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';

import {CommonModule} from '@angular/common';
import { TaskChange } from 'src/app/models/taskChange';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-my-tasks-detail',
  templateUrl: './my-tasks-detail.component.html',
  styleUrls: ['./my-tasks-detail.component.css']
})

export class MyTasksDetailComponent implements OnInit {
  task: Task = {aantalpuntenwaard: "", datumopgegeven: "", datumuitgevoerd: "", foto: "", id: "", isuitgevoerd: "", omschrijving: "", stadid: "", titel: "", winnaarid: "", postcount: "", categories: ""}

  posts: Post[] | undefined;

  descriptionForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
  })

  rewardForm = new FormGroup({
    reward: new FormControl('', [Validators.required])
  })

  constructor(private taskService: TaskService,  private toastr: ToastrService, private route: ActivatedRoute, private postService: PostsService) {
  }
  
  public modalHandler(val: boolean, modalNumber: String) {
    if (modalNumber === 'modal1'){
      var modal = document.getElementById("modal1");
      var image = document.getElementById("image");
      if(modal && image){
        if (val) {
          modal.classList.remove("hidden");
          image.classList.add("hidden");
      } else {
          modal.classList.add("hidden");
          image.classList.remove("hidden");
      }
      }
    }

    else if (modalNumber === 'modal2'){
      var modal = document.getElementById("modal2");
      var image = document.getElementById("image");
      if(modal && image){
        if (val) {
          modal.classList.remove("hidden");
          image.classList.add("hidden");
      } else {
          modal.classList.add("hidden");
          image.classList.remove("hidden");
      }
      }
    }
}



  dropdownList: [
    { item_id: 1, item_text: 'All' },
    { item_id: 2, item_text: 'Travel' },
    { item_id: 3, item_text: 'Food' },
    { item_id: 4, item_text: 'Sport' },
    { item_id: 5, item_text: 'Clothes' },
    { item_id: 6, item_text: 'Lifestyle' },
    { item_id: 7, item_text: 'DJ' }
  ];
  selectedItems: [
    { item_id: 3, item_text: 'Food' },
    { item_id: 4, item_text: 'Sport' }
  ];
  dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'Unselect All',
        itemsShowLimit: 3,
        allowSearchFilter: true
      };

  ngOnInit(): void {
    
    const taskId = this.route.snapshot.paramMap.get('id');
    this.modalHandler(false, 'modal1');
    this.modalHandler(false, 'modal2');
    if (taskId != null ){
      this.taskService.getTaskById(taskId).subscribe(res => {
        this.task = res.data[0];
      })

      this.postService.getPostsFromTask(taskId).subscribe(res => {
        this.posts = res.data;
        console.log(this.posts)
      })

      this.dropdownList = [
        { item_id: 1, item_text: 'All' },
        { item_id: 2, item_text: 'Travel' },
        { item_id: 3, item_text: 'Food' },
        { item_id: 4, item_text: 'Sport' },
        { item_id: 5, item_text: 'Clothes' },
        { item_id: 6, item_text: 'Lifestyle' },
        { item_id: 7, item_text: 'DJ' }
      ];
      this.selectedItems = [
        { item_id: 3, item_text: 'Food' },
        { item_id: 4, item_text: 'Sport' }
      ]; 
      this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: true
      };
  }

  
  }

  onSubmitDescription() {
    const taskId = this.route.snapshot.paramMap.get('id');
    if(taskId){
      var settingsChange: TaskChange = {
        taskid: taskId,
        description: this.descriptionForm.controls.description.value,
        title: this.descriptionForm.controls.title.value
      }

      console.log(settingsChange)
      this.taskService.changeTask(settingsChange).subscribe(res => {
        this.modalHandler(false, 'modal2');
        window.location.reload();

      });
    }
  }

  onSubmitReward() {
    const taskId = this.route.snapshot.paramMap.get('id');
    if(taskId){
      var settingsChange: TaskChange = {
        taskid: taskId,
        totalpointsworth: this.rewardForm.controls.reward.value
      }

      console.log(settingsChange)
      this.taskService.changeTask(settingsChange).subscribe(res => {
        this.modalHandler(false, 'modal1');
        window.location.reload();
      });
    }
  }

}





