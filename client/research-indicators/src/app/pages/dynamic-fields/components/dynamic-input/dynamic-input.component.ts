import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: '[app-dynamic-input]',
  standalone: true,
  imports: [FloatLabelModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './dynamic-input.component.html',
  styleUrl: './dynamic-input.component.scss'
})
export class DynamicInputComponent {
  @Input() attr = '';
}
