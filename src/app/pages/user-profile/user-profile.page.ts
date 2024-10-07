import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {  // Implementing OnInit
  userProfileForm: FormGroup;
  message: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private firestore: AngularFirestore,
    private alertController: AlertController,
    private router: Router  // Inject Router
  ) {
    this.userProfileForm = this.formBuilder.group({
      weight: ['', [Validators.required, Validators.min(20), Validators.max(300)]],
      height: ['', [Validators.required, Validators.min(50), Validators.max(250)]],
      age: ['', [Validators.required, Validators.min(5), Validators.max(120)]],
      gender: ['', Validators.required],
      activityLevel: ['', Validators.required],
      workoutRoutine: [''],
    });
  }
  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Success',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
    this.loadUserProfile();  // Load existing user data if available
  }

  async loadUserProfile() {
    try {
      const userId = await this.authService.getUserId(); // Get user ID from AuthService
      if (userId) {
        const userDoc = await this.firestore.collection('users').doc(userId).get().toPromise();
        if (userDoc && userDoc.exists) { // Check if the document exists
          const userData = userDoc.data() as { [key: string]: any }; // Explicitly cast to avoid 'unknown'
          if (userData) {
            this.userProfileForm.patchValue(userData); // Populate form with user data
          }
        } else {
          console.log('User document does not exist.');
        }
      } else {
        console.log('No user is logged in.');
      }
    } catch (error) {
      console.error('Error loading user profile:', error);
    }
  }
  

  async submitForm() {
    if (this.userProfileForm.valid) {
      try {
        const userId = await this.authService.getUserId(); // Get user ID from AuthService
        if (userId) {
          await this.firestore.collection('users').doc(userId).set(this.userProfileForm.value, { merge: true });
          this.router.navigate(['/goals']);
        } else {
          this.presentAlert('Error: User not found.');
        }
      } catch (error) {
        this.presentAlert('Error saving profile.');
        console.error('Error during profile save:', error);
      }
    }
  }
}
