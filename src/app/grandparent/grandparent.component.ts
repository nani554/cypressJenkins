import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandparentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  check() {
    console.log('gradparent called');
  }
}
