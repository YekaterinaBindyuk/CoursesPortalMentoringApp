import { Component, OnInit, Output, DoCheck, OnDestroy, AfterViewInit } from '@angular/core';
import { Input } from '@angular/core';
import { FilterByTitlePipe } from './filter-by-title.pipe';
import { CourseService } from './course.service';
import { Course } from '../entities/course';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {

  @Input()
  courseItem: Course;
  private subscription: Subscription;
  private courseList: Array<Course> = [];
  private loadMoreMessage = 'load more';
  private noDataMessage = 'NO DATA. Please feel free to add a new course.';
  private loadMoreLog: string;
  private countToLoad = 4;
  private startPosition = 0;

  
  constructor(private courseService: CourseService, private router: Router) {
  }

  ngOnInit() {
    this.getCourses(this.startPosition, this.countToLoad);
  }

  // delete course
  public deleteCourse(course: Course) {
    this.subscription = this.courseService.removeCourse(course.id).subscribe(() =>
      console.log('course video has been deleted. Id: ' + course.id));
    this.getCourses(this.startPosition, this.countToLoad);
  }

  // edit course
  public editCourse(course: Course) {
    this.router.navigate(['/courses/' + course.id]);
  }

  public loadMore() {
    this.startPosition = this.startPosition + this.countToLoad;
    this.getCourses(this.startPosition, this.countToLoad);
  }

  public getCourses(startPosition: number, countToLoad: number): void {
    let start: string = '' + startPosition;
    let count: string = '' + countToLoad;
    this.subscription = this.courseService.getCourses(start, count).subscribe(courses => this.courseList = courses);
  }

  public setCourses(courseList: Array<Course>): void {
    this.courseList = courseList;
  }

  public search(searchParameter) {
    this.subscription = this.courseService.searchCourses(searchParameter.trim()).subscribe((courses) => {
      this.courseList = courses;
    },
      (error: HttpErrorResponse) => console.log(error)
    );
  };

  ngOnDestroy(): void {
    this.startPosition = 0;
    this.subscription.unsubscribe();
  }


}
