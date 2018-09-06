import { Injectable } from '@angular/core';
import { Course } from '../entities/course';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private coursesUrl = 'http://localhost:3004/courses';
  private selectedCourse = new Course();
  private courseList: Array<Course> = [];

  constructor(private http: HttpClient) { }

  public getCourses(start: string, count : string): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl, {params: {count, start}});
  }

  public createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.coursesUrl, course);
  }

  public updateCourse(course: Course): Observable<Course> {
    const url = this.coursesUrl + '/' + course.id;
    return this.http.put<Course>(url, course);
  }

  public removeCourse(id: number): Observable<any> {
    return this.http.delete(this.coursesUrl + '/' + id);
  }

  public getCourseByID(id: number): Observable<Course> {
    const url = this.coursesUrl + '/' + id;
    return this.http.get<Course>(url);
  }

  public searchCourses(textFragment: string): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl, {params: {textFragment}});
  }

  public getSelectedCourse(): Course {
    return this.selectedCourse;
  }

  public setSelectedCourse(course: Course){
    this.selectedCourse = course;
  }
}
