import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

export interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, AccordionModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  faqs: Faq[] = [
  {
    question: 'What is the Alliance Reporting Tool?',
    answer: 'Answer...'
  },
  {
    question: 'What is the difference between Bilateral Projects and Initiatives?',
    answer: 'Answer...'
  },
  {
    question: 'What type of help can I expect from the AI feature?',
    answer: 'Answer...'
  },
  {
    question: 'What are indicators, and how should I select them?',
    answer: 'Answer...'
  },
  {
    question: 'How do I get started with creating a new result?',
    answer: 'Answer...'
  },
  {
    question: 'Can I save my progress while filling out the result form?',
    answer: 'Answer...'
  }

  ];

}
