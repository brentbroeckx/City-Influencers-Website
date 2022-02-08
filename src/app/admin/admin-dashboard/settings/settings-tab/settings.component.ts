import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { sha256 } from 'crypto-hash';
import { AdminCreate } from 'src/app/models/AdminCreate';
import { AdminService } from 'src/app/services/admin.service';
import { matchValidator } from 'src/app/shared/validators/checkPassword-validator';
import { passwordValidator } from 'src/app/shared/validators/password-validator';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  show: boolean = false;
  showCheck: boolean = false;

  adminForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidator(), matchValidator('passwordCheck', true)]),
    passwordCheck: new FormControl('', [Validators.required, matchValidator('password')]),
  })

  constructor(private adminService: AdminService) { }

  showPassword() {
    this.show = !this.show;
}

showPasswordCheck() {
  this.showCheck = !this.showCheck;
}

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

  ngOnInit(): void {
  }

  createAdmin() {

    var password = this.adminForm.controls.password.value;
    var encryptedPass = sha256(password).then(res => {
      var create: AdminCreate = {
        username: this.adminForm.controls.username.value,
        firstname: this.adminForm.controls.firstname.value,
        lastname: this.adminForm.controls.lastname.value,
        email: this.adminForm.controls.email.value,
        password: res
      }
      console.log(create)
      this.adminService.createAdmin(create).subscribe(res => {
        this.modalHandler(false)
        window.location.reload()
      });

    })
    
   
  }

  get email() {
    return this.adminForm.get('email');
  }

  get username() {
    return this.adminForm.get('username');
  }

  get password() {
    return this.adminForm.get('password');
  }

  get passwordCheck() {
    return this.adminForm.get('passwordCheck')
  }

  get firstname() {
    return this.adminForm.get('firstname');
  }

  get lastname() {
    return this.adminForm.get('lastname')
  }
}

