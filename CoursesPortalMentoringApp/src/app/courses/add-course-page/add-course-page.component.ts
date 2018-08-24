import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { Course } from '../../entities/course';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit, OnDestroy {

  private course: Course;
  private subscription: Subscription;
  private generatedId = 0;
  constructor(private router: Router, private courseService: CourseService) { }

  public ngOnInit() {
    this.course = new Course();
  }

  public save() {
    this.generatedId++;
    this.course.id = this.generatedId;
    this.subscription = this.courseService.createCourse(this.course).subscribe(() => {console.log('the course has been created. Id: ' + this.course.id);     this.router.navigate(['/courses']);}
  );
  }

  public cancel() {
    this.router.navigate(['/courses']);
  }

  public onChangeDateHandler(date: Date) {
    this.course.creation = date;
  }

  public onChangeDurationHandler(duration: number) {
    this.course.duration = duration;
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
       this.subscription.unsubscribe();
    }
  }
}
