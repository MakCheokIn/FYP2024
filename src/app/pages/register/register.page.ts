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
  errorMessage: string | null = null;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
 
    };
  async signUp() {
    try {
      await this.authService.signUp(this.name, this.email, this.password);
      console.log('Signed up successfully');
      this.errorMessage = null;  // Clear error message on success
    } catch (error: any) { // Explicitly typing error as any
      console.error('Signup failed', error);
      this.errorMessage = "Signup failed: " + (error.message || error); // Handle error message
    }
  }
}
