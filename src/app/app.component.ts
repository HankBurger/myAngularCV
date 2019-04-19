import { Component } from '@angular/core';
import { User } from './module/user';

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
    photo: './assets/icon.jpeg'
  };
  items: string[] = ['action1', 'action2', 'action3'];
}
