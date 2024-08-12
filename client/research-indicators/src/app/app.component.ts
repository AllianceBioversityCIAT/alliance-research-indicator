import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { DynamicToastComponent } from './shared/components/organisms/dynamic-toast/dynamic-toast.component';
import { CacheService } from './shared/services/cache.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicToastComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  cache = inject(CacheService);
  title = 'research-indicators';
  name = environment.name;
  ngOnInit(): void {
    this.validateToken();
  }

  validateToken() {
    if (localStorage.getItem('token')) this.cache.isLoggedIn.set(true);
  }
}
