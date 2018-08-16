import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { DurationPipe } from './duration.pipe';
import { By } from '@angular/platform-browser';
import { Course } from '../../entities/course';
import { FreshCoursesDirective } from './fresh-courses.directive';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;


  let course: Course;

  // DOM testing configuration
  let expectedValue: string;
  let actualValue: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, FreshCoursesDirective, DurationPipe]
    });
  }));

  beforeEach(() => {

    // standalone testing configuration
    course = new Course();
    course.title = 'Test course';
    course.topRated = false;

    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;

    component.courseitem = course;


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing correct buttons rendering
  it(`should have as edit 'edit'`, async(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.edit).toEqual('edit');
  }));

  it(`should have as delete 'delete'`, async(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.delete).toEqual('delete');
  }));

  // standalone testing
  it('should delete course', () => {
    const deleteButton = fixture.debugElement.query(By.css('.delete-button'));
    let deletedCourse: Course;
    component.changecourseshandler.subscribe((actualCourse: Course) => deletedCourse = actualCourse);
    deleteButton.triggerEventHandler('click', null);
    expect(deletedCourse).toBe(course);
  });

  // DOM testing of courseitem attribute rendering with pipe

  it(`should render title correctly`, async(() => {
    fixture.detectChanges();

    const nativeElement: HTMLElement = fixture.nativeElement;
    const div: HTMLElement = nativeElement.querySelector('.course-parameters');
    expectedValue = course.title.toUpperCase();
    actualValue = div.textContent.trim();
    expect(actualValue).toBe(expectedValue);
  }));
});

