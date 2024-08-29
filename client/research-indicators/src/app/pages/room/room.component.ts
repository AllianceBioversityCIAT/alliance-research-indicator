import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Subscription } from 'rxjs';
import { WebsocketService } from '../../shared/sockets/websocket.service';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss'
})
export default class RoomComponent implements OnInit, OnDestroy {
  websocket = inject(WebsocketService);

  roomId = '';
  users: string[] = [];
  private subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, private socket: Socket) {}

  ngOnInit() {
    this.roomId = this.route.snapshot.paramMap.get('id') || '';
    this.socket.emit('join-room', this.roomId);

    this.websocket.listen('room-users').subscribe((userList: any) => {
      console.log(userList);
      this.websocket.currentRoom.set({ id: this.roomId, userList });
    });
  }

  cancel() {
    console.log(this.roomId);
    this.socket.emit('leave-room', this.roomId);
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  ngOnDestroy() {
    this.socket.emit('leave-room', this.roomId);
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
