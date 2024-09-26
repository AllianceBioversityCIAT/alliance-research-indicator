import { Component, inject, OnInit } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { IndicatorsInfoComponent } from './components/indicators-info/indicators-info.component';
import { CognitoService } from '../../shared/services/cognito.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ToolbarComponent, HeaderComponent, ServicesComponent, IndicatorsInfoComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export default class LandingComponent implements OnInit {
  cognito = inject(CognitoService);
  ngOnInit(): void {
    this.cognito.validateCognitoCode();
  }
}
