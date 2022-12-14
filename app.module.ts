import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAccordion, MatExpansionModule, MatSliderModule } from '@angular/material';
import { ButtonsModule } from './buttons/buttons.module';
import { SnackBarsModule } from './snack-bars/snack-bars.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { ProgressBarModule } from './progress-bar/progress-bar.module';
import { TabsModule } from './tabs/tabs.module';
import { TreeModule } from './tree/tree.module';
import { ChipsModule } from './chips/chips.module';
import { DialogModule } from './dialog/dialog.module';
import { LogPipe } from './log.pipe';

export const materialModules = [
  MatSliderModule,
  MatExpansionModule
];
export const myModules = [
  ButtonsModule,
  SnackBarsModule,
  TooltipModule,
  ProgressBarModule,
  TabsModule,
  TreeModule,
  ChipsModule,
  DialogModule
];

@NgModule({
  declarations: [
    AppComponent,
    LogPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    materialModules,
    myModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
