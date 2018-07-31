import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { CoreModule } from './core/core.module';
import { FooterComponent } from './core/footer/footer.component';
import { AuthService } from './auth.service';
import { CourseService } from './courses/course.service';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [ 
    BrowserModule,
    CoursesModule,
    CoreModule,
    FormsModule
  ],
  providers: [AuthService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
