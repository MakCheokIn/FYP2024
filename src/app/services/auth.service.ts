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
    } catch (error: unknown) {
      throw error;
    }
  }

  // Login method
  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    } catch (error: unknown) {
      throw error;
    }
  }

  // Logout method
  async logout() {
    try {
      await this.afAuth.signOut();
    } catch (error: unknown) {
      throw error;
    }
  }

  // Reset Password method
  async resetPassword(email: string) {
    try {
      await this.afAuth.sendPasswordResetEmail(email);
    } catch (error: unknown) {
      throw error;
    }
  }

  // Get current authenticated user
  getCurrentUser() {
    return this.afAuth.authState;
  }

  // Method to get the current user ID
  async getUserId(): Promise<string | null> {
    const user = await this.afAuth.currentUser;
    return user ? user.uid : null;
  }
}
