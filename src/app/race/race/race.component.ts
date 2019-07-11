import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PonyModel } from "../shared/pony.model";

@Component({
  selector: 'ns-race',
  template: `
    <a href="https://blog.ninja-squad.com/2018/09/27/angular-performances-part-4/">Reference</a>
    <div class="container">    
      <h2>Race</h2>
      <p>{{ check() }}</p>
      <div class="row">
        <div *ngFor="let pony of ponies" class="col">
          <ns-pony [ponyModel]="pony"></ns-pony>
        </div>
      </div>
      <button class="btn btn-primary" (click)="changeColor()">Change color</button>
    </div>
  `
  //,changeDetection: ChangeDetectionStrategy.OnPush
})
export class RaceComponent {

  ponies: Array<PonyModel> = [{ id: 1, color: 'brown' }, { id: 2, color: 'black' }];
  colors: Array<string> = ['brown', 'white'];
  randomNumber: number = 0;

  check() {
    console.log('race component view checked');
  }

  changeColor() {
    this.ponies[0].color = this.randomColor();
    //let firstPony = this.ponies[0];
    //this.ponies[0] = {id: firstPony.id, color: this.randomColor()};
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