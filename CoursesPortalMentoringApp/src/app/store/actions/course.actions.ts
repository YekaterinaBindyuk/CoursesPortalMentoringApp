import { Action } from '@ngrx/store';

export enum CourseActionTypes {
  GetCourse = '[Course] Get Course',
  SetCourse = '[Course] Set Course'
}

export class GetCourse implements Action {
  readonly type = CourseActionTypes.GetCourse;
}

export class SetCourse implements Action {
  readonly type = CourseActionTypes.SetCourse;

  constructor(public payload: string) { }
}

export type AuthActions = GetCourse | SetCourse;