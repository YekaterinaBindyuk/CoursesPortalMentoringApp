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

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CoursesComponent,
    CourseItemComponent
  ],
  providers: [CourseService],
  declarations: [CoursesComponent, CourseItemComponent, DurationPipe, FreshCoursesDirective, SortPipe, FilterByTitlePipe]
})
export class CoursesModule { }
