import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { Task } from 'src/app/models/task';
import { TaskChange } from 'src/app/models/taskChange';
import { CategoryService } from 'src/app/services/category.service';
import { TaskService } from 'src/app/services/task.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {

  tasks: Task[] | undefined;
  categories: Category[] | undefined;
  pictureURL: any;
  loading: boolean = true;

  taskForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    reward: new FormControl('', [Validators.required])

  })

  constructor(private _renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document, private router: Router, private taskService: TaskService, private toastr: ToastrService, private categoryService: CategoryService) { }


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

    dropdownList: any[] = []; 

    selectedItems: any[] = [];
    dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'naam',
      selectAllText: 'Select all',
      unSelectAllText: 'Unselect all',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  ngOnInit(): void {

    this.modalHandler(false);
    this.taskService.getAllTasks().subscribe(res => {
      this.tasks = res.data;
      this.tasks.forEach(task => {
        if(task.foto == null){
          task.foto = "../../../../../assets/images/influencer.jpg"
        }
      });
      this.loading=false;
    });
    this.categoryService.getAllCategories().subscribe(res => {
      this.categories = res.data;
      this.dropdownList = this.categories;
    });

    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
    {
      function success() {
        var data = JSON.parse(this.responseText);
      }
    
      function error(err) {
      }

      var myWidget = cloudinary.createUploadWidget({
        cloudName: 'dbyo9rarj', 
        uploadPreset: 'CI-img-upload', 
        folder: 'Cities',
        maxImageFileSize: 10000000,
        cropping: true
        }, (error, result) => { 
          if (!error && result && result.event === "success") { 
            var url = result.info.url;

            var imageURL = document.getElementById("imageURL").src = url;
          }
        }
      )
    
      document.getElementById("upload_widget")?.addEventListener("click", function(){
          myWidget.open();
        }, false);
    }
    
    `;


    this._renderer2.appendChild(this._document.body, script);
  }


  toDetailPage(id: String) {
    this.router.navigate(['/dashboard/my-tasks/detail', id])
  }

  createTask() {
    var element = document.getElementById("imageURL")?.attributes
    var srcURL = element?.getNamedItem("src")?.textContent;
    var pictureURL = srcURL || undefined;
    
      var create: TaskChange = {
        totalpointsworth: this.taskForm.controls.reward.value,
        description: this.taskForm.controls.description.value,
        title: this.taskForm.controls.title.value,
        picture: pictureURL
      }
      this.taskService.createTask(create).subscribe(res => {
        this.modalHandler(false)
        this.toastr.success("Succesfully added task", "City");
        location.reload();
      });
    }
  }
