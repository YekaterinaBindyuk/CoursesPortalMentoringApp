import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SortPipe } from './sort.pipe';
import { CourseService } from './course.service';

describe('CoursesComponent', () => {
  let sut: CoursesComponent;
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesComponent, SortPipe],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Testing as a class approach config
    sut = new CoursesComponent(new CourseService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing correct buttons rendering

  it(`should have as loadMoreMessage 'load more'`, async(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.loadMoreMessage).toEqual('load more');
  }));

  it(`should have as noDataMessage 'NO DATA. Please feel free to add a new course.'`, async(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.noDataMessage).toEqual('NO DATA. Please feel free to add a new course.');
  }));

  // testing as a class approach
  it('should log load more method has been called whenever load more is pressed', () => {
    sut.loadMore();
    expect(sut.loadMoreLog).toBe('load more method has been called');
  });
});
