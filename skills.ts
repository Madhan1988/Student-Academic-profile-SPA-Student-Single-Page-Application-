import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skills = [
    { name: 'Angular', level: 80, color: 'blue' },
    { name: 'Java', level: 75, color: 'green' },
    { name: 'Python', level: 85, color: 'purple' },
    { name: 'HTML & CSS', level: 90, color: 'orange' }
  ];
}