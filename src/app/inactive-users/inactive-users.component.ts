import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserModule } from '../models/iuser-module';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: Array<IUserModule>;
  @Output() userSetToActive = new EventEmitter<IUserModule>();

  onSetToActive(user: IUserModule) {
    this.userSetToActive.emit(user);
  }
}
