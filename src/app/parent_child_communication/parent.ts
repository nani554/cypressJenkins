import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-parentcommunication',
    templateUrl: './parent.html'
})

export class ParentCommunicationComponent {
    @Input() whatsthename: string;
    @Output() changename = new EventEmitter();
    @Output() gettingdata = new EventEmitter();
    constructor() {
        console.log(this.whatsthename);
    }
    changenamefn(x) {
        if (x) {
            this.changename.emit(x);
        }
    }

    custobj() {
        let objd = { 
            dream: 'rich and grounded',
            age: 27
        }
        this.gettingdata.emit(objd);
    }
}
