import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'sioux-ambulanta';
  loggedUser: string = localStorage.getItem("username");
  token: string = localStorage.getItem("token");

  constructor() { }

  logout() {
    localStorage.clear();
    this.token = null;
    this.loggedUser = null;
  }

}
