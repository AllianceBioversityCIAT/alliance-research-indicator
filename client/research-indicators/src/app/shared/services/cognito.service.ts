import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CacheService } from './cache.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  cache = inject(CacheService);

  decode() {
    const base64UrlToBase64 = (input: string) => {
      let base64 = input.replace(/-/g, '+').replace(/_/g, '/');
      while (base64.length % 4) {
        base64 += '=';
      }
      return base64;
    };

    const decodeJwtPayload = (token: string) => {
      const parts = token.split('.');
      if (parts.length !== 3) {
        throw new Error('JWT not valid');
      }

      const payloadBase64 = base64UrlToBase64(parts[1]);
      const decodedPayload = atob(payloadBase64);
      return JSON.parse(decodedPayload);
    };

    const token = environment.token;
    return { decoded: decodeJwtPayload(token), token };
  }
  async saveInLocalStorage() {
    // const { code } = this.activatedRoute.snapshot.queryParams || {};
    localStorage.setItem('token', this.decode().token);
    localStorage.setItem('decoded', JSON.stringify(this.decode().decoded));
    setTimeout(() => {
      this.cache.isLoggedIn.set(true);
    }, 3000);
  }
}
