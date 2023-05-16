import { Component } from '@angular/core';
import { AvoidCharsService } from 'src/app/services/avoid-chars.service';
import { WordPickerService } from 'src/app/services/word-picker.service';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.scss']
})
export class SpeedComponent {
  kph = '';
  m = '';
  k = '';

  constructor (
    private inputSvce:AvoidCharsService,
    public pickSvce:WordPickerService
  ) { }

  ngOnInit(){
    this.inputSvce.inputsPrevents();
  }

  kphM(){
    if (typeof this.kph === 'number') {
      return this.kph / 1.609;
    } else {
      return undefined;
    }
  }

  kphK(){
    if (typeof this.kph === 'number') {
      return this.kph / 1.852;
    } else {
      return undefined;
    }
  }

  mKph(){
    if (typeof this.m === 'number') {
      return this.m * 1.609;
    } else {
      return undefined;
    }
  }

  mK(){
    if (typeof this.m === 'number') {
      return this.m / 1.151;
    } else {
      return undefined;
    }
  }

  kKph(){
    if (typeof this.k === 'number') {
      return this.k * 1.852;
    } else {
      return undefined;
    }
  }

  kM(){
    if (typeof this.k === 'number') {
      return this.k * 1.151;
    } else {
      return undefined;
    }
  }

  resetOthers(a:any,b:any){
    if (a === this.kph || b === this.kph) this.kph = '';
    if (a === this.m || b === this.m) this.m = '';
    if (a === this.k || b === this.k) this.k = '';
  }

  // kphWithS():string{
  //   if (this.kph === 1){
  //     return 'Kilometer per Hour';
  //   } else {
  //     return 'Kilometers per Hour'
  //   }
  // }

  // mphWithS(){
  //   if (this.m === 1){
  //     return 'Mile per Hour';
  //   } else {
  //     return 'Miles per Hour';
  //   }
  // }
}
