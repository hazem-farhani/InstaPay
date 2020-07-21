import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logSwitch: number;

  constructor() { }

  ngOnInit() {
    this.logSwitch = 1;
  }

  switch(num: number){
    this.logSwitch = num;
  }
}
