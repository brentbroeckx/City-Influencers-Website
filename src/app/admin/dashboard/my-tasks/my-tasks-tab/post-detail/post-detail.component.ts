import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post = {id: "", influencerid: "", stadid: "", foto: "", beschrijving: "", isgoedgekeurd: "", commentaarstad: "", aantallikes: "", aantalcomments: "", bereik: "", opdrachtid:""}
  postForm = new FormGroup({
    approved: new FormControl('', [Validators.required]),
    comment: new FormControl('', Validators.required)
  }) 

  constructor(private postsService: PostsService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService ) {}

  ngOnInit(): void {
    if(window.history.state.post){
      this.post = window.history.state.post
      
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
      if(approved === 't'){
        approved = true;
      }

      if(approved === 'f'){
        approved = false;
      }
  
      this.postsService.changePost(this.post.id, this.post.opdrachtid, approved, comment).subscribe(res => {
        console.log(res)
      }); 
      this.toastr.success("Succesfully updated post", "City")
      history.back()    
  }

  


}
