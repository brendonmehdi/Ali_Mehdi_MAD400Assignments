import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Assignment2 } from './app.assignment2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ali-Mehdi-MyFirstAngularApplication';


  items = [
    new Assignment2(true, "Hello"),
    new Assignment2(true),
    new Assignment2(undefined, "Hello")
    ]
}


