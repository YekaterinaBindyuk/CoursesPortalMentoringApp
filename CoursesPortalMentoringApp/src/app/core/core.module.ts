import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FakeLogoComponent } from './fake-logo/fake-logo.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AppRoutingModule } from '../routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingBlockComponent } from './loading-block/loading-block.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule, 
    AppRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent, FakeLogoComponent, ToolboxComponent, LoginPageComponent, BreadcrumbsComponent, LoadingBlockComponent],
  exports: [HeaderComponent, FooterComponent, ToolboxComponent, BreadcrumbsComponent]

})
export class CoreModule { }
