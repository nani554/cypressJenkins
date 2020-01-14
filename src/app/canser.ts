

import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AppTestService } from './app-test.service';

@Injectable()
export class CanAuthenticate implements CanActivate {
    temp;
    constructor(private testser: AppTestService) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // console.log(this.testser.loginstat.subscribe(res => {console.log(res)})
        
        this.temp = this.testser.loginstat.subscribe(res => {
            if (res === "true") {
                console.log('true');
                return true;
            } else {
                console.log('false');
                return false;
            }
        });
        // (this.temp)?return true:return false;
        if(this.temp) {
            return true;
        } else {
            return false;
        }
    }
}
