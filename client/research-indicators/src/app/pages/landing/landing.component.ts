import { Component } from '@angular/core';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ToolbarComponent, HeaderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
