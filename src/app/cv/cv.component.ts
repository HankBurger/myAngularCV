import { Component, OnInit } from '@angular/core';
import { User, ModelType } from '../module';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  user: User;
  item: string[];
  constructor(private userService: UserServiceService) {
    this.user = userService.user;
    this.item = userService.rItems();
  }

  ngOnInit() {
  }

}
