import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { sha256 } from 'crypto-hash';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
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
  sorting: Boolean = false;

  admins: Admin[] | undefined;

  adminForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidator(), matchValidator('passwordCheck', true)]),
    passwordCheck: new FormControl('', [Validators.required, matchValidator('password')]),
  })

  constructor(private adminService: AdminService, private toastr: ToastrService) { }

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
    this.adminService.getAdmins().subscribe(res => {
      this.admins = res.data;
    });
    
  }

  changeSort() {
    this.sorting = !this.sorting;

    switch (this.sorting) {
      case true:
        this.admins?.sort((a, b) => {
          var textA = a.gebruikersnaam.toLowerCase();
          var textB = b.gebruikersnaam.toLowerCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
        })
        break;
      case false:
        this.admins?.sort((a, b) => {
          var textA = a.gebruikersnaam.toLowerCase();
          var textB = b.gebruikersnaam.toLowerCase();
          return (textA < textB) ? 1 : (textA > textB) ? -1 : 0
        })
        break;
    }

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
        this.toastr.success("Succesfully added admin", "Admin");
        location.reload();
      });

    })
    
   
  }

  changeStatus(admin: Admin) {

    if (admin.isactief == "f") {
      // change to true
      admin.isactief = "t";
      /* this.ad.changeCityStatus(city.id, true).subscribe(res => {
        this.toastr.success("Succesfully activated city", "Admin");
        return;
      }); */
      this.toastr.success("Succesfully activated admin", "Admin");
    } else {
      // change to false
      admin.isactief = "f";
      /* this.cityService.changeCityStatus(city.id, false).subscribe(res => {
        this.toastr.success("Succesfully deactivated city", "Admin");
        return;
      }); */
      this.toastr.success("Succesfully deactivated admin", "Admin");
    }

    
  }

  changeStatusSuper(admin: Admin) {

    if (admin.issuper == "f") {
      // change to true
      admin.issuper = "t";
      /* this.ad.changeCityStatus(city.id, true).subscribe(res => {
        this.toastr.success("Succesfully activated city", "Admin");
        return;
      }); */
      this.toastr.success("Succesfully activated super-admin", "Admin");
    } else {
      // change to false
      admin.issuper = "f";
      /* this.cityService.changeCityStatus(city.id, false).subscribe(res => {
        this.toastr.success("Succesfully deactivated city", "Admin");
        return;
      }); */
      this.toastr.success("Succesfully deactivated super-admin", "Admin");
    }

    
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

