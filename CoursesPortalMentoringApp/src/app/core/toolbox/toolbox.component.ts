import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { CoursesComponent } from '../../courses/courses.component';
import { FilterByTitlePipe } from '../../courses/filter-by-title.pipe';
import { CourseService } from '../../courses/course.service';
import { Router } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Course } from '../../entities/course';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit, AfterViewInit {

  private addCourse = 'add course';
  private subscription: Subscription;

  constructor(private courseService: CourseService, private router: Router) {
  }

  public ngOnInit() {
  }

  public ngAfterViewInit(): void {
    console.log('Toolbox component view has been initialized');
  }
  public addNewCourse() {
    this.router.navigate(['/courses/new']);
  }
}
