import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';
import TakeUntilDestroy from '../take-until-destroy'

@TakeUntilDestroy
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router){};
  canActivate(
    route: ActivatedRouteSnapshot,
   ) {
   
    let isLoggedIn = this.authService.isUserLoggedIn();
    if (isLoggedIn){
      return true
    } else {
       this.router.navigate(['/login']);
      return false;
    }
  
  }
  
}
