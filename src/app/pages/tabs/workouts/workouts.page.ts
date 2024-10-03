import { Component, OnInit } from '@angular/core';
import { ExerciseRecommendationService } from 'src/app/services/exercise-recommendation.service';

@Component({
  selector: 'tabs-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {
  muscles: string[] = ['biceps', 'chest', 'legs', 'back', 'abs']; // 可選肌肉群
  difficulties: string[] = ['beginner', 'intermediate', 'advanced']; // 可選難度
  selectedMuscle: string = 'biceps';
  selectedDifficulty: string = 'beginner';
  exercises: any[] = [];

  constructor(private exerciseService: ExerciseRecommendationService) {}

  ngOnInit() {
    this.getExercises();
  }

  getExercises() {
    this.exerciseService
      .getExerciseRecommendation(this.selectedMuscle, this.selectedDifficulty)
      .subscribe(
        (response: any[]) => {
          this.exercises = response;
        },
        (error: any) => {
          console.error('Error fetching exercises:', error);
        }
      );
  }
}
