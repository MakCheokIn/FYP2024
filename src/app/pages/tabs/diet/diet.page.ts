import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.page.html',
  styleUrls: ['./diet.page.scss'],
})
export class DietPage {
  dietForm: FormGroup;
  nutritionInfo: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.dietForm = this.formBuilder.group({
      foodItem: ['', Validators.required]
    });
  }

  submitDietForm() {
    const foodItem = this.dietForm.get('foodItem')?.value;
    this.getNutritionInfo(foodItem);
  }

  getNutritionInfo(foodItem: string) {
    const apiKey = 'ZAVd+0ZcPuUMEzq6Qjd26w==CxxzIvtcFmz3IZj5'; // Replace with your API key
    this.http.get(`https://api.api-ninjas.com/v1/nutrition?query=${foodItem}`, {
      headers: { 'X-Api-Key': apiKey }
    }).subscribe(
      (data: any) => {
        if (data && data.length > 0) {
          this.nutritionInfo = data[0];
        }
      },
      (error) => {
        console.error('Error fetching nutrition info', error);
      }
    );
  }
}
