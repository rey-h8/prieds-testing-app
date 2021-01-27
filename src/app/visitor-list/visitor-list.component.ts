import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css'],
})
export class VisitorListComponent implements OnInit {
  users: any;
  currentUser = null;
  currentIndex = -1;
  query: '';

  displayedColumns: string[] = [
    'nama',
    'jenis_kelamin',
    'tanggal_lahir',
    'nik',
  ];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getAll().subscribe(
      (data) => {
        this.users = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = null;
    this.currentIndex = -1;
  }

  setActiveUser(user, index): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  removeAllUsers(): void {
    this.userService.deleteAll().subscribe(
      (response) => {
        console.log(response);
        this.retrieveUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchUser(): void {
    this.userService.findWithQuery(this.query).subscribe(
      (data) => {
        this.users = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
