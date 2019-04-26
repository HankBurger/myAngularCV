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
          content: [
            { title: 'Program', colSize: 4, content: 'Golang\r\nPython\r\nC#' },
            { title: 'Front-End', colSize: 4, content: 'Vue\r\nBluma' },
            { title: 'Tools', colSize: 4, content: 'Kubernetes\r\nDocker/Docker-compose\r\nGit' }
          ]
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
        }, {
          model: ModelType.card,
          title: 'Summary',
          content: [
            // tslint:disable-next-line: max-line-length
            { content: 'Pioneered Talent Marketing efforts to help StackCommerce receive employer awards from LA Business Journal, Built In LA and Comparably: 2017 Best Places to Work in Los Angeles, Best Midsize Place to Work 2017 & 2018, and Best Company 2017 & 2018.\r\nImplemented and held administrator roles for TriNet, BambooHR, HireRight, Slack, Small Improvements and Greenhouse, and Google Apps/Gmail.\r\nImplemented and managed all HR duties: onboarding, offboarding, training, raises, promotions, pulse surveys, annual reviews and 360 reviews, 1:1s, career development sessions, performance improvement process, job leveling, company hierarchy, organizational planning, benefit and perks assessment, policy implementation, personnel management, employee advocacy, compliance and sensitive HR matters.\r\nCreated and managed all recruiting duties. Sent weekly hiring report and quarterly HR reports to C-Level executives (growth, retention, turnover, tenure, time off, full-time headcount, global headcount).\r\nCurated company video, managed company pages for AngelList, The Muse, Built in LA, LinkedIn, Hired, Facebook, Instagram and Twitter, and attended networking events and career fairs.' }
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
