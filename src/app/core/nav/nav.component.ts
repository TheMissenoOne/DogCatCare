import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navOn = true;
  pageOn = 'dashboard';
  public innerHeight: any;

  constructor(
    public route: Router
  ) { }


  ngOnInit(): void {
    this.innerHeight = window.innerHeight;
  }

  logout(): void {
    localStorage.setItem('session', null);
    this.route.navigate(['']).then();
  }

  toggleNav(): void {
    this.navOn = !this.navOn;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.innerHeight = window.innerHeight;
  }

}
