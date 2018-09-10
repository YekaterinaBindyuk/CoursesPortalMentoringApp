import { Course } from '../../entities/course';
import { State } from '../reducers';
import { CustomAction } from './custom-action';

export enum CourseActionTypes {
  GetCourseById = '[Courses] Get Course By ID',
  SetCourse = '[Courses] Set Course',
  GetCourseList = '[Courses] Get Course List',
  SetCourseList = '[Courses] Set Course List',
  CreateCourse = '[Courses] Create Course',
  UpdateCourse = '[Courses] Update Course',
  DeleteCourse = '[Courses] Delete Course',
  SearchCourses = '[Courses] Search Course'
}

export class GetCourseList implements CustomAction {
  readonly type = CourseActionTypes.GetCourseList;
  constructor(public payload: {start: string, count: string}) { }
}

export class CreateCourse implements CustomAction {
  readonly type = CourseActionTypes.CreateCourse;
  constructor(public payload: Course) { }
}

export class UpdateCourse implements CustomAction {
  readonly type = CourseActionTypes.UpdateCourse;
  constructor(public payload: Course) { }
}

export class DeleteCourse implements CustomAction {
  readonly type = CourseActionTypes.DeleteCourse;
  constructor(public payload: Course) { }
}

export class SetCourseList implements CustomAction {
  readonly type = CourseActionTypes.SetCourseList;
  constructor(public payload: Course[]) { }
}

export class GetCourseById implements CustomAction {
  readonly type = CourseActionTypes.GetCourseById;
  constructor(public payload: number) { }
}

export class SearchCourses implements CustomAction {
  readonly type = CourseActionTypes.GetCourseById;
  constructor(public payload: string) { }
}

export class SetCourse implements CustomAction {
  readonly type = CourseActionTypes.SetCourse;
  constructor(public payload: Course) { }
}


export type CourseActions = | GetCourseById | SetCourse |
GetCourseList | SetCourseList | CreateCourse | UpdateCourse | GetCourseById | SearchCourses;
