import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required: false}) colspan: string;
  @Input({required: false}) rowspan: string;
  @Input({required: false}) rowHeight: string

  constructor() {

  }
}
