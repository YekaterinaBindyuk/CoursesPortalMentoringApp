import { Component, OnInit, OnChanges } from '@angular/core';
import { CourseService } from '../../courses/course.service';
import { Input } from '@angular/core';
import { Course } from '../../entities/course';
import { DoCheck } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit, DoCheck  {

  private course: Course = new Course();

  constructor(private courseService: CourseService) { }

  public ngDoCheck(): void {
    this.course = this.courseService.getSelectedCourse();
  }
  public ngOnInit(): void {
  }

 }
