import { Component, OnInit, OnChanges } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Course } from '../../entities/course';
import { EventEmitter } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.css']
})
export class CourseDurationComponent implements OnInit, OnChanges {

  @Output()
  changeDurationHandler: EventEmitter<Number> = new EventEmitter<Number>();
  @Input()
  duration: Number;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changeDurationHandler.emit(this.duration);
  }


}
