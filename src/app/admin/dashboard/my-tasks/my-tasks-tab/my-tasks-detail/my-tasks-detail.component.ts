import { Component, OnInit , NgModule, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-my-tasks-detail',
  templateUrl: './my-tasks-detail.component.html',
  styleUrls: ['./my-tasks-detail.component.css']
})

export class MyTasksDetailComponent implements OnInit {

  task: Task = {aantalpuntenwaard: "", datumopgegeven: "", datumuitgevoerd: "", foto: "", id: "", isuitgevoerd: "", omschrijving: "", stadid: "", titel: "", winnaarid: "", postcount: "", categories: ""}

  posts: Post[] | undefined;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private postService: PostsService) {
  }
  
  public modalHandler(val: boolean, modalNumber: String) {
    if (modalNumber === 'modal1'){
      var modal = document.getElementById("modal");
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
  }
  }

}





