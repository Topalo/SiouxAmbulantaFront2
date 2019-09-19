import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Doctor } from '../model/doctor';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

  @Input("item")
  item: Doctor = { id: null, firstname: null, lastname: null, email: null, specialization: null, username: '', password: '', };

  constructor(private service: AuthService, private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  public clearForm() {
    this.item.username = "";
    this.item.password = "";
  }

  public me() {
    this.service.me().subscribe(
      (res: Doctor) => {
        localStorage.setItem("id", res.id.toString());
        localStorage.setItem("username", res.username);
      }
    );
  }

  public login() {
    this.service.signIn(this.item).subscribe(
      (data) => {
        localStorage.setItem("token", data.token);
        this.me();
        this.cdr.detectChanges();
        this.router.navigate(['/'])
      },
      (error) => {
        console.log(error);
      }
    );
    this.clearForm();
  }

}
