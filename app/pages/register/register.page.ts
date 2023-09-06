import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario={
    email: '',
    pass:'',
    pass2:'',
  }
    
  constructor() { }

  ngOnInit() {
  }

}
