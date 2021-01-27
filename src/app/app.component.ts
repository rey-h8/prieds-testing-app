import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WindowRef } from './services/window-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'testing-app';

  constructor(private router: Router, private winRef: WindowRef) {}
  open(url, windowName, params): any {
    this.winRef.nativeWindow.open(url, windowName, params);
  }

  queue(): any {
    return (
      this.winRef.nativeWindow.location.pathname === '/request-queue-number'
    );
  }
  ngOnInit(): void {}

  changePage(path) {
    this.router.navigate(['/' + path]);
  }
}
