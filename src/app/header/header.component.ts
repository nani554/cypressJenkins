import { Component, OnInit } from '@angular/core';
import { AppTestService } from '../app-test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authenticated;
  constructor(private testser: AppTestService, private router: Router) {

   }

  ngOnInit() {
    this.testser.loginstat.subscribe(res => {
      this.authenticated = res;
      console.log(res, this.authenticated);
    })
  }
  logout() {
    this.testser.isLoginstat('false');
    this.router.navigate(['/']);
  }
}
