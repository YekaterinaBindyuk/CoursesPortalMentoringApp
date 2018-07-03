import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from './course-item/course-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoursesComponent, CourseItemComponent]
})
export class CoursesModule { }
