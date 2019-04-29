import { Injectable } from '@angular/core';
import { User, ModelType } from '../module';
import { user } from '../data/userdata';
import { Observable, of } from 'rxjs';

// @Injectable({
// providedIn: 'root'
// })
@Injectable()

export class UserServiceService {

  constructor() { }

  getUser(): Observable<User> {
    return of(user);
  }

}
