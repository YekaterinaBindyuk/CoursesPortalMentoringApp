import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FakeLogoComponent } from './fake-logo/fake-logo.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthService } from '../auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [AuthService],
  declarations: [HeaderComponent, FooterComponent, FakeLogoComponent, ToolboxComponent, LoginPageComponent],
  exports: [HeaderComponent, FooterComponent, ToolboxComponent]

})
export class CoreModule { }
