import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[edCraftCardFooter]',
})
export class CardFooterDirective {
  @HostBinding('edCraftCardFooter')
  @Input('edCraftCardFooter')
  public cardFooter = '';
}
