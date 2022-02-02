import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post = {id: "", influencerid: "", stadid: "", foto: "", beschrijving: "", isgoedgekeurd: "", commentaarstad: "", aantallikes: "", aantalcomments: "", bereik: "" }

  /* postForm = new FormGroup({
    approved: new FormControl('', [Validators.required]),
    comment: new FormControl('', Validators.required)
  }) */

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('postId');
    const influencerId = this.route.snapshot.paramMap.get('influencerId');
    if (postId != null && influencerId != null){
        this.postsService.getPostById(influencerId, postId).subscribe(res => {
          this.post = res.data[0];
      })
    }
  }

 /*  onSubmit() {
    console.log("registering button clicked")

    var approved = this.postForm.controls.approved.value;
    var comment = this.postForm.controls.comment.value;
    console.log(approved, comment)


    /* var cityRegister: CityRegister = {
      username: this.registerForm.controls.username.value,
      password: encryptedPass,
      name: this.registerForm.controls.city.value,
      postcode: this.registerForm.controls.postcode.value,
      email: this.registerForm.controls.email.value,
      type: "stad"
    }

    console.log("Registering...")
    console.log(cityRegister)

    this.signUpSerivce.processLogin(cityRegister).subscribe(res => {
      console.log(res)
    }); */

  


}