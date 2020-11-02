import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../core/services/header.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private headerService: HeaderService) {
    this.headerService.headerData = {
      icon: 'home',
      pageTitle: 'Dashboard',
      routeUrl: 'dashboard',
      title: 'Dashboard'
    };
  }

  ngOnInit(): void {
  }

}
