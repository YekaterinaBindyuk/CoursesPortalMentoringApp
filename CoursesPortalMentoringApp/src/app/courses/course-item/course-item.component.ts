import { Component, OnInit, Output } from '@angular/core';
import { Course } from '../../course';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input()
  courseitem: Course;
  @Output()
  changecourseshandler: EventEmitter<Course> = new EventEmitter<Course>();

  edit="edit";
  delete ="delete";

  constructor() { }

  ngOnInit() {
  }

  deleteCourse(): void{
    this.changecourseshandler.emit(this.courseitem);
  }

}
