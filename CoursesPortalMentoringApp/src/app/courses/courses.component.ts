import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input()
  courseItem: Course;


  public courseList;

  constructor() {this.courseList = [];}

  ngOnInit() {
    this.courseList = [
      {
        id: '149741464',
        title: 'Transform shapes, icons, and text. Intro',
        creation: new Date(),
        duration: 1,
        description: 'This weekly series demonstrates techniques for animation skills improvement. It consists of 3 lessons.'
      },
      {
        id: '149fsfs1464',
        title: 'CSS. Intro',
        creation: new Date(),
        duration: 2,
        description: 'This weekly series demonstrates techniques for animation skills improvement. It consists of 3 lessons.'
      },
      {
        id: 'dgdg41464',
        title: 'Angular 2+',
        creation: new Date(),
        duration: 1,
        description: 'This weekly series demonstrates techniques for animation skills improvement. It consists of 3 lessons.'
      },
      {
        id: 'jdsasfs1464',
        title: 'HTML. Andvanced',
        creation: new Date(),
        duration: 4,
        description: 'This weekly series demonstrates techniques for animation skills improvement. It consists of 3 lessons.'
      }
  
    ]
  }

  changeCoursesHandler(course: Course){
    console.log('course video has been deleted. Id: ' + course.id);
  }

  loadMore(){
    console.log('load more method has been called');
  }
}
