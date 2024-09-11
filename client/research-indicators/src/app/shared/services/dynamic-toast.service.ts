import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicToastService {
  toastMessage: WritableSignal<ToastMessage> = signal({ severity: '', summary: '', detail: '' });
}

interface ToastMessage {
  severity: string;
  summary: string;
  detail: string;
}
