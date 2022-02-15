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
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-my-tasks-detail',
  templateUrl: './my-tasks-detail.component.html',
  styleUrls: ['./my-tasks-detail.component.css']
})

export class MyTasksDetailComponent implements OnInit {
  task: Task = {aantalpuntenwaard: "", datumopgegeven: "", datumuitgevoerd: "", foto: "", id: "", isuitgevoerd: "", omschrijving: "", stadid: "", titel: "", winnaarid: "", postcount: "", categories: []}

  posts: Post[] | undefined;

  categories: Category[] | undefined;

  descriptionForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    categories: new FormControl('', [Validators.required]),
  })

  rewardForm = new FormGroup({
    reward: new FormControl('', [Validators.required])
  })

  constructor(private taskService: TaskService, private toastr: ToastrService, private route: ActivatedRoute, private postService: PostsService, private categoryService: CategoryService) {
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

dropdownList: any[] = []; 

selectedItems: any[] = [];

  dropdownSettings = {
        singleSelection: false,
        idField: 'id',
        textField: 'naam',
        selectAllText: 'Select all',
        unSelectAllText: 'Unselect all',
        itemsShowLimit: 3,
        allowSearchFilter: true
      };

  ngOnInit(): void {

    this.categoryService.getAllCategories().subscribe(res => {
      this.categories = res.data;
      this.dropdownList = this.categories;
    
    });
    
    const taskId = this.route.snapshot.paramMap.get('id');
    this.modalHandler(false, 'modal1');
    this.modalHandler(false, 'modal2');
    if (taskId != null ){
      this.taskService.getTaskById(taskId).subscribe(res => {
        this.task = res.data[0];
        if(this.task.foto == null){
          this.task.foto = "../../../../../assets/images/influencer.jpg"
        }
        console.log(this.task)
        Array.from(this.task.categories).forEach(category => {
            let index = this.dropdownList.findIndex(x => x.naam === category)+1;
            this.selectedItems.push( { id: index.toString(), naam: category })
        });

        this.descriptionForm.controls.categories.setValue(this.selectedItems);
      })

      this.postService.getPostsFromTask(taskId).subscribe(res => {
        this.posts = res.data;
      })

      ;
      this.dropdownSettings = {
        singleSelection: false,
        idField: 'id',
        textField: 'naam',
        selectAllText: 'Select all',
        unSelectAllText: 'Unselect all',
        itemsShowLimit: 3,
        allowSearchFilter: true
      };
  }

  
  }

  onSubmitDescription() {
    const taskId = this.route.snapshot.paramMap.get('id');
    if(taskId){
      var categories: Array<String> = [];
      this.descriptionForm.controls.categories.value.forEach((category: { id: string; naam: string; }) => {
        categories.push(category.naam)
      });

      var settingsChange: TaskChange = {
        taskid: taskId,
        description: this.descriptionForm.controls.description.value,
        title: this.descriptionForm.controls.title.value,
        categories: categories
      }

      this.taskService.changeTask(settingsChange).subscribe(res => {
        this.modalHandler(false, 'modal2');
        this.toastr.success("Succesfully changed task", "City");
        location.reload();
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
        this.toastr.success("Succesfully changed task", "City");
        location.reload();
      });
    }
  }
}





