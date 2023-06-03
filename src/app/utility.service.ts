import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService implements OnDestroy {


  private username: string;

  setUsername(username: string) {
    this.username = username;
  }

  getuserName() {
    return this.username;
  }
  constructor() { }
  ngOnDestroy(): void {

  }
}
