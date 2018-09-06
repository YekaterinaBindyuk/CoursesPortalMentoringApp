import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromCourse from './course.reducer';

export interface State {

  course: fromCourse.State;
}

export const reducers: ActionReducerMap<State> = {

  course: fromCourse.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
