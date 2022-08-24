import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastr: ToastrService) {
    //configs toastr
    this.toastr.toastrConfig.positionClass = 'toast-bottom-left';
  }

  /** dispara el toast */
  show(msg: string, error: boolean) {
    return !error ? this.toastr.success(msg) : this.toastr.error(msg);
  }
}
