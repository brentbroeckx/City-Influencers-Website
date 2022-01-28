import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post = {id: "", influencerid: "", stadid: "", isgoedgekeurd: "", commentaarstad: "", aantallikes: "", bereik: "" }


  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    /* if (postId != null) {
      this.postsService.getPostById(postId).subscribe(res => {
        this.post = res.data[0];
      } */
  }

}
