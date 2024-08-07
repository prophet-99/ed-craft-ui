import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[edCraftCardThumbnail]',
})
export class CardThumbnailDirective {
  @HostBinding('edCraftCardThumbnail')
  @Input('edCraftCardThumbnail')
  public cardThumbnail = '';
}
