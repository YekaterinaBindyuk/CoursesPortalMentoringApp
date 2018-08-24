import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFreshCourses]'
})
export class FreshCoursesDirective implements AfterViewInit {
  @Input()
  private creationDate: Date;
  private freshDate: Date;

  constructor(private element: ElementRef) {
  }

  public ngAfterViewInit(): void {
    this.freshDate = new Date();
    this.freshDate.setDate(new Date().getDate() - 14);
    if (this.creationDate <= new Date() && this.creationDate >= this.freshDate) {
      this.element.nativeElement.style.border = '5px solid green';
    } else if (this.creationDate > new Date()) {
      this.element.nativeElement.style.border = '5px solid blue';
    }
  }
}
