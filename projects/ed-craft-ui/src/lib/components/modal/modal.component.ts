import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { type ModalConfig } from './modal-config.model';
import { MODAL_COMPONENT_DATA, ModalService } from './modal.service';

@Component({
  selector: 'ed-craft-modal',
  templateUrl: './modal.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit {
  @ViewChild('modalBackdrop')
  private _modalBackdrop!: ElementRef<HTMLDivElement>;
  @ViewChild('modalContainer')
  private _modalContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('componentContainer', { read: ViewContainerRef })
  private _componentContainer!: ViewContainerRef;
  public modalConfig!: ModalConfig | null;

  constructor(
    public modalService: ModalService,
    private _injector: Injector,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.modalService.modalConfig$.subscribe((config) => {
      this._changeDetectorRef.markForCheck();
      this.modalConfig = config;
      this._componentContainer.clear();
      if (!config.show) {
        this._closeModal();
        return;
      }

      // RENDER COMPONENT
      const { component, componentData } = config;
      const injector = Injector.create({
        providers: [
          {
            provide: MODAL_COMPONENT_DATA,
            useValue: componentData,
          },
        ],
        parent: this._injector,
      });
      this._componentContainer.createComponent(component, { injector });
      this._showModal();
    });
  }

  private _closeModal(): void {
    this._modalBackdrop.nativeElement.classList.add('hidden');
    this._modalContainer.nativeElement.classList.add('hidden');
    this._modalContainer.nativeElement.classList.remove('flex');
  }

  private _showModal(): void {
    this._modalBackdrop.nativeElement.classList.remove('hidden');
    this._modalContainer.nativeElement.classList.remove('hidden');
    this._modalContainer.nativeElement.classList.add('flex');
  }
}
