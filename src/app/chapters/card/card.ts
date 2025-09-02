import { Component, Input, input } from '@angular/core';
import { Card as CardInterface } from '../../interfaces/card.interface';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() chapter!: CardInterface;
}
