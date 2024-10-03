import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
 
    };
  async signUp() {
    try {
      await this.authService.signUp(this.name, this.email, this.password);
      console.log('Signed up successfully');
    } catch (error) {
      console.error('Signup failed', error);
    }
  }
}
