import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './users/user.model';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppTestService {
  users: UserModel[] = [];
  loginstat = new BehaviorSubject('false');

  isLoginstat(x) {
    this.loginstat.next(x);
  }
  constructor(private http: HttpClient, private router: Router) { }

  newuser(data) {
    console.log(this.users);
    if (this.users && this.users.length > 0) {
     let useravailability =  this.users.filter(user => {
        return user.email === data.email;
      })
      console.log(useravailability);
      if(useravailability.length == 0) {
        this.users = [...this.users, data];
        return 'success';
      } else {
        return 'failure';
      }

    } else {
      this.users = [...this.users, data];
      console.log(this.users);
      return 'success';
    }
  }

  loginser(data) {
    let validUser;
    console.log(this.users);
    validUser = this.users.filter(user => {
      console.log(user, data,  user.email === data.email)
      return user.email === data.username;
    });
    console.log(validUser);
    if (validUser.length > 0) {
      if(validUser[0].pwd === data.pwd) {
        this.isLoginstat('true');
        // this.router.navigate(['/home']);
        this.loginstat.subscribe(res => {
          console.log(res, typeof(res));
          if(res === "true") {
            console.log('navigate');
            this.router.navigate(['home']);
          } else {
            console.log('failure')
            // return 'failure';
          }
        })
      }
      return 'failure';
    } else {
      return 'failure';
    }
  }
}
