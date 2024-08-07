import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  Input,
} from '@angular/core';
import { CardFooterDirective } from './card-footer.directive';
import { CardThumbnailDirective } from './card-thumbnail.directive';

@Component({
  selector: 'ed-craft-card',
  templateUrl: './card.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements AfterContentInit {
  @Input({ required: true }) public classification!: string;
  @ContentChild(CardThumbnailDirective, { read: ElementRef })
  public thumbnailProjection!: ElementRef;
  @ContentChild(CardFooterDirective, { read: ElementRef })
  public footerProjection!: ElementRef;
  public showThumbnail = true;
  public showFooter = true;

  ngAfterContentInit(): void {
    if (!this.thumbnailProjection) this.showThumbnail = false;
    if (!this.footerProjection) this.showFooter = false;
  }
}
