import { Component } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { CourseItemComponent } from './course-item.component';
import { By } from '@angular/platform-browser';
import { Course } from 'src/app/entities/course';

@Component({
  template: `
    <app-course-item
      [course]='course' (click)='deleteCourse($event)'>
    </app-course-item>`
})

class TestHostComponent {

  public course: Course = {
    id: 2,
    title: 'Test. Intro',
    creation: new Date(),
    duration: 45,
    description: 'This weekly series demonstrates techniques for animation skills improvement. It consists of 3 lessons.',
    topRated: false
  };

  public deletedCourse: Course;

  public deleteCourse(deletedCourse: Course) { this.deletedCourse = deletedCourse; }
}

describe('CourseItemComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, TestHostComponent]
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(TestHostComponent);
      testHost = fixture.componentInstance;
    });

    it('should delete course', () => {
      fixture.detectChanges();

      const expectedDeletedCourse = {
        id: 2,
        title: 'Test. Intro',
        creation: new Date(),
        duration: 45,
        description: 'This weekly series demonstrates techniques for animation skills improvement. It consists of 3 lessons.',
        topRated: false
      };

      const deleteButton = fixture.debugElement.query(By.css('.delete-button'));
      deleteButton.triggerEventHandler('click', null);

      expect(testHost.deletedCourse).toEqual(expectedDeletedCourse);
    });
  });
});
