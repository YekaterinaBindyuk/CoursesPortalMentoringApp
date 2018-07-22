import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../course';

@Pipe({
  name: 'filterByTitle'
})
export class FilterByTitlePipe implements PipeTransform {

  transform(courses: Array<Course>, title: string): Array<Course> {

    return courses.filter(course => course.title==title);
  }

}
