import { Component, OnInit, Output, DoCheck, OnDestroy, AfterViewInit, OnChanges } from '@angular/core';
import { Input } from '@angular/core';
import { FilterByTitlePipe } from './filter-by-title.pipe';
import { CourseService } from './course.service';
import { Course } from '../entities/course';
import { Router } from '@angular/router';
import { Subscription, Observable, Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { SimpleChanges } from '@angular/core';
import { skipWhile } from 'rxjs/internal/operators/skipWhile';
import { filter } from 'rxjs/internal/operators/filter';
import { FormControl } from '@angular/forms';
import { LoaderService } from '../core/loader.service';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '.././store/reducers';
import * as courseActions from '.././store/actions/course.actions';


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
  private searchTerms = new Subject<string>();
  private courseList$: Observable<Course[]>;
  private searchControl: FormControl = new FormControl;
  public deactivate;

  constructor(private store: Store<fromRoot.State>, private courseService: CourseService, private router: Router, private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.getCourses(this.startPosition, this.countToLoad);
    this.courseList$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      filter(term => term.length > 3 || term.length == 0),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.courseService.searchCourses(term)),
    )
  }

  // delete course
  public deleteCourse(course: Course) {
    this.subscription = this.courseService.removeCourse(course).subscribe(() =>
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
    this.deactivate = this.loaderService.activateLoading();
    let start: string = '' + startPosition;
    let count: string = '' + countToLoad;
 
    this.subscription = this.courseService.getCourses(start, count).subscribe(courses => { this.courseList = courses; this.deactivate();}, (error) => {this.deactivate();});
  }



  // Push a search term into the observable stream.
  public search(searchParameter) {
    this.searchTerms.next(searchParameter.value);
    this.deactivate = this.loaderService.activateLoading();

    this.subscription = this.courseList$.subscribe((courses) => this.courseList = courses);
  }

  public ngOnDestroy(): void {
    this.startPosition = 0;
    //this.subscription.unsubscribe();
  }
}
