import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CarouselModule,
    FeatherIconModule,FormsModule
  ],

})
export class LoginModule { }
