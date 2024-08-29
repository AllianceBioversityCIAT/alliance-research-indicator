import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Router } from '@angular/router';
import { CacheService } from '../services/cache.service';
import { User } from './classes/User';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  cache = inject(CacheService);
  socket = inject(Socket);
  router = inject(Router);
  public socketStatus = false;
  public user: User | null = null;

  userList: WritableSignal<any> = signal([]);

  constructor() {
    this.runsockets();
  }

  runsockets() {
    this.checkStatus();
    this.getNotifications();
    this.getConnectedUsers();
    this.getAlerts();

    const { first_name, id } = this.cache.userInfo();
    if (first_name) this.configUser(first_name, id);
  }

  checkStatus() {
    this.socket.on('connect', () => {
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      this.socketStatus = false;
    });
  }

  emit(event: string, payload?: any, callback?: Function) {
    this.socket.emit(event, payload, callback);
  }

  listen(event: string) {
    return this.socket.fromEvent(event);
  }

  configUser(name: string, userId: number) {
    return new Promise((resolve, reject) => {
      this.emit('config-user', { name, userId }, (resp: any) => {
        this.user = new User(name, userId);
        resolve(null);
      });
    });
  }

  logoutWS() {
    this.user = null;
    localStorage.removeItem('user');

    const payload = {
      name: 'nameless'
    };

    this.emit('config-user', payload, () => {});
    this.router.navigateByUrl('');
  }

  getUser() {
    return this.user;
  }

  getConnectedUsers() {
    this.listen('all-connected-users').subscribe(resp => {
      this.userList.set(resp);
    });
  }

  getAlerts() {
    this.listen('alert').subscribe((msg: any) => {
      alert(msg.text);
    });
  }

  getNotifications() {
    this.listen('notifications').subscribe(msg => {});
  }
}
