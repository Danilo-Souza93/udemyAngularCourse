import { UserList } from '../constants/users-list';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUserModule } from '../models/iuser-module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList = UserList;

  userSubject = new BehaviorSubject<Array<IUserModule>>(this.userList);

  setToInactive(user: IUserModule) {
    this.userSubject.subscribe(userArr => {
      userArr.find(x => x == user).active = false;
    });
  }

  setToActive(user: IUserModule) {
    this.userSubject.subscribe(userArr => {
      userArr.find(x => x == user).active = true;
    });
  }

  getUserList(): Observable<Array<IUserModule>> {
    return this.userSubject.asObservable();
  }

}
