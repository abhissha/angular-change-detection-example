import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { PonyModel } from '@app/race/shared/pony.model';

@Component({
  selector: 'ns-pony',
  template: `
    <p>{{ check() }}</p>
    <ns-img [src]="getPonyImageUrl()"></ns-img>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
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
