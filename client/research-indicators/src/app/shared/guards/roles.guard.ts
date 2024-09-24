import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { CacheService } from '../services/cache.service';
export const rolesGuard: CanMatchFn = route => inject(CacheService).isLoggedIn() == (route.data as { isLoggedIn?: boolean })?.isLoggedIn || false;
