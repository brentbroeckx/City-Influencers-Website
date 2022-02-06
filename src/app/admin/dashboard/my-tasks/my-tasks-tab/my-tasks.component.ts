import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskChange } from 'src/app/models/taskChange';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {

  tasks: Task[] | undefined;

  taskForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    reward: new FormControl('', [Validators.required])

  })

  constructor(private router: Router, private taskService: TaskService) { }


  public modalHandler(val: boolean) {
      var modal = document.getElementById("modal");
      var table = document.getElementById("table");
      if(modal && table){
        if (val) {
          modal.classList.remove("hidden");
          table.classList.add("hidden");
      } else {
          modal.classList.add("hidden");
          table.classList.remove("hidden");
      }
      }
    }

    dropdownList: [
      { item_id: 1, item_text: 'All' },
      { item_id: 2, item_text: 'Travel' },
      { item_id: 3, item_text: 'Food' },
      { item_id: 4, item_text: 'Sport' },
      { item_id: 5, item_text: 'Clothes' },
      { item_id: 6, item_text: 'Lifestyle' },
      { item_id: 7, item_text: 'DJ' }
    ];
    selectedItems: [
      { item_id: 3, item_text: 'Food' },
      { item_id: 4, item_text: 'Sport' }
    ];
    dropdownSettings = {
          singleSelection: false,
          idField: 'item_id',
          textField: 'item_text',
          selectAllText: 'Select All',
          unSelectAllText: 'Unselect All',
          itemsShowLimit: 3,
          allowSearchFilter: true
        };

  ngOnInit(): void {

    this.modalHandler(false);
    this.taskService.getAllTasks().subscribe(res => {
      this.tasks = res.data;
      console.log(this.tasks)
    });
    this.dropdownList = [
      { item_id: 1, item_text: 'All' },
      { item_id: 2, item_text: 'Travel' },
      { item_id: 3, item_text: 'Food' },
      { item_id: 4, item_text: 'Sport' },
      { item_id: 5, item_text: 'Clothes' },
      { item_id: 6, item_text: 'Lifestyle' },
      { item_id: 7, item_text: 'DJ' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Food' },
      { item_id: 4, item_text: 'Sport' }
    ]; 
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }


  toDetailPage(id: String) {
    this.router.navigate(['/dashboard/my-tasks/detail', id])
  }

  createTask() {
    
      var create: TaskChange = {
        totalpointsworth: this.taskForm.controls.reward.value,
        description: this.taskForm.controls.description.value,
        title: this.taskForm.controls.title.value
      }
      this.taskService.createTask(create).subscribe(res => {
        this.modalHandler(false)
        window.location.reload()
      });
    }
  }
