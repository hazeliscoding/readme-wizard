import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast } from '../models/toast.model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: BehaviorSubject<Toast[]> = new BehaviorSubject<Toast[]>([]);

  constructor(private utilsService: UtilsService) {}

  success(message: string) {
    this.showtoast({ message, type: 'success', id: this.utilsService.guid() });
  }

  error(message: string) {
    this.showtoast({ message, type: 'error', id: this.utilsService.guid() });
  }

  close(id: string) {
    this.toasts.next([...this.toasts.value.filter((t) => t.id !== id)]);
  }

  private showtoast(toast: Toast) {
    this.toasts.next([...this.toasts.value, toast]);
    this.removeToast(toast); // Remove toast after 3 seconds.
  }

  private removeToast(toast: Toast) {
    setTimeout(() => this.close(toast.id), 2000); // Remove toast after 3 seconds.
  }
}
