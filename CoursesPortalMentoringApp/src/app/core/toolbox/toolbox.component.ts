import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {

  @Input()
  CourseSearchParameter: string;

  searchCourse = "search";
  addCourse = "add course";


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log('Toolbox component view has been initialized');
  }
    
  search(){
    console.log('SUBMITTED CourseSearchParameter value is: ' + this.CourseSearchParameter);
    
  }
}
