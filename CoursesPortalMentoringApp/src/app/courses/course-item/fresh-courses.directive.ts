import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[appFreshCourses]'
})
export class FreshCoursesDirective {
  @Input() creationDate: Date;

  freshDate: Date;


  constructor(element: ElementRef) { 

    this.freshDate = new Date();
    this.freshDate.setDate(new Date().getDate() - 14);
     if (this.creationDate<= new Date()) {
      element.nativeElement.style.borderStyle="dashed";
      element.nativeElement.style.borderColor="green";

    }
    


  else if (this.creationDate>this.freshDate)  {
    element.nativeElement.style.borderStyle="dashed";
    element.nativeElement.style.borderColor="blue";

  }
  }
}
