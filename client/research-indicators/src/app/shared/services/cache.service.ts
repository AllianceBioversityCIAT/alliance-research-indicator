import { Injectable, signal, WritableSignal } from '@angular/core';
import { UserInfo } from '../interfaces/cache.interface';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  //user
  isLoggedIn = signal(false);
  isValidatingToken = signal(false);
  userInfo: WritableSignal<UserInfo> = signal(localStorage.getItem('decoded') ? JSON.parse(localStorage.getItem('decoded') ?? '') : {});
  token = signal(localStorage.getItem('token') ?? '');
  showMetadataPanel = signal(localStorage.getItem('showMetadataPanel') === 'true');
}
