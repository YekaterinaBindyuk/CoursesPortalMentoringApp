import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from './course-item/duration.pipe';
import { SortPipe } from './sort.pipe';
import { FilterByTitlePipe } from './filter-by-title.pipe';
import { FreshCoursesDirective } from './course-item/fresh-courses.directive';
import { CourseService } from './course.service';
import { CourseCreationDateComponent } from './course-creation-date/course-creation-date.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { AddCoursePageComponent } from 'src/app/courses/add-course-page/add-course-page.component';
import { EditCoursePageComponent } from './edit-course-page/edit-course-page.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  exports: [
    CoursesComponent,
    CourseItemComponent
  ],
  providers: [CourseService],
  declarations: [CoursesComponent, AddCoursePageComponent, CourseItemComponent, DurationPipe,
    FreshCoursesDirective, SortPipe, FilterByTitlePipe, AddCoursePageComponent, CourseCreationDateComponent,
    CourseDurationComponent, EditCoursePageComponent]
})
export class CoursesModule { }
