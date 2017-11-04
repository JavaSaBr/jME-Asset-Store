import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {SecurityService} from "../../../service/security.service";

/**
 * The class is for activation rout guard.
 *
 * @author Denis Lesheniuk.
 */
@Injectable()
export class AppSettingsGuard implements CanActivate {

  constructor(private readonly security: SecurityService) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.security.hasRole('ADMIN');
  }
}
