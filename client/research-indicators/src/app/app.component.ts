import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { DynamicToastComponent } from './shared/components/organisms/dynamic-toast/dynamic-toast.component';
import { CacheService } from './shared/services/cache.service';
import { MetadataPanelComponent } from './shared/components/metadata-panel/metadata-panel.component';
import { WebsocketService } from './shared/sockets/websocket.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicToastComponent, MetadataPanelComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  cache = inject(CacheService);
  sockets = inject(WebsocketService);
  title = 'research-indicators';
  name = environment.name;
  ngOnInit(): void {
    this.validateToken();
  }

  validateToken() {
    if (localStorage.getItem('token')) this.cache.isLoggedIn.set(true);
  }
}
