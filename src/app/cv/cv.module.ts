import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BlockComponent, MyCardComponent, TimeLineComponent } from './block';
import { CvComponent } from './cv.component';

import { UserServiceService } from '../service/user-service.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    JumbotronComponent,
    NavbarComponent,
    MyCardComponent,
    TimeLineComponent,
    BlockComponent,
    CvComponent
  ],
  exports: [
    CvComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [UserServiceService]
})
export class CvModule {
}
