import { Injectable } from '@angular/core';
import { Course } from '../entities/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courseList: Array<Course> = [
    {
      id: 1,
      title: 'Transform shapes, icons, and text. Intro',
      creation: new Date(),
      duration: 35,
      description: 'This weekly series demonstrates techniques for animation skills improvement. It consists of 3 lessons.',
      topRated: true
    },
    {
      id: 2,
      title: 'CSS. Intro',
      creation: new Date('12/11/2018'),
      duration: 75,
      description: 'This weekly series demonstrates techniques for animation skills improvement. It consists of 3 lessons.',
      topRated: false

    },
    {
      id: 3,
      title: 'Angular 2+',
      creation: new Date(),
      duration: 130,
      description: 'This weekly series demonstrates techniques for animation skills improvement. It consists of 3 lessons.',
      topRated: false

    },
    {
      id: 4,
      title: 'HTML. Andvanced',
      creation: new Date('01/01/2018'),
      duration: 45,
      description: 'This weekly series demonstrates techniques for animation skills improvement. It consists of 3 lessons.',
      topRated: true

    }
  ];

  filteredCourses = this.courseList;

  constructor() { }


  setCourses(courses: Array<Course>) {
    this.courseList = courses;
  }

  getCourses() {
    return this.courseList;
  }

  setFilteredCourses(courses: Array<Course>) {
    this.filteredCourses = courses;
  }

  getFilteredCourses() {
    return this.filteredCourses;
  }





  public createCourse(course: Course) {
  }

  public updateCourse(course: Course) {
  }

  public removeCourse(id: number): void {
    for (const course of this.courseList) {
      if (course.id === id) {
        this.courseList.slice(course.id);
      }
    }
  }

  public getCourseByID(id: number) {
    return this.courseList.find(course => course.id === id);
  }



}
