import { BehaviorSubject } from "rxjs";

export interface Action {
  type: string;
  payload?: any;
}

export class Dispatcher extends BehaviorSubject<Action> {
  static INIT = '@ngrx/store/init';

  constructor() {
    super({ type: Dispatcher.INIT });
  }

  dispatch(action: Action): void {
    this.next(action);
  }

  complete() {
    // actions go here
  }
}