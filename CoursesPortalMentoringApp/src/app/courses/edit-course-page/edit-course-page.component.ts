import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../../entities/course';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.css']
})
export class EditCoursePageComponent implements OnInit, OnDestroy {

  @Input()
  private course: Course = new Course();
  private getCourseSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService, private router: Router) { }

  public ngOnInit() {
    this.getCourse();
  }

  public getCourse(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getCourseSubscription = this.courseService.getCourseByID(id).subscribe(course => {this.course = course;     this.courseService.setSelectedCourse(this.course);}
  );
    if (this.course === undefined) {
      this.router.navigate(['/404']);
    }
  }

  public save(): void {
    this.courseService.updateCourse(this.course).subscribe(() => console.log('the course has been update. Id: ' + this.course.id));
    this.router.navigate(['/courses']);
  }

  public cancel(): void {
    this.router.navigate(['/courses']);
  }

  public onChangeDateHandler(date: Date) {
    this.course.creation = date;
  }

  public onChangeDurationHandler(duration: number) {
    this.course.duration = duration;
  }

  public ngOnDestroy() {
    this.getCourseSubscription.unsubscribe();
    this.courseService.setSelectedCourse(new Course());
  }
}
