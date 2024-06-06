import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CacheService } from '../../../services/cache.service';

@Component({
  selector: 'organism-alliance-navbar',
  standalone: true,
  imports: [],
  templateUrl: './alliance-navbar.component.html',
  styleUrl: './alliance-navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllianceNavbarComponent {
  cache = inject(CacheService);

  options = [
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  redirectToCognito() {
    window.location.href = 'https://ost-toc.auth.us-east-1.amazoncognito.com/login?client_id=633s5bbcklq3bpvnctpnf1e2si&response_type=code&scope=email+openid+phone+profile&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fauth';
  }
}
