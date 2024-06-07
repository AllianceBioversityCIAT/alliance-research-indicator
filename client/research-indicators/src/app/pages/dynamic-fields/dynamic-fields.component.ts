import { Component } from '@angular/core';
import { DynamicComponentSelectorComponent } from './components/dynamic-component-selector/dynamic-component-selector.component';

@Component({
  selector: 'app-dynamic-fields',
  standalone: true,
  imports: [DynamicComponentSelectorComponent],
  templateUrl: './dynamic-fields.component.html',
  styleUrl: './dynamic-fields.component.scss'
})
export default class DynamicFieldsComponent {
  fields = [
    {
      type: 'section',
      fields: [{ type: 'title' }, { type: 'input' }, { type: 'block', fields: [{ type: 'title' }, { type: 'input' }] }]
    },
    {
      type: 'title'
    }
  ];
}
