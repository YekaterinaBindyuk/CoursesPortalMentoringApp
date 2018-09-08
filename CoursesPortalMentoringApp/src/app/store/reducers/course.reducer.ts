import { Action } from '@ngrx/store';
import { Course } from '../../entities/course';
import * as courseActions from '../actions/course.actions';
import { CustomAction } from '../actions/custom-action';

export interface State {
  courseList?: Course[],
  course: Course
}

export const initialState: State = {
  courseList: [],
  course: null

};

export function reducer(state = initialState, action: CustomAction): State {
  switch (action.type) {
    case courseActions.CourseActionTypes.CreateCourse:
      return state;
    case courseActions.CourseActionTypes.UpdateCourse:
      return state;
    case courseActions.CourseActionTypes.DeleteCourse:
      return state;
    case courseActions.CourseActionTypes.GetCourseList:
      return state;
    case courseActions.CourseActionTypes.SearchCourses:
      return state;
    case courseActions.CourseActionTypes.GetCourseById:
      return state;
    case courseActions.CourseActionTypes.SetCourse:
      return handleCourse(state, action);
    case courseActions.CourseActionTypes.SetCourseList:
      return handleCourseList(state, action);
    default:
      return state;
  }

  function handleCourseList(state: State, action: CustomAction): State {
    state.courseList = action.payload;
    return state;
  }

  function handleCourse(state: State, action: CustomAction): State {
    state.course = action.payload;
    return state;
  }

}
