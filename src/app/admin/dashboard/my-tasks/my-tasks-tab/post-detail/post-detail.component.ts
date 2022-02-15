import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { TaskChange } from 'src/app/models/taskChange';
import { PostsService } from 'src/app/services/posts.service';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  task: Task = {aantalpuntenwaard: "", datumopgegeven: "", datumuitgevoerd: "", foto: "", id: "", isuitgevoerd: "", omschrijving: "", stadid: "", titel: "", winnaarid: "", postcount: "", categories: []}

  post: Post = {id: "", influencerid: "", stadid: "", foto: "", beschrijving: "", isgoedgekeurd: "", commentaarstad: "", aantallikes: "", aantalcomments: "", bereik: "", opdrachtid:""}
  postForm = new FormGroup({
    approved: new FormControl('', [Validators.required]),
    comment: new FormControl('', Validators.required),
    winner: new FormControl('', Validators.required),
  }) 

  constructor(private postsService: PostsService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService, private taskService: TaskService) {}

  ngOnInit(): void {
    if(window.history.state.post){
      this.post = window.history.state.post

      this.taskService.getTaskById(this.post.opdrachtid).subscribe(res => {
        this.task = res.data[0];
        if(this.task.winnaarid === this.post.influencerid){
          this.postForm.controls.winner.setValue(true);
        } 
      })
      
      if(this.post.isgoedgekeurd === 't'){
        this.postForm.controls.approved.setValue(true);
      }

      if(this.post.isgoedgekeurd === 'f'){
        this.postForm.controls.approved.setValue(false);
      }
      if(this.post.commentaarstad){
        this.postForm.controls.comment.setValue(this.post.commentaarstad);
      }          
    }
  }

   onSubmit() {
      var approved = this.postForm.controls.approved.value;
      var comment = this.postForm.controls.comment.value;
      var winner = this.postForm.controls.winner.value;
      if(approved === 't'){
        approved = true;
      }

      if(approved === 'f'){
        approved = false;
      }

      

      if(winner){
      var settingsChange: TaskChange = {
        taskid: this.post.opdrachtid,
        winnerid: this.post.influencerid
      }
      if(winner===false){
        var settingsChange: TaskChange = {
          taskid: this.post.opdrachtid,
          winnerid: ""
        }
        
      }

      this.taskService.changeTask(settingsChange).subscribe(res => {
        
      });

    }
  
      this.postsService.changePost(this.post.id, this.post.opdrachtid, approved, comment).subscribe(res => {
        
      }); 
      this.toastr.success("Succesfully updated post", "City")
      history.back()    
  }

  


}
