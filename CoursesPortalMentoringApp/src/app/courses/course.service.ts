import { Injectable } from '@angular/core';
import { Course } from '../entities/course';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as fromRoot from '.././store/reducers';
import * as courseActions from '.././store/actions/course.actions';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private coursesUrl = 'http://localhost:3004/courses';
  private selectedCourse = new Course();
  private courseList: Array<Course> = [];

  constructor(private http: HttpClient, private store: Store<fromRoot.State>) { }

  public getCourses(start: string, count: string): Observable<Course[]> {
    // Dispatch a redux store
    this.store.dispatch(new courseActions.GetCourseList({start: start, count: count}));
    return this.store.select((state) => state.course.courseList);
  }

  public createCourse(course: Course): Observable<Course[]> {
    this.store.dispatch(new courseActions.CreateCourse(course));
    return this.store.select((state) => state.course.courseList);
  }

  public updateCourse(course: Course): Observable<Course[]> {
    this.store.dispatch(new courseActions.UpdateCourse(course));
    return this.store.select((state) => state.course.courseList);
  }

  public removeCourse(course: Course): Observable<any> {
    this.store.dispatch(new courseActions.DeleteCourse(course));
    return this.store.select((state) => state.course.courseList);
  }

  public getCourseByID(id: number): Observable<Course> {
    this.store.dispatch(new courseActions.GetCourseById(id));
    return this.store.select((state) => state.course.course);
  }

  public searchCourses(textFragment: string): Observable<Course[]> {
    this.store.dispatch(new courseActions.SearchCourses(textFragment));
    return this.http.get<Course[]>(this.coursesUrl, { params: { textFragment } });
  }
  public getSelectedCourse(): Course {
    return this.selectedCourse;
  }

  public setSelectedCourse(course: Course) {
    this.selectedCourse = course;
  }
}
