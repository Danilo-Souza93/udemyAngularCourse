import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  countActive = 0;
  countInactive = 0;

  setCountActive(): void {
    this.countActive += 1;
  }

  setCountInactive(): void {
    this.countInactive += 1;
  }

  getCountActive(): number {
    return this.countActive;
  }

  getCountInactive(): number {
    return this.countInactive;
  }

}
