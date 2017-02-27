import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class UserService {

  constructor(private _http: Http) {  }

  getUsers() {
    return this._http.get('http://choniawko.com/api/users')
      .map(res => res.json())
      .map((res) => {
        const results: User[] = [];
        res.forEach((user) => {
          results.push(new User(user.id, user.name, user.username, user.age,
              user.address, user.company, user.avatar, user.website));
        });
        return results;
      });
  }

}
