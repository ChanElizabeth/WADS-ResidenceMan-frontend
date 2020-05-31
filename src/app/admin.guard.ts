import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth:AdminService, private route:Router){ 
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    console.log('Url:'+ url);
    if (this.auth.isLoggedIn()) {
      return true; 
    }
    this.auth.setRedirectUrl(url);
    this.route.navigate([ this.auth.getAdminUrl() ]);
    return false;
    }
}
