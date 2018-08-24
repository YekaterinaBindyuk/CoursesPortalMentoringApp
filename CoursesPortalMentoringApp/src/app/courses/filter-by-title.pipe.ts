import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../entities/course';

@Pipe({
  name: 'filterByTitle'
})
export class FilterByTitlePipe implements PipeTransform {

  public transform(courses: Array<Course>, title: string): Array<Course> {
    if (!courses || !title) {
      return courses;
    }
    return courses.filter(course => course.title.toLowerCase().includes(title.toLowerCase()));
  }

}
