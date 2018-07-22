import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../course';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  sortedArray: Array<Course>;

  transform(array: Array<Course>): Array<Course> {
    array.sort((a: Course, b: Course) => {
      if (a.creation < b.creation) {
        return -1;
      } else if (a.creation > b.creation) {
        return 1;
      } else {
        return 0;
      }
    });
    this.sortedArray=array;
    return this.sortedArray; 
   }

}
