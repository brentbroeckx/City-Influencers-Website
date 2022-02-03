import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-my-tasks-detail',
  templateUrl: './my-tasks-detail.component.html',
  styleUrls: ['./my-tasks-detail.component.css']
})
export class MyTasksDetailComponent implements OnInit {

  task: Task = {aantalpuntenwaard: "", datumopgegeven: "", datumuitgevoerd: "", foto: "", id: "", isuitgevoerd: "", omschrijving: "", stadid: "", titel: "", winnaarid: "", postcount: "", categories: ""}

  posts: Post[] | undefined;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id');
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
