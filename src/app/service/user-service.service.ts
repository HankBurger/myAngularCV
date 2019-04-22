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
          model: ModelType.card,
          title: 'skill',
          content: { key: 'Hello world' }
        }, {
          model: ModelType.timeline,
          title: 'timeline',
          content: [
            {
              title: 'New Web Design',
              subTitle: 'Now - 2014 April',
              // tslint:disable-next-line: max-line-length
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....'
            }, {
              title: '21 000 Job Seekers',
              subTitle: '2014 April - 2014 March',
              // tslint:disable-next-line: max-line-length
              content: 'Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...'
            }, {
              title: 'Awesome Employers',
              subTitle: '2014 March - 2013 April',
              // tslint:disable-next-line: max-line-length
              content: 'Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...'
            }
          ]
        }
      ]
  };

  rItems() {
    const item: string[] = [];

    for (const card of this.user.cards) {
      item.push(card.title);
    }

    return item;
  }
}
