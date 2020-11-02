import { Injectable } from '@angular/core';
import {HeaderData} from '../../shared/models/header-data.model';
import {BehaviorSubject} from 'rxjs';
import {Title} from '@angular/platform-browser';
import {User} from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  user: User;

  // tslint:disable-next-line:variable-name
  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Dashboard',
    icon: 'home',
    routeUrl: 'dashboard',
    pageTitle: ''
  });

  constructor(private titleService: Title) {}

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
    const fullPageTitle = 'DogCatCare - ' + (headerData.title === '' ? headerData.pageTitle : headerData.title);
    this.titleService.setTitle(fullPageTitle);
  }

}
