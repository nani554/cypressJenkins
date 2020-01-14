import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
// import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  @Input() gpinput: string;
  constructor() { }

  ngOnInit() {
  }
  nothing() {
    console.log('nothing its just change event stratergy');
  }
  check() {
    console.log('parent called');  
  }
}
