import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  async login() {
    try {
      const result = await this.authService.login(this.email, this.password);
      if (result) {
        console.log('User logged in:', result);
        // Optionally redirect or show success message
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Optionally show error message to the user
    }
  }
}
