import { Component } from '@angular/core';
import { WordPickerService } from 'src/app/services/word-picker.service';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent {
  c = '';
  f = '';
  k = '';

  constructor (
    public pickSvce:WordPickerService
  ) { }

  cF(){
    if (typeof this.c === 'number') {
      return (this.c * (9/5)) + 32;
    } else {
      return undefined;
    }
  }

  cK(){
    if (typeof this.c === 'number') {
      return this.c + 273.15;
    } else {
      return undefined;
    }
  }

  fC(){
    if (typeof this.f === 'number') {
      return (this.f - 32) * (5/9);
    } else {
      return undefined;
    }
  }

  fK(){
    if (typeof this.f === 'number') {
      return ((this.f - 32) * (5/9)) + 273.15;
    } else {
      return undefined;
    }
  }

  kC(){
    if (typeof this.k === 'number') {
      return this.k - 273.15;
    } else {
      return undefined;
    }
  }

  kF(){
    if (typeof this.k === 'number') {
      return ((this.k - 273.15) * (9/5) + 32);
    } else {
      return undefined;
    }
  }

  resetOthers(a:any,b:any){
    if (a === this.c || b === this.c) this.c = '';
    if (a === this.f || b === this.f) this.f = '';
    if (a === this.k || b === this.k) this.k = '';
  }
}
