import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PonyModel } from '@app/race/shared/pony.model';

@Component({
  selector: 'ns-race',
  template: `
    <a href="https://blog.ninja-squad.com/2018/09/27/angular-performances-part-4/">Reference</a>
    <h2>Race</h2>
    <p>{{ check() }}</p>
    <div *ngFor="let pony of ponies">
      <ns-pony [ponyModel]="pony"></ns-pony>
    </div>
    <button (click)="changeColor()">Change color</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaceComponent {

  ponies: Array<PonyModel> = [{ id: 1, color: 'green' }, { id: 2, color: 'orange' }];
  colors: Array<string> = ['green', 'orange'];
  randomNumber: number = 0;

  check() {
    console.log('race component view checked');
  }

  changeColor() {
    // this.ponies[0].color = this.randomColor();
    let firstPony = this.ponies[0];
    this.ponies[0] = {id: firstPony.id, color: this.randomColor()};
  }

  randomColor() {
    if(this.randomNumber === 0) {
      this.randomNumber = 1;
      return this.colors[1];      
    }
    this.randomNumber = 0;
    return this.colors[0];
  }
}