import { Component, OnInit, OnChanges } from '@angular/core';
import { Output } from '@angular/core';
import { Course } from '../../entities/course';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-course-creation-date',
  templateUrl: './course-creation-date.component.html',
  styleUrls: ['./course-creation-date.component.css']
})
export class CourseCreationDateComponent implements OnInit, OnChanges {

  @Output()
  changeDateHandler: EventEmitter<Date> = new EventEmitter<Date>();
  @Input()
  date: Date;

  constructor() { }

  ngOnInit() {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.changeDateHandler.emit(this.date);
  }
}
