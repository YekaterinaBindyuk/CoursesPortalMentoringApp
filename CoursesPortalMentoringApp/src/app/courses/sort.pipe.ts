import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../entities/course';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  private sortedArray: Array<Course>;

  public transform(array: Array<Course>): Array<Course> {
    array.sort((a: Course, b: Course) => {
      if (a.creation < b.creation) {
        return -1;
      } else if (a.creation > b.creation) {
        return 1;
      } else {
        return 0;
      }
    });
    this.sortedArray = array;
    return this.sortedArray;
  }

}
