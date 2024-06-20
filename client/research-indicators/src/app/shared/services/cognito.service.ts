import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CacheService } from './cache.service';
import { DynamicToastService } from './dynamic-toast.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  cache = inject(CacheService);
  dynamicToastSE = inject(DynamicToastService);
  api = inject(ApiService);

  decode(token: string) {
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

    return { decoded: decodeJwtPayload(token), token };
  }
  async validateCognitoCode() {
    const { code } = this.activatedRoute.snapshot.queryParams || {};
    if (!code) return;
    this.cache.isValidatingToken.set(true);
    const response = await this.api.login(code);
    const { decoded, token } = this.decode(response.data.access_token);
    localStorage.setItem('token', token);
    localStorage.setItem('decoded', JSON.stringify(decoded));
    this.cache.userInfo.set(localStorage.getItem('decoded') ? JSON.parse(localStorage.getItem('decoded') ?? '') : {});
    this.cache.isValidatingToken.set(false);
    this.dynamicToastSE.toastMessage.set({ severity: 'success', summary: 'Success', detail: 'You are now logged in' });
    this.router.navigate(['/']);
    setTimeout(() => {
      this.cache.isLoggedIn.set(true);
    }, 100);
  }
}