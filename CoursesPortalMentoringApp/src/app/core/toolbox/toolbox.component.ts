import { Component, OnInit, Input } from '@angular/core';
import { CoursesComponent } from '../../courses/courses.component';
import { FilterByTitlePipe } from '../../courses/filter-by-title.pipe';
import { CourseService } from '../../courses/course.service';
import { Course } from '../../course';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {

  @Input()
  courseSearchParameter: string;

  searchCourse = "search";
  addCourse = "add course";

  constructor(private courseService: CourseService) {
   }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log('Toolbox component view has been initialized');
  }
    
  search(){
    console.log('SUBMITTED CourseSearchParameter value is: ' + this.courseSearchParameter);
      //filtering courses by title
      
    const courses=new FilterByTitlePipe().transform(this.courseService.getCourses(), this.courseSearchParameter); 
    console.log(courses);
    this.courseService.setFilteredCourses(courses);
    console.log(this.courseService.getFilteredCourses());
  }

  addNewCourse(){
    this.courseService.createCourse();
  }
}
