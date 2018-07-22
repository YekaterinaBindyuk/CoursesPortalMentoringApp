import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from './course-item/duration.pipe';
import { SortPipe } from './sort.pipe';
import { FreshCoursesDirective } from './fresh-courses.directive';
import { FilterByTitlePipe } from './filter-by-title.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CoursesComponent,
    CourseItemComponent
  ],
  declarations: [CoursesComponent, CourseItemComponent, DurationPipe, FreshCoursesDirective, SortPipe, FilterByTitlePipe]
})
export class CoursesModule { }
