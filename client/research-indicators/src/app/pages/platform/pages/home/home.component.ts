import { Component } from '@angular/core';
import { ResultsTableComponent } from '../../../../shared/components/results-table/results-table.component';
import { DarkModeService } from '../../../../shared/services/dark-mode.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ResultsTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {}
