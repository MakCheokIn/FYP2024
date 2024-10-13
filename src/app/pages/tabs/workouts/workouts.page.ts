import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExerciseDetailModalComponent } from './exercise-detail-modal/exercise-detail-modal.component';
import { Exercise } from './exercise.model'; // Ensure this path is correct

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage {
  exercises: Exercise[] = []; // Array to hold exercise data

  constructor(private modalController: ModalController) {
    // Example exercise data, replace this with your actual data source
    this.exercises = [
      { 
        name: 'Push Up', 
        muscle: 'Chest', 
        equipment: 'Bodyweight', 
        instructions: 'Lower your body and push back up.',
        image: 'assets/images/pushup.jpg'
      },
      { 
        name: 'Squat', 
        muscle: 'Legs', 
        equipment: 'Bodyweight', 
        instructions: 'Lower yourself down as if sitting in a chair.',
        image: 'assets/images/squat.jpg'
      },
      { 
        name: 'Dumbbell Bench Press', 
        muscle: 'Chest', 
        equipment: 'Dumbbell', 
        instructions: 'Lie down on a flat bench with a dumbbell in each hand resting on top of your thighs. The palms of your hands will be facing each other. Then, using your thighs to help raise the dumbbells up, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width. Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. The dumbbells should be just to the sides of your chest, with your upper arm and forearm creating a 90 degree angle. Be sure to maintain full control of the dumbbells at all times. This will be your starting position. Then, as you breathe out, use your chest to push the dumbbells up. Lock your arms at the top of the lift and squeeze your chest, hold for a second and then begin coming down slowly. Tip: Ideally, lowering the weight should take about twice as long as raising it. Repeat the movement for the prescribed amount of repetitions of your training program.  Caution: When you are done, do not drop the dumbbells next to you as this is dangerous to your rotator cuff in your shoulders and others working out around you. Just lift your legs from the floor bending at the knees, twist your wrists so that the palms of your hands are facing each other and place the dumbbells on top of your thighs. When both dumbbells are touching your thighs simultaneously push your upper torso up (while pressing the dumbbells on your thighs) and also perform a slight kick forward with your legs (keeping the dumbbells on top of the thighs). By doing this combined movement, momentum will help you get back to a sitting position with both dumbbells still on top of your thighs. At this moment you can place the dumbbells on the floor. Variations: Another variation of this exercise is to perform it with the palms of the hands facing each other. Also, you can perform the exercise with the palms facing each other and then twisting the wrist as you lift the dumbbells so that at the top of the movement the palms are facing away from the body. I personally do not use this variation very often as it seems to be hard on my shoulders.',
        image: 'assets/images/dumbbellpress.avif'
      }
      // Add more exercises as needed
    ];
  }

  async showExerciseDetail(exercise: Exercise) {
    const modal = await this.modalController.create({
      component: ExerciseDetailModalComponent,
      componentProps: { exercise, modalController: this.modalController }, // Pass modal controller
    });
    return await modal.present();
  }
}
