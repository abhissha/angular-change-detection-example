import { NgModule } from '@angular/core';

import { PonyComponent  } from "./pony/pony.component";
import { RaceComponent } from './race/race.component';
import { ImageComponent } from './image/image.component';
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [RaceComponent, PonyComponent, ImageComponent],
  exports: [RaceComponent],
  imports: [
    CommonModule  
  ]
})
export class RaceModule { }
