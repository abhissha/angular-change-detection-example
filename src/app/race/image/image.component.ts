import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ns-img',
  template: `
      <p>{{ check() }}</p>
      <img [src]="src" style="height: 200px; width: 200px">
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent {
  @Input() src: string;

  check() {
      console.log('image component view checked');
  }
}
