import { Injectable } from '@angular/core';
import { Course } from '../course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseList = [
    {
      id: '149741464',
      title: 'Transform shapes, icons, and text. Intro',
      creation: new Date(),
      duration: 35,
      description: 'This weekly series demonstrates techniques for animation skills improvement. It consists of 3 lessons.',
      topRated: true
    },
    {
      id: '149fsfs1464',
      title: 'CSS. Intro',
      creation: new Date(),
      duration: 75,
      description: 'This weekly series demonstrates techniques for animation skills improvement. It consists of 3 lessons.',
      topRated: false

    },
    {
      id: 'dgdg41464',
      title: 'Angular 2+',
      creation: new Date(),
      duration: 130,
      description: 'This weekly series demonstrates techniques for animation skills improvement. It consists of 3 lessons.',
      topRated: false

    },
    {
      id: 'jdsasfs1464',
      title: 'HTML. Andvanced',
      creation: new Date(),
      duration: 45,
      description: 'This weekly series demonstrates techniques for animation skills improvement. It consists of 3 lessons.',
      topRated: true

    }
  ]

  filteredCourses = this.courseList;
 
  constructor() { }


  setCourses(courses: Array<Course>){
    this.courseList = courses;
  }

  getCourses(){
    return this.courseList;
  }

  setFilteredCourses(courses: Array<Course>){
    this.filteredCourses = courses;
  }

  getFilteredCourses(){
    return this.filteredCourses;
  }

  



  createCourse(){
      //const newCourse: Course = {id, title, creation, duration, description, topRated};
      //this.courseList.push(newCourse);
  }

  updateCourse(){
  }

  removeCourse(id: string): void{
    for(course in this.courseList){
      var course;
      if(course.id===id) {
      this.courseList.slice(course);
      }
    }  }

  getCourseByID(id: string){
    for(course in this.courseList){
      var course;
      if(course.id===id) {
        return course;
      }
    }
  }
  


}
