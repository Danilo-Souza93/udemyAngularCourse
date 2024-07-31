import { CounterService } from './services/counter.service';
import { IUserModule } from './models/iuser-module';
import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers = [];
  inactiveUsers = [];
  activeAction: number;
  inactiveAction: number;

  constructor(private userService: UserService, private counterService: CounterService) {}

  ngOnInit(): void {
    this.getUserList();
    this.getCountActivations();
  }

  getUserList(): void {
    this.userService.getUserList().subscribe(res => {
      this.activeUsers = res.filter(user => user.active == true);
      this.inactiveUsers = res.filter(user => user.active == false);
    });

    this.getCountActivations();
  }

  getCountActivations(): void {
    this.activeAction = this.counterService.getCountActive();
    this.inactiveAction = this.counterService.getCountInactive();
  }

  onSetToInactive(user: IUserModule) {
    this.userService.setToInactive(user);
    this.counterService.setCountInactive();
    this.getUserList();
  }

  onSetToActive(user: IUserModule) {
    this.userService.setToActive(user);
    this.counterService.setCountActive();
    this.getUserList();
  }
}
