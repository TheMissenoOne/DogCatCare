import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {HeaderService} from './header.service';

@Injectable({
  providedIn: 'root'
})
export class VerifySessionService implements CanActivate {

  constructor(private router: Router, private headerService: HeaderService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

    const session = JSON.parse(localStorage.getItem('session'));

    if(session){
      this.headerService.user = session;
      return true;
    }else{
      this.router.navigate(['']).then();
      return false;
    }
  }


}
