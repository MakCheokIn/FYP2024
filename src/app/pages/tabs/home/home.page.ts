import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  achievements = [
    { title: 'Run 5km', description: 'Complete a 5km run today.', status: 'Incomplete' },
    { title: 'Do 50 Pushups', description: 'Complete 50 pushups.', status: 'Completed' },
    // Add more achievements here
  ];
  
}
