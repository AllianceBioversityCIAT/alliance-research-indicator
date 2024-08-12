import { Component } from '@angular/core';
import { HomeHeaderComponent } from '../../../../shared/components/home-header/home-header.component';
import { ResultsTableComponent } from '../../../../shared/components/results-table/results-table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeaderComponent, ResultsTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {}
