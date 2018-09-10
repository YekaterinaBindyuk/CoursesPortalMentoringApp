import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { Course } from '../../entities/course';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef } from '@angular/core';

export const CREATION_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CourseCreationDateComponent),
  multi: true,
};

@Component({
  selector: 'app-course-creation-date',
  templateUrl: './course-creation-date.component.html',
  styleUrls: ['./course-creation-date.component.css'],
  providers: [CREATION_VALUE_ACCESSOR]

})
export class CourseCreationDateComponent implements OnInit, ControlValueAccessor {

  @Input()
  private date: Date;
  private onChange = (_) => { };
  private onTouched = (_) => { };

  constructor() { }

  public writeValue(value: any): void {
    if (value !== undefined) {
      this.date = value;
    }
  }
  change($event) {
    this.onChange($event.target.value);
    this.onTouched($event.target.value);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
  }

  public ngOnInit() {
  }

}
