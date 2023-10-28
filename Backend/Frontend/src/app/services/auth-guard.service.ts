import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, map } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  email:string="";role:string='';
  constructor(private authService: LoginService, private router: Router,private loginService:LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const requiredRoles = route.data['requiredRole'] || [];
    this.email = sessionStorage.getItem('user') as string;

    return this.loginService.getRoleUser(this.email).pipe(
      map((role) => {
        this.role = role;
        if (!this.authService.isAuthenticated()) {
          this.router.navigate(['/signin']);
          return false;
        }
        if (!this.role || !requiredRoles.includes(this.role)) {
          this.router.navigate(['/forbidden']);
          console.log(this.role);
          return false;
        }
        return true;
      })
    );
  }
}
