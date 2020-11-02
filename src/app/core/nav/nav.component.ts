import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navOn = true;

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.setItem('session', null);
    this.route.navigate(['']).then();
  }

  toggleNav(): void {
    this.navOn = !this.navOn;
  }

}
