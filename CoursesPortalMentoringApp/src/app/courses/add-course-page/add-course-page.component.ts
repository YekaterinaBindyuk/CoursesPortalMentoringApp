import { Component, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Course } from '../../entities/course';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {

  course: Course;

  constructor(private router: Router, private courseService: CourseService) { }

  ngOnInit() {
    this.course = new Course();
  }

  save() {
    this.courseService.createCourse(this.course);
  }

  cancel() {
    this.router.navigate(['/courses']);
  }

  onChangeDateHandler(date: Date) {
    this.course.creation = date;
  }

  onChangeDurationHandler(duration: number) {
    this.course.duration = duration;
  }
}
