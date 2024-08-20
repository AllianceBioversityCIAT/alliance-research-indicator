import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CacheService } from '../../../services/cache.service';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { ChipModule } from 'primeng/chip';
import { AnimationsCacheService } from '../../../services/animations-cache.service';
import { DynamicToastService } from '../../../services/dynamic-toast.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'organism-alliance-navbar',
  standalone: true,
  imports: [ButtonModule, BadgeModule, ChipModule, RouterLink, RouterLinkActive],
  templateUrl: './alliance-navbar.component.html',
  styleUrl: './alliance-navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllianceNavbarComponent {
  dynamicToast = inject(DynamicToastService);
  cache = inject(CacheService);
  animationCache = inject(AnimationsCacheService);

  options = [
    { label: 'Home', path: '/home' },
    { label: 'About Indicators', path: '/about' },
    { label: 'Notifications', path: '/notifications' },
    { label: 'Settings', path: '/settings' },
    { label: 'Profile', path: '/profile' }
  ];

  redirectToCognito() {
    window.location.href = 'https://ost-toc.auth.us-east-1.amazoncognito.com/login?client_id=633s5bbcklq3bpvnctpnf1e2si&response_type=code&scope=email+openid+phone+profile&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fauth';
  }

  logOut() {
    localStorage.removeItem('decoded');
    localStorage.removeItem('token');
    this.cache.isLoggedIn.set(false);
  }
}
