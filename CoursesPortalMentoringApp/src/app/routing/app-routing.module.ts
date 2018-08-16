import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddCoursePageComponent } from '../courses/add-course-page/add-course-page.component';
import { CoursesComponent } from '../courses/courses.component';
import { LoginPageComponent } from '../core/login-page/login-page.component';
import { CourseItemComponent } from '../courses/course-item/course-item.component';
import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';
import { EditCoursePageComponent } from '../courses/edit-course-page/edit-course-page.component';
import { AuthGuard } from '../core/auth/auth.guard';


const routes: Routes = [
  {
    path: 'courses/new', component: AddCoursePageComponent, canActivate: [AuthGuard]
  },
  {
    path: 'courses/:id', component: EditCoursePageComponent, canActivate: [AuthGuard]
  },
  {
    path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: '', redirectTo: '/courses', pathMatch: 'full'
  },
  {
    path: 'page404', component: PageNotFoundComponent
  },
  {
    path: '**', redirectTo: '/page404'
  },

];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
  ],
})


export class AppRoutingModule { }
