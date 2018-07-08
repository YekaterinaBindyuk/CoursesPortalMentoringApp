import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FakeLogoComponent } from './fake-logo/fake-logo.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent, FakeLogoComponent, ToolboxComponent],
  exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent, ToolboxComponent]

})
export class CoreModule { }
