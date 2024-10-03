import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Sign up method
  async signUp(name: string, email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);

      if (result.user) {
        await result.user.updateProfile({
          displayName: name,
        });
      }

      return result;
    } catch (error) {
      console.error("Error during sign up", error);
      throw error;
    }
  }

  // Login method
  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      console.error("Error during login", error);
      throw error;
    }
  }
}