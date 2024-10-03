import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage {
  userProfileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize form with form controls and validators
    this.userProfileForm = this.fb.group({
      weight: ['', [Validators.required, Validators.min(20), Validators.max(300)]],
      height: ['', [Validators.required, Validators.min(50), Validators.max(250)]],
      age: ['', [Validators.required, Validators.min(5), Validators.max(120)]],
      gender: ['', Validators.required],
      activityLevel: ['', Validators.required],
      workoutRoutine: [''],
    });
  }

  // Submit function
  submitForm() {
    if (this.userProfileForm.valid) {
      const userData = this.userProfileForm.value;
      console.log('User Data:', userData);
      // Process the form data, e.g., send to server or store locally
    } else {
      console.log('Form is invalid');
    }
  }
}
