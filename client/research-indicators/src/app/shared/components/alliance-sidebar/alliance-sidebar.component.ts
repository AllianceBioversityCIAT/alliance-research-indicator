import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CacheService } from '../../services/cache.service';

@Component({
  selector: 'alliance-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './alliance-sidebar.component.html',
  styleUrl: './alliance-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllianceSidebarComponent {
  cache = inject(CacheService);
  options = [
    { icon: 'home', label: 'Home', path: '/home' },
    { icon: 'help', label: 'About', path: '/about' },
    { icon: 'contact_phone', label: 'Contact', path: '/contact' }
  ];
}
