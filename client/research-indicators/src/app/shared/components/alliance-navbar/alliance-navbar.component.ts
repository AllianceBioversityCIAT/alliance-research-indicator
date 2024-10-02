import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { ChipModule } from 'primeng/chip';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DynamicToastService } from '../../services/dynamic-toast.service';
import { CacheService } from '../../services/cache.service';
import { DarkModeService } from '../../services/dark-mode.service';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
@Component({
  selector: 'alliance-navbar',
  standalone: true,
  imports: [ButtonModule, BadgeModule, ChipModule, RouterLink, RouterLinkActive, AvatarModule, AvatarGroupModule],
  templateUrl: './alliance-navbar.component.html',
  styleUrl: './alliance-navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllianceNavbarComponent {
  dynamicToast = inject(DynamicToastService);
  cache = inject(CacheService);
  darkModeService = inject(DarkModeService);
  router = inject(Router);
  options = [
    { label: 'Home', path: '/home' },
    { label: 'About Indicators', path: '/about' },
    { label: 'Notifications', path: '/notifications' },
    { label: 'Settings', path: '/settings' },
    { label: 'Profile', path: '/profile' }
  ];

  logOut() {
    localStorage.removeItem('decoded');
    localStorage.removeItem('token');
    this.cache.isLoggedIn.set(false);
    this.router.navigate(['/auth']);
  }
}
