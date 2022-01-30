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

  post: Post = {id: "", influencerid: "", stadid: "", foto: "", beschrijving: "", isgoedgekeurd: "", commentaarstad: "", aantallikes: "", aantalcomments: "", bereik: "" }


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


}