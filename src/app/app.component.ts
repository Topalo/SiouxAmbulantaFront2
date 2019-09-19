import { Component, Input, Output } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'sioux-ambulanta';

  token: string = localStorage.getItem("token");

  constructor() { }

  logout() {
    localStorage.clear();
    this.token = null;
  }
}
