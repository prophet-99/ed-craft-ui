import { Component, Inject } from '@angular/core';

import { MODAL_COMPONENT_DATA, ModalService } from '@ed-craft-ui';

@Component({
  selector: 'app-mock-modal',
  templateUrl: './mock-modal.component.html',
  styles: ``,
})
export class MockModalComponent {
  constructor(
    @Inject(MODAL_COMPONENT_DATA)
    public user: { name: string; lastName: string },
    public modalService: ModalService
  ) {}
}
