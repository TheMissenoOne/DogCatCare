import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pages = [true, false, false, false, false, false, false, false, false, false];
  constructor() { }

  ngOnInit(): void {
  }

  show(page) {
    this.pages = [false, false, false, false, false, false, false, false, false, false];
    this.pages[page] = true;
  }

}
