import { Injectable } from '@angular/core';

// @Injectable({
// providedIn: 'root'
// })
@Injectable()

export class UserServiceService {

  constructor() { }

  getItems() { return ['action1', 'action2', 'action3']; }
}
