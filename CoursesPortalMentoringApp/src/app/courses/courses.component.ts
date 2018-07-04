import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courseList: Course[] =[
    {
      id: '149741464',
      title: 'Video 1',
      creation: new Date('01.01.01'),
      duration: 1,
      description: 'The shortest decription ever'
    },
    {
      id: '149fsfs1464',
      title: 'Video 2',
      creation: new Date('02.02.02'),
      duration: 2,
      description: 'The longest decription ever'
    },
    {
      id: 'dgdg41464',
      title: 'Video 3',
      creation: new Date('03.01.03'),
      duration: 1,
      description: 'The shortest decription ever'
    },
    {
      id: 'jdsasfs1464',
      title: 'Video 4',
      creation: new Date('04.02.04'),
      duration: 4,
      description: 'The longest decription ever'
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
