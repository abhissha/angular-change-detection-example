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
    if(this.ponyModel.color === "black"){
      return "https://upload.wikimedia.org/wikipedia/commons/a/a1/Champion_Dales_Pony.jpg";
    }
    if(this.ponyModel.color === "brown"){
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcfGXHzVWGnDFd2aGlnLO2JkxRN6txV82k-deqnWjvxmG4Ykg";
    }
    if(this.ponyModel.color === "white"){
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3YKMlf9MpIf8EWcveywkwmHcFHUSKZIVF-xFhBrIAcd8JCeQ";
    }
  }
}
