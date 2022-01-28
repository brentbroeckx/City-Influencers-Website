import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() post: Post = {id: "", influencerid: "", stadid: "", isgoedgekeurd: "", commentaarstad: "", aantallikes: "", bereik: "" }
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toDetailPage(id: String) {
    this.router.navigate(['/dashboard/my-influencers/posts/detail', id])
  }

}
