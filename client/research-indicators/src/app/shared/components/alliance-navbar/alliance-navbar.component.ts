import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { ChipModule } from 'primeng/chip';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DynamicToastService } from '../../services/dynamic-toast.service';
import { CacheService } from '../../services/cache.service';
import { DarkModeService } from '../../services/dark-mode.service';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'alliance-navbar',
  standalone: true,
  imports: [ButtonModule, BadgeModule, ChipModule, RouterLink, RouterLinkActive, MenuModule, AvatarModule],
  templateUrl: './alliance-navbar.component.html',
  styleUrl: './alliance-navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllianceNavbarComponent implements OnInit {
  dynamicToast = inject(DynamicToastService);
  cache = inject(CacheService);
  darkModeService = inject(DarkModeService);
  router = inject(Router);
  items: any;

  options = [
    { label: 'Home', path: '/home' },
    { label: 'My Results', path: '/about', options: [{}] },
    { label: 'My Contracts', path: '/notifications' }
  ];

  ngOnInit() {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Refresh',
            icon: 'pi pi-refresh'
          },
          {
            label: 'Export',
            icon: 'pi pi-upload'
          }
        ]
      }
    ];
  }

  logOut() {
    localStorage.removeItem('decoded');
    localStorage.removeItem('token');
    this.cache.isLoggedIn.set(false);
    this.router.navigate(['/auth']);
  }
}
