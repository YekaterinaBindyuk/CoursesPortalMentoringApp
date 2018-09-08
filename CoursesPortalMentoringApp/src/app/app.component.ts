import { Component } from '@angular/core';
import { LoaderService } from './core/loader.service';
import * as fromRoot from './store/reducers';
import { Store } from '@ngrx/store';
import * as courseActions from './store/actions/course.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loaderService: LoaderService, private store: Store<fromRoot.State>){
  }
  private title = 'coursesApp';
  public loading: boolean;

  public ngOnInit() {
    // Subscription to loading module 
    this.loaderService.subscribe(loading => {
      setTimeout(() => {
        this.loading = loading;
      });
    });
  }
}
