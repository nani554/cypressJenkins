import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  datab = 'badacau';
  constructor() { }

  ngOnInit() {
    console.log('home oninit');
  }
  ngOnDestroy() {
    console.log('home destroy');
  }
  ngAfterViewInit() {
    console.log('home after view init');
  }
  ngAfterContentChecked() {
    console.log('home content checked');
  }
  ngAfterViewChecked() {
    console.log('home view checked');
  }
  ngAfterContentInit() {
    console.log('home contentinit');
  }
  ngOnChanges() {
    console.log('home changes');
  }
  ngDoCheck() {
    console.log('home docheck');
  }
}
