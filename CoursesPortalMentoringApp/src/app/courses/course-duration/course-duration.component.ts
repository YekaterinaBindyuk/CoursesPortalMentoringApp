import { Component, OnInit, OnChanges } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Course } from '../../entities/course';
import { EventEmitter } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef } from '@angular/core';

export const DURATION_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CourseDurationComponent),
  multi: true,
};

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.css'],
  providers: [DURATION_VALUE_ACCESSOR]
})
export class CourseDurationComponent implements OnInit, ControlValueAccessor {

  @Input()
  private duration: number;
  private onChange = (_) => {};
  private onTouched = (_) => {};

  constructor() { }

  public writeValue(value: any): void {
    if (value !== undefined) {
      this.duration = value;
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
