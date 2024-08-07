import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EdCraftComponentsModule } from '@ed-craft-ui';
import { MockModalComponent } from './mock-modal/mock-modal.component';

@NgModule({
  declarations: [AppComponent, MockModalComponent],
  imports: [BrowserModule, AppRoutingModule, EdCraftComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
