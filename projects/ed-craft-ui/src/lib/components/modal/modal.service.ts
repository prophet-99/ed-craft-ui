import { Injectable, InjectionToken } from '@angular/core';

import { Subject } from 'rxjs';

import { type ModalConfig } from './modal-config.model';

export const MODAL_COMPONENT_DATA = new InjectionToken<any>(
  'MODAL_COMPONENT_DATA'
);

@Injectable()
export class ModalService {
  private _modalConfig = new Subject<ModalConfig>();
  public modalConfig$ = this._modalConfig.asObservable();

  public showModal(modalConfig: Omit<ModalConfig, 'show'>): void {
    this._modalConfig.next({
      show: true,
      ...modalConfig,
    });
  }

  public closeModal(): void {
    this._modalConfig.next({
      show: false,
      title: '',
      component: null,
      componentData: null,
    });
  }
}
