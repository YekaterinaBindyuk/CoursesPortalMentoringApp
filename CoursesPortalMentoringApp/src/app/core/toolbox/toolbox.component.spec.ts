import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxComponent } from './toolbox.component';
import { FormsModule } from '@angular/forms';

describe('ToolboxComponent', () => {
  let component: ToolboxComponent;
  let fixture: ComponentFixture<ToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolboxComponent],
      imports: [FormsModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing correct buttons rendering

  it(`should have as searchCourse 'search'`, async(() => {
    fixture = TestBed.createComponent(ToolboxComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.searchCourse).toEqual('search');
  }));

  it(`should have as addCourse 'add course'`, async(() => {
    fixture = TestBed.createComponent(ToolboxComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.addCourse).toEqual('add course');
  }));
});
