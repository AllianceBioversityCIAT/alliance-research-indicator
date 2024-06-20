import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [FloatLabelModule, InputTextModule],
  templateUrl: './dynamic-input.component.html',
  styleUrl: './dynamic-input.component.scss'
})
export class DynamicInputComponent {}
