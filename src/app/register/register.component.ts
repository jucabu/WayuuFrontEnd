import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public register;
  constructor() {
    this.register = {
      nombre: '',
      email: '',
      password: '',
      privacy_politics: false
    };
  }

  ngOnInit() {
  }

}
