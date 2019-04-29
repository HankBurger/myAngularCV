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

  }

  ngOnInit() {
    this.getUser();
    this.setItems();
  }

  getUser(): void {
    this.userService.getUser().subscribe(user => this.user = user);
  }

  setItems(): void {
    this.item = [];

    for (const card of this.user.cards) {
      this.item.push(card.title);
    }
  }
}
