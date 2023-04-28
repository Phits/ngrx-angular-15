import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import { AppState } from './reducers';
import {isLoggedIn} from './auth.selectors';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<AppState>, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<boolean> {
        return this.store.pipe(
            select(isLoggedIn),
            tap(isLoggedIn => {
                if (!isLoggedIn) {
                    this.router.navigateByUrl('/login');
                }
            })
        );
    }
}