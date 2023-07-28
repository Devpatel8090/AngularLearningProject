import { Directive,ElementRef} from '@angular/core';

@Directive({
  selector: '[appChangeValue]'
})
export class ChangeValueDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = "red";
   }

}
