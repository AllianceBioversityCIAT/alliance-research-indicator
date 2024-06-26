import { Component, inject, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicFieldsService } from '../../dynamic-fields.service';

@Component({
  selector: '[app-dynamic-input]',
  standalone: true,
  imports: [FloatLabelModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './dynamic-input.component.html',
  styleUrl: './dynamic-input.component.scss'
})
export class DynamicInputComponent {
  dynamicFieldsSE = inject(DynamicFieldsService);

  @Input() attr = '';
}
