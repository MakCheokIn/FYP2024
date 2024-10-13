import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Exercise } from '../exercise.model'; // Ensure this path is correct

@Component({
  selector: 'app-exercise-detail-modal',
  templateUrl: './exercise-detail-modal.component.html',
  styleUrls: ['./exercise-detail-modal.component.scss'],
})
export class ExerciseDetailModalComponent {
  exercise!: Exercise; // Use definite assignment operator

  constructor(private navParams: NavParams) {
    // Retrieve the exercise object passed to the modal
    this.exercise = this.navParams.get('exercise');
  }

  closeModal() {
    // Logic to close the modal
    this.navParams.get('modalController').dismiss();
  }
}
