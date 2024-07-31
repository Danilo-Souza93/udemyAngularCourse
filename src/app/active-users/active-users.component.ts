import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserModule } from '../models/iuser-module';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: Array<IUserModule>;
  @Output() userSetToInactive = new EventEmitter<IUserModule>();

  onSetToInactive(user: IUserModule) {
    this.userSetToInactive.emit(user);
  }
}
