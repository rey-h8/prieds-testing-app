import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css'],
})
export class InputVisitorDetailsComponent implements OnInit {
  user = {
    nama: '',
    umur: '',
    jenis_kelamin: '',
    nik: '',
  };
  submitted = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  saveUser(): void {
    const { nama, umur, jenis_kelamin, nik } = this.user;

    const data = {
      nama,
      umur,
      jenis_kelamin,
      nik,
    };

    this.userService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      nama: '',
      umur: '',
      jenis_kelamin: '',
      nik: '',
    };
  }
}
