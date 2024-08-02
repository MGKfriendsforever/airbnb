import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponentComponent } from './card-component/card-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
title: any;
  // <app-card-component></app-card-component>
  // title = 'airbnb';
}
