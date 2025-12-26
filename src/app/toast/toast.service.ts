import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    if(this.toasts.length > 0) {
      this.remove(this.toasts[0]);
    }
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  message(textOrTpl: string, delay?:number) {
    if(!delay) {
        delay = 8000;
    }
    this.show(textOrTpl, { classname: 'col-md-12 bg-success text-light p-0',type:'success', autohide: true, delay: delay });
  }

  error(textOrTpl: string, delay?:number) {
    if(!delay) {
      delay = 8000;
    }
    this.show(textOrTpl, { classname: 'col-md-12 bg-danger text-light p-0',type:'error', autohide: true, delay: delay });
  }
  warning(textOrTpl: string, delay?:number) {
    if(!delay) {
      delay = 8000;
    }
    this.show(textOrTpl, { classname: 'col-md-12 bg-warning text-light p-0', autohide: true, delay: delay });
  }
  warningNlp(textOrTpl: string, delay?:number) {
    if(!delay) {
      delay = 8000;
    }
    this.show(textOrTpl, { classname: 'col-md-12 bg-secondary text-light p-0', autohide: true, delay: delay });
  }
}
