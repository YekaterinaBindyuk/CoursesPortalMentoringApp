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

  loadMoreMessage = "load more";
  noDataMessage = "NO DATA. Please feel free to add a new course.";
  courseList;
  loadMoreLog: string;
  constructor() {this.courseList = [];}

  ngOnInit() {
    this.courseList = [
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
  }

  changeCoursesHandler(course: Course){
    console.log('course video has been deleted. Id: ' + course.id);
  }


  loadMore(){
    this.loadMoreLog='load more method has been called'
    console.log(this.loadMoreLog);
  }


}
