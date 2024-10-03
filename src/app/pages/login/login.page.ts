import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService){}
  
  ngOnInit() {
  }
  async login() {
    try {
      await this.authService.login(this.email, this.password);
      console.log('Logged in successfully');
    } catch (error) {
      console.error('Login failed', error);
    }
  }
}