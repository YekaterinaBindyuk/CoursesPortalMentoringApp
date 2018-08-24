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
  private courseitem: Course;
  @Output()
  private deleteCourseHandler: EventEmitter<Course> = new EventEmitter<Course>();
  @Output()
  private editCourseHandler: EventEmitter<Course> = new EventEmitter<Course>();
  private edit = 'edit';
  private delete = 'delete';

  constructor() { }

  ngOnInit() {
  }

  public deleteCourse(): void {
    if (confirm('Delete this course?')) {
      this.deleteCourseHandler.emit(this.courseitem);
    }
  }

  public editCourse(): void {
      this.editCourseHandler.emit(this.courseitem);
  }
}
