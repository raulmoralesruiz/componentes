import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { GridPageRoutingModule } from './grid-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { GridPage } from './grid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [GridPage]
})
export class GridPageModule {}
