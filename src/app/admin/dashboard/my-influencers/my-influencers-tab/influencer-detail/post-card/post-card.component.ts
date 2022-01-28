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
  
  constructor() { }

  ngOnInit(): void {
  }

}
