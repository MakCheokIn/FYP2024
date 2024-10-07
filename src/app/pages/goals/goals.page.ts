import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage {
  goalsForm: FormGroup;  // Define the goalsForm property

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private firestore: AngularFirestore,
    private alertController: AlertController
  ) {
    // Initialize the goals form here
    this.goalsForm = this.formBuilder.group({
      loseWeight: [false, Validators.required],
      buildMuscle: [false, Validators.required],
      increaseStamina: [false, Validators.required],
      improveFlexibility: [false, Validators.required],
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

  async submitGoals() {  // Define the submitGoals method
    const userId = await this.authService.getUserId(); // Get user ID

    if (userId) {
      const selectedGoals = this.goalsForm.value;
      await this.firestore.collection('users').doc(userId).set({ goals: selectedGoals }, { merge: true });
      this.presentAlert('Goals saved successfully!');
    } else {
      this.presentAlert('Error: User not found.');
    }
  }
}
