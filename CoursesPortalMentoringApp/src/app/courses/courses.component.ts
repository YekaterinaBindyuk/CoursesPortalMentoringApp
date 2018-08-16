import { Component, OnInit, Output, DoCheck } from '@angular/core';
import { Input } from '@angular/core';
import { FilterByTitlePipe } from './filter-by-title.pipe';
import { CourseService } from './course.service';
import { Course } from '../entities/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, DoCheck {

  @Input()
  courseItem: Course;

  courseList: Array<Course>;
  loadMoreMessage = 'load more';
  noDataMessage = 'NO DATA. Please feel free to add a new course.';
  loadMoreLog: string;

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.courseList = this.courseService.getCourses();
  }

  ngDoCheck(): void {
  }

  // delete course
  changeCoursesHandler(course: Course) {
    console.log('course video has been deleted. Id: ' + course.id);
    this.courseService.removeCourse(course.id);
  }

  loadMore() {
    this.loadMoreLog = 'load more method has been called';
    console.log(this.loadMoreLog);
  }




}
