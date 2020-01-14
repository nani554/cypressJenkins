import { Component, OnInit, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, AfterContentInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { AppTestService } from '../app-test.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getViewData } from '@angular/core/src/render3/instructions';
import { Backend } from '../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,
 OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  naming = 'manoj';
  loginForm: FormGroup;
  loginstatus;
  jsobjc;
  somearr = [1,2,4,65];
  @Input('some') some;
  constructor(private apptest: AppTestService, private backse: Backend) {
    console.log(this.naming);
  }
  ngOnChanges(value: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('changes', value);
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('content view');
  }
  ngDoCheck() {
    console.log('do check')
  }
  ngAfterContentChecked() {
    console.log('content checked');
  }
  ngAfterViewInit() {
    console.log('view init');
  }
  ngAfterViewChecked() {
    console.log('view checked');
  }
  ngOnDestroy() {
    console.log('destroy');
  }
  ngOnInit() {
    console.log('oninit');
    this.loginForm = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'pwd': new FormControl('', [Validators.required])
    });

    this.getViewData();
  }

  login() {
    if (this.loginForm.valid) {
      this.loginstatus = this.apptest.loginser(this.loginForm.value);
    }
  }
  newname(e) {
    console.log(e);
    this.naming = e;
  }
  justobj(e) {
    this.jsobjc = e;
    console.log(this.jsobjc);
  }
  getViewData() {
    this.backse.back().subscribe(res => {
      console.log(res);
    });
  }

  bungijump(v) {
    console.log(v);
    let arri = this.somearr.findIndex(ele => {
      return ele === v;
    })
    console.log(arri);
    this.somearr.splice(arri, 1);
    console.log(this.somearr);
  }
}
