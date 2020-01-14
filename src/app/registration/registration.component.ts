import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppTestService } from '../app-test.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {
  regform: FormGroup;
  regstatus;
  malli = 'without zone.js';
  constructor(private apptest: AppTestService) { }

  ngOnInit() {
    this.regform = new FormGroup({
      'name': new FormControl('one', [Validators.required]),
      'email': new FormControl('one@yopmail.com', [Validators.required]),
      'pwd': new FormControl('one', [Validators.required]),
      'cnfpwd': new FormControl('one', [Validators.required])
    });
  }
  register() {
    console.log(this.regform.valid, this.regform.value);
    if (this.regform.valid) {
      this.regstatus = this.apptest.newuser(this.regform.value);
    }
  }

  check() {
    console.log('registration called');
  }

  send(x) {
    console.log('from registration', x);
  }
  chang() {
    this.malli = 'change event worked';
  }
}
