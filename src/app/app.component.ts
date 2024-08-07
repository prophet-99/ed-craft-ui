import { Component } from '@angular/core';

import { ModalService } from '@ed-craft-ui';
import { MockModalComponent } from './mock-modal/mock-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ModalService],
})
export class AppComponent {
  title = 'ed-craft';

  constructor(private _modalService: ModalService) {}

  public showModal(): void {
    this._modalService.showModal({
      title: 'Modal Example',
      component: MockModalComponent,
      componentData: {
        name: 'Alex',
        lastName: 'Av.',
      },
    });
  }
}
