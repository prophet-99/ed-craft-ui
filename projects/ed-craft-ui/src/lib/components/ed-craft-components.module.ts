import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { CardThumbnailDirective } from './card/card-thumbnail.directive';
import { CardFooterDirective } from './card/card-footer.directive';
import { ModalComponent } from './modal/modal.component';
import { InteractiveChartComponent } from './interactive-chart/interactive-chart.component';

@NgModule({
  declarations: [
    CardComponent,
    CardFooterDirective,
    CardThumbnailDirective,
    ModalComponent,
    InteractiveChartComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    CardFooterDirective,
    CardThumbnailDirective,
    ModalComponent,
    InteractiveChartComponent,
  ],
})
export class EdCraftComponentsModule {}
