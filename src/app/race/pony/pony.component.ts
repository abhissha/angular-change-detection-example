import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { PonyModel } from "../shared/pony.model"

@Component({
  selector: 'ns-pony',
  template: `
  <div class="card" style="width: 20rem;">
    <ns-img [src]="getPonyImageUrl()"></ns-img>
    <div class="card-body">
      <p>{{ check() }}</p>
      <h5 class="card-title">{{ponyModel?.id}}</h5>
      <p class="card-text">Some Pony</p>
    </div>
</div>    
  `
  //,changeDetection: ChangeDetectionStrategy.OnPush
})
export class PonyComponent {
  @Input() ponyModel: PonyModel;

  check() {
    console.log('pony component view checked');
  }

  getPonyImageUrl() {
    return `assets/images/pony-${this.ponyModel.color}-running.gif`;
  }
}
