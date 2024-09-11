import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { ChipModule } from 'primeng/chip';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DynamicToastService } from '../../services/dynamic-toast.service';
import { CacheService } from '../../services/cache.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'alliance-navbar',
  standalone: true,
  imports: [ButtonModule, BadgeModule, ChipModule, RouterLink, RouterLinkActive],
  templateUrl: './alliance-navbar.component.html',
  styleUrl: './alliance-navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllianceNavbarComponent {
  dynamicToast = inject(DynamicToastService);
  cache = inject(CacheService);

  options = [
    { label: 'Home', path: '/home' },
    { label: 'About Indicators', path: '/about' },
    { label: 'Notifications', path: '/notifications' },
    { label: 'Settings', path: '/settings' },
    { label: 'Profile', path: '/profile' }
  ];

  redirectToCognito() {
    // Redirect to cognito login in other tab
    window.open(environment.cognitoUrl);

    // // window.location.href = environment.cognitoUrl;
    // this.dynamicToast.show('Redirecting to Cognito login', 'success');
  }

  logOut() {
    localStorage.removeItem('decoded');
    localStorage.removeItem('token');
    this.cache.isLoggedIn.set(false);
  }
}
