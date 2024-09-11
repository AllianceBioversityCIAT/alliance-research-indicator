import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CacheService } from '../../shared/services/cache.service';
import { RouterOutlet } from '@angular/router';
import { CognitoService } from '../../shared/services/cognito.service';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { AllianceNavbarComponent } from '../../shared/components/alliance-navbar/alliance-navbar.component';

@Component({
  selector: 'app-platform',
  standalone: true,
  imports: [AllianceNavbarComponent, RouterOutlet, ButtonModule, FooterComponent],
  templateUrl: './platform.component.html',
  styleUrl: './platform.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PlatformComponent implements OnInit {
  cache = inject(CacheService);
  cognito = inject(CognitoService);
  ngOnInit(): void {
    this.cognito.validateCognitoCode();
  }
}
