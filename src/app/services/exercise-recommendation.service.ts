import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ExerciseRecommendationService {
  private apiUrl = 'https://api.api-ninjas.com/v1/exercises'; // API 端點
  private apiKey = 'ZAVd+0ZcPuUMEzq6Qjd26w==CxxzIvtcFmz3IZj5'; // 在這裡填寫你的 API Key

  constructor(private http: HttpClient) {}

  getExerciseRecommendation(muscle: string, difficulty: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey,
    });
    
    // 將參數拼接到 URL
    const params = {
      muscle: muscle,      // 目標肌肉群
      difficulty: difficulty, // 運動難度
    };
    
    return this.http.get(this.apiUrl, { headers: headers, params: params });
  }
}