import { Injectable } from '@angular/core';
import { User, ModelType } from '../module';

// @Injectable({
// providedIn: 'root'
// })
@Injectable()

export class UserServiceService {

  constructor() { }

  user: User = {
    name: 'name',
    career: 'career',
    description: 'description',
    photo: './assets/icon.jpeg',
    cards:
      [
        {
          model: ModelType.timeline,
          title: 'skill',
          content: 'Hello world'
        }
      ]
  };

  rItems() {
    const item: string[] = ['action1', 'action2'];

    for (const card of this.user.cards) {
      item.push(card.title);
    }

    return item;
  }
}
