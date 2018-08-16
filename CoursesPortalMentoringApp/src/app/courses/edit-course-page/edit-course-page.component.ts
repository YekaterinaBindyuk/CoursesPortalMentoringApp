import { Component, OnInit } from '@angular/core';
import { Course } from '../../entities/course';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.css']
})
export class EditCoursePageComponent implements OnInit {

  @Input()
  course: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService, private router: Router) { }

  ngOnInit() {
    this.getCourse();
  }

  getCourse(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.course = this.courseService.getCourseByID(id);
    if (this.course === undefined) {
      this.router.navigate(['/404']);

    }
  }

  save(): void {
    this.courseService.updateCourse(this.course);
    this.router.navigate(['/courses']);
  }

  cancel(): void {
    this.router.navigate(['/courses']);
  }

  onChangeDateHandler(date: Date) {
    this.course.creation = date;
  }

  onChangeDurationHandler(duration: number) {
    this.course.duration = duration;
  }
}
