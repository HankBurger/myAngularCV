import { Component } from '@angular/core';
import { User, ModelType } from './module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv';
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
