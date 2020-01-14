import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[titleCaseBrohhhh]',
    // exportAs: 'titlecasebroh'
})
export class TitleCaseBrohhhh {
    constructor(private en: ElementRef) {}

    @HostListener('keyup') somed(x) {
        let value = this.en.nativeElement.value;
        let valuea = value.split(" ");
        // valuea.forEach(element => {

        // });
        let valueaf = valuea.map((x) => {
            console.log(x);
            return x.charAt(0).toUpperCase()+x.slice(1);
        })
        this.en.nativeElement.value = valueaf.join(" ");
        console.log(valuea);
        console.log(x, this.en.nativeElement.value);
    }
    // // onk

    @HostListener('click', ['$event.target'])
    onClick() {
      console.log('button', 'number of clicks:');
   }
    
}
