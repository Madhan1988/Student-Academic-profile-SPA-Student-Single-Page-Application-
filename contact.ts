import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  submitForm() {
    console.log(this.name, this.email, this.message);
    alert('Message sent successfully!');
  }
}