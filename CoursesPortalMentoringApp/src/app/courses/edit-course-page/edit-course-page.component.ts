import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../../entities/course';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { isIntegerValidator } from '../integer-validator';
import { isDateValidator } from '../date-validator';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.css']
})
export class EditCoursePageComponent implements OnInit, OnDestroy {

  @Input()
  private course: Course = new Course();
  private getCourseSubscription: Subscription;

  private editCourseForm: FormGroup;


  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService, private router: Router) { }

  public ngOnInit() {
    this.getCourse();
    this.editCourseForm = new FormGroup({
      title: new FormControl(this.course.title, [Validators.required, Validators.maxLength(50)]),
      description: new FormControl(this.course.description, [Validators.required, Validators.maxLength(500)]),
      duration: new FormControl(this.course.duration, [Validators.required, isIntegerValidator]),
      date: new FormControl(this.course.creation, [Validators.required, isDateValidator])
    });

  }
  get controls() { return this.editCourseForm.controls; }


  public getCourse(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getCourseSubscription = this.courseService.getCourseByID(id).subscribe(course => {
    this.course = course;
      this.courseService.setSelectedCourse(this.course);
    }
    );
    if (this.course === undefined) {
      this.router.navigate(['/404']);
    }
  }

  public save(): void {
    this.course.title = this.editCourseForm.value.title;
    this.course.duration = this.editCourseForm.value.duration;
    this.course.description = this.editCourseForm.value.description;
    this.course.creation = this.editCourseForm.value.date;

    this.courseService.updateCourse(this.course).subscribe(() => console.log('the course has been update. Id: ' + this.course.id));
    this.router.navigate(['/courses']);
  }

  public cancel(): void {
    this.router.navigate(['/courses']);
  }

  public ngOnDestroy() {
    this.courseService.setSelectedCourse(new Course());
    this.getCourseSubscription.unsubscribe();
  }
}
