import { computed, effect, Injectable, signal, WritableSignal } from '@angular/core';
import { UserInfo } from '../interfaces/cache.interface';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  //user
  isLoggedIn = signal(false);
  isValidatingToken = signal(false);
  wasAnimated = signal(false);
  userInfo: WritableSignal<UserInfo> = signal(localStorage.getItem('decoded') ? JSON.parse(localStorage.getItem('decoded') ?? '') : {});
  token = signal(localStorage.getItem('token') ?? '');
}
