import { Component, effect, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CacheService } from '../../../services/cache.service';
import { DynamicToastService } from '../../../services/dynamic-toast.service';

@Component({
  selector: 'organism-dynamic-toast',
  standalone: true,
  imports: [ToastModule],
  templateUrl: './dynamic-toast.component.html',
  styleUrl: './dynamic-toast.component.scss',
  providers: [MessageService]
})
export class DynamicToastComponent {
  messageService = inject(MessageService);
  cache = inject(CacheService);
  dynamicToast = inject(DynamicToastService);

  showToast = effect(() => {
    this.dynamicToast.toastMessage().severity && this.messageService.add(this.dynamicToast.toastMessage());
  });
}
