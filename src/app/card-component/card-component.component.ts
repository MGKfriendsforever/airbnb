import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.css'
})
export class CardComponentComponent {
  @Input() cardTitle: string | undefined;
  @Input() cardContent: string | undefined;
}
