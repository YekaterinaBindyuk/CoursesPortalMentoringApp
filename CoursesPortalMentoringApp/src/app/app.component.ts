import { Component } from '@angular/core';
import { LoaderService } from './core/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loaderService: LoaderService){
  }
  private title = 'coursesApp';
  public loading: boolean;

  public ngOnInit() {
    this.loaderService.subscribe(loading => {
      setTimeout(() => {
        this.loading = loading;
      });
    });
  }
}
