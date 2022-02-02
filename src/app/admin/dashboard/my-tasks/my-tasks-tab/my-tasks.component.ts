import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  toDetailPage(id: String) {
    this.router.navigate(['/dashboard/my-tasks/detail', id])
  }
}
