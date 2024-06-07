import { computed, effect, inject, Injectable } from '@angular/core';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class AnimationsCacheService {
  cache = inject(CacheService);
  destroyInNoLoggedIn = computed(() => {
    return this.cache.isLoggedIn() && this.cache.wasAnimated();
  });

  destoyInLoggedIn = computed(() => {
    console.log('logueado:  ' + this.cache.isLoggedIn());
    console.log('animado:  ' + this.cache.wasAnimated());
    return this.cache.isLoggedIn() == true && this.cache.wasAnimated() == true;
  });

  animated = effect(() => {
    console.log('anm');
    console.log(this.cache.wasAnimated());
    if (this.cache.isLoggedIn()) {
      console.log('Change');
      setTimeout(() => {
        this.cache.wasAnimated.set(true);
      }, 1000);
    }
  });

  isLoggedInHideClass = computed(() => {
    return this.cache.isLoggedIn() ? 'hide-animation' : '';
  });

  isNotLoggedInHideClass = computed(() => {
    return !this.cache.isLoggedIn() ? 'hide-animation' : '';
  });
}
