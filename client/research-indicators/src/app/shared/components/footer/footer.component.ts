import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  navigationList = [
    {
      title: 'Legal Information',
      options: [
        { title: 'Terms and Conditions', url: '#' },
        { title: 'License', url: '#' }
      ]
    },
    {
      title: 'Resources',
      options: [
        { title: 'Alliance SharePoint', url: '#' },
        { title: 'Alliance Power BI', url: '#' },
        { title: 'Glossary of Terms', url: '#' }
      ]
    },
    {
      title: 'Contact Us',
      options: [{ title: 'Contact and Support', url: '#' }]
    }
  ];
}
