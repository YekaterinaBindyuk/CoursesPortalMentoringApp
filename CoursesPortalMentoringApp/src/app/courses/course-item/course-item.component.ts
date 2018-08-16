import { Component, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../entities/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CourseItemComponent implements OnInit {

  @Input()
  courseitem: Course;
  @Output()
  changecourseshandler: EventEmitter<Course> = new EventEmitter<Course>();

  edit = 'edit';
  delete = 'delete';

  constructor() { }

  ngOnInit() {
  }

  deleteCourse(): void {
    if (confirm('Delete this course?')) {
      this.changecourseshandler.emit(this.courseitem);
    }
  }
}
