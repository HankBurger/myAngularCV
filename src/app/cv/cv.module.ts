import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserServiceService } from '../service/user-service.service';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BlockComponent, MyCardComponent, TimeLineComponent } from './block';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    JumbotronComponent,
    NavbarComponent,
    MyCardComponent,
    TimeLineComponent,
    BlockComponent
  ],
  exports: [
    JumbotronComponent,
    NavbarComponent,
    MyCardComponent,
    TimeLineComponent,
    BlockComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [UserServiceService]
})
export class CvModule {
}
