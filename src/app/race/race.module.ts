import { NgModule } from '@angular/core';

import { PonyComponent  } from '@app/race/pony/pony.component';
import { RaceComponent } from '@app/race/race/race.component';
import { ImageComponent } from '@app/race/image/image.component';
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [RaceComponent, PonyComponent, ImageComponent],
  exports: [RaceComponent],
  imports: [
    CommonModule  
  ]
})
export class RaceModule { }
