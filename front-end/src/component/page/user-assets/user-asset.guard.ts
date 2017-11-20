import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {SecurityService} from "../../../service/security.service";

@Injectable()
export class UserAssetGuard implements CanActivate {

  constructor(private readonly securityService: SecurityService) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   return this.securityService.hasRole('ARTIST');
  }
}
