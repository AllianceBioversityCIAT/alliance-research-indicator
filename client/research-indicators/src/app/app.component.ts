import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { DynamicToastComponent } from './shared/components/organisms/dynamic-toast/dynamic-toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicToastComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'research-indicators';
  name = environment.name;
}
