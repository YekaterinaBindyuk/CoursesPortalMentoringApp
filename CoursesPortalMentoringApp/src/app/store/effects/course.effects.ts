import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as courseActions from '../../store/actions/course.actions';
import { Course } from '../../entities/course';
import { CustomAction } from '../actions/custom-action';

@Injectable()
export class AppEffects {
  private coursesUrl = 'http://localhost:3004/courses';


  constructor(private actions$: Actions, private http: HttpClient) { }

  @Effect()
  CreateCourse$: Observable<CustomAction> = this.actions$.pipe(
    ofType<CustomAction>(courseActions.CourseActionTypes.CreateCourse),
    switchMap((action) => {
      const course = action.payload;
      return this.http.post<Course>(this.coursesUrl, course)
        .pipe(
          map((courses) => {
            return new courseActions.GetCourseList({start: '0', count: '4'});
          })
        );
    })
  );

  @Effect()
  UpdateCourse$: Observable<CustomAction> = this.actions$.pipe(
    ofType<CustomAction>(courseActions.CourseActionTypes.UpdateCourse),
    switchMap((action) => {
      const course = action.payload;
      return this.http.put<Course>(this.coursesUrl + '/' + course.id, course)
        .pipe(
          map((courses) => {
            return new courseActions.GetCourseList({start: '0', count: '4'});
          })
        );
    })
  );

  @Effect()
  SearchCourses$: Observable<CustomAction> = this.actions$.pipe(
    ofType<CustomAction>(courseActions.CourseActionTypes.SearchCourses),
    switchMap((action) => {
      const textFragment = action.payload;
      return this.http.get<Course[]>(this.coursesUrl, { params: { textFragment } })
        .pipe(
          map((courses) => {
            return new courseActions.SetCourseList(courses);
          })
        );
    })
  );

  @Effect()
  DeleteCourse$: Observable<CustomAction> = this.actions$.pipe(
    ofType<CustomAction>(courseActions.CourseActionTypes.DeleteCourse),
    switchMap((action) => {
      const course = action.payload;
      return this.http.delete<Course>(this.coursesUrl + '/' + course.id)
        .pipe(
          map((courses) => {
            return new courseActions.GetCourseList({start: '0', count: '4'});
          })
        );
    })
  );
  @Effect()
  GetCourseList$: Observable<CustomAction> = this.actions$.pipe(
    ofType<CustomAction>(courseActions.CourseActionTypes.GetCourseList),
    switchMap((action) => {
      const count = action.payload.count;
      const start = action.payload.start;
      return this.http.get<Course[]>(this.coursesUrl, {params: {count, start}})
        .pipe(
          map((courses) => {
            return new courseActions.SetCourseList(courses);
          })
        );
    })
  );

  @Effect()
  GetCourseById$: Observable<CustomAction> = this.actions$.pipe(
    ofType<CustomAction>(courseActions.CourseActionTypes.GetCourseById),
    switchMap((action) => {
      const id = action.payload;
      return this.http.get<Course>(this.coursesUrl + '/' + id)
        .pipe(
          map((course) => {
            return new courseActions.SetCourse(course);
          })
        );
    })
  );
}
