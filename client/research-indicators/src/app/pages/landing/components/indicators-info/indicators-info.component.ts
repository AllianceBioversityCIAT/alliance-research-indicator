import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LandingTextsService } from '../../services/landing-texts.service';

@Component({
  selector: 'app-indicators-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './indicators-info.component.html',
  styleUrl: './indicators-info.component.scss'
})
export class IndicatorsInfoComponent {
  cardService = inject(LandingTextsService);

  cards = this.cardService.getCards();
}
