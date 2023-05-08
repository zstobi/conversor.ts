import { Component } from '@angular/core';
import { AvoidCharsService } from 'src/app/services/avoid-chars.service';
import { WordPickerService } from 'src/app/services/word-picker.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent {
  d = '';
  h = '';
  m = '';
  s = '';

  constructor (
    private inputSvce:AvoidCharsService,
    public pickSvce:WordPickerService
  ) { }

  ngOnInit(){
    this.inputSvce.inputsPrevents();
  }

  dH(){
    if (typeof this.d === 'number') {
      return this.d * 24;
    } else {
      return undefined;
    }
  }

  dM(){
    if (typeof this.d === 'number') {
      return this.d * 1440;
    } else {
      return undefined;
    }
  }

  dS(){
    if (typeof this.d === 'number') {
      return this.d * 86400;
    } else {
      return undefined;
    }
  }

  hD(){
    if (typeof this.h === 'number') {
      return this.h / 24;
    } else {
      return undefined;
    }
  }

  hM(){
    if (typeof this.h === 'number') {
      return this.h * 60;
    } else {
      return undefined;
    }
  }

  hS(){
    if (typeof this.h === 'number') {
      return this.h * 3600;
    } else {
      return undefined;
    }
  }

  mD(){
    if (typeof this.m === 'number') {
      return this.m / 1440;
    } else {
      return undefined;
    }
  }

  mH(){
    if (typeof this.m === 'number') {
      return this.m / 60;
    } else {
      return undefined;
    }
  }

  mS(){
    if (typeof this.m === 'number') {
      return this.m * 60;
    } else {
      return undefined;
    }
  }

  sD(){
    if (typeof this.s === 'number') {
      return this.s / 86400;
    } else {
      return undefined;
    }
  }

  sH(){
    if (typeof this.s === 'number') {
      return this.s / 3600;
    } else {
      return undefined;
    }
  }

  sM(){
    if (typeof this.s === 'number') {
      return this.s / 60;
    } else {
      return undefined;
    }
  }

  resetOthers(a:any,b:any,c:any){
    if (a === this.d || b === this.d || c === this.d) this.d = '';
    if (a === this.h || b === this.h || c === this.h) this.h = '';
    if (a === this.m || b === this.m || c === this.m) this.m = '';
    if (a === this.s || b === this.s || c === this.s) this.s = '';
  }
}
