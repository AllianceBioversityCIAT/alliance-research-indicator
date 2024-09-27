import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Card {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

@Component({
  selector: 'app-indicators-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './indicators-info.component.html',
  styleUrl: './indicators-info.component.scss'
})

export class IndicatorsInfoComponent {

  cards: Card[] = [
    {
      icon: '/icon1.png',
      title: 'CAPACITY SHARING',
      subtitle: 'Output',
      description: 'Number of individuals trained or engaged by Alliance staff, aiming to lead to behavioral changes in knowledge, attitude, skills, and practice among CGIAR and non-CGIAR personnel.',

    },
    {
      icon: '/icon3.png',
      title: 'KNOWLEDGE PRODUCT',
      subtitle: 'Output',
      description: 'A finalized data asset that is integral to a project\'s Theory of Change (ToC). It is created for use by project actors and should not include drafts or unrelated digital products.',
    },
    {
      icon: '/icon2.png',
      title: 'POLICY CHANGE',
      subtitle: 'Outcome',
      description: 'Policies, strategies, legal instruments, programs, budgets, or investments at different scales that have been modified in design or implementation.',
    },
    {
      icon: '/icon4.png',
      title: 'OICR',
      subtitle: 'Outcome',
      description: 'An evidence-based report detailing any outcome or impact that has resulted from the work of one or more CGIAR programs, initiatives, or centers.',
    },
    {
      icon: '/icon5.png',
      title: 'INNOVATIONS',
      subtitle: 'Outcome',
      description: 'A metric used to assess the extent to which an innovation is already being used, by which type of users and under which conditions, with a scale ranging from no use (lowest level) to common use.',
    },
  ];

}
