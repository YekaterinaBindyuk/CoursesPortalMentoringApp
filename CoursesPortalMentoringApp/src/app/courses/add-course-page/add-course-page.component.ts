import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { Course } from '../../entities/course';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { isIntegerValidator } from '../integer-validator';
import { isDateValidator } from '../date-validator';
//import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit, OnDestroy {

  private course: Course;
  private subscription: Subscription;
  private generatedId = 2000;
  private addCourseForm: FormGroup;

  constructor(private router: Router, private courseService: CourseService) { }

  public ngOnInit() {
    this.course = new Course();
    this.addCourseForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      duration: new FormControl('', [Validators.required, isIntegerValidator]),
      date: new FormControl('', [Validators.required, isDateValidator])
    });
  }
  get controls() { return this.addCourseForm.controls; }

  public save() {
    this.generatedId++;
    this.course.id = this.generatedId;
    this.course.title = this.addCourseForm.value.title;
    this.course.duration = this.addCourseForm.value.duration;
    this.course.description = this.addCourseForm.value.description;
    this.course.creation = this.addCourseForm.value.date;
    this.subscription = this.courseService.createCourse(this.course).subscribe(() => {this.router.navigate(['/courses']);}
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
