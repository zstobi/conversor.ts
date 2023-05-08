import { Component } from '@angular/core';
import { AvoidCharsService } from 'src/app/services/avoid-chars.service';
import { WordPickerService } from 'src/app/services/word-picker.service';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.scss']
})
export class VolumeComponent {
  l = '';
  m = '';
  g = '';
  cm = '';
  bigC = '';
  smallC = '';

  constructor (
    private inputSvce:AvoidCharsService,
    public pickSvce:WordPickerService
  ) { }

  ngOnInit(){
    this.inputSvce.inputsPrevents();
  }

  lM(){
    if (typeof this.l === 'number') {
      return this.l * 1000;
    } else {
      return undefined;
    }
  }

  lG(){
    if (typeof this.l === 'number') {
      return this.l / 3.785;
    } else {
      return undefined;
    }
  }

  lCm(){
    if (typeof this.l === 'number') {
      return this.l / 1000;
    } else {
      return undefined;
    }
  }

  lBigC(){
    if (typeof this.l === 'number') {
      return this.l * 67.628;
    } else {
      return undefined;
    }
  }

  lSmallC(){
    if (typeof this.l === 'number') {
      return this.l * 202.9;
    } else {
      return undefined;
    }
  }

  mL(){
    if (typeof this.m === 'number') {
      return this.m / 1000;
    } else {
      return undefined;
    }
  }

  mG(){
    if (typeof this.m === 'number') {
      return this.m / 3785;
    } else {
      return undefined;
    }
  }

  mCm(){
    if (typeof this.m === 'number') {
      return this.m / 1e+6;
    } else {
      return undefined;
    }
  }

  mBigC(){
    if (typeof this.m === 'number') {
      return this.m / 14.787;
    } else {
      return undefined;
    }
  }

  mSmallC(){
    if (typeof this.m === 'number') {
      return this.m / 4.929;
    } else {
      return undefined;
    }
  }

  gL(){
    if (typeof this.g === 'number') {
      return this.g * 3.785;
    } else {
      return undefined;
    }
  }

  gM(){
    if (typeof this.g === 'number') {
      return this.g * 3785;
    } else {
      return undefined;
    }
  }

  gCm(){
    if (typeof this.g === 'number') {
      return this.g / 264.2;
    } else {
      return undefined;
    }
  }

  gBigC(){
    if (typeof this.g === 'number') {
      return this.g * 256;
    } else {
      return undefined;
    }
  }

  gSmallC(){
    if (typeof this.g === 'number') {
      return this.g * 768;
    } else {
      return undefined;
    }
  }

  cmL(){
    if (typeof this.cm === 'number') {
      return this.cm * 1000;
    } else {
      return undefined;
    }
  }

  cmM(){
    if (typeof this.cm === 'number') {
      return this.cm * 1e+6;
    } else {
      return undefined;
    }
  }

  cmG(){
    if (typeof this.cm === 'number') {
      return this.cm * 264.2;
    } else {
      return undefined;
    }
  }

  cmBigC(){
    if (typeof this.cm === 'number') {
      return this.cm * 67630;
    } else {
      return undefined;
    }
  }

  cmSmallC(){
    if (typeof this.cm === 'number') {
      return this.cm * 202900;
    } else {
      return undefined;
    }
  }

  bigcL(){
    if (typeof this.bigC === 'number') {
      return this.bigC / 67.628;
    } else {
      return undefined;
    }
  }

  bigcM(){
    if (typeof this.bigC === 'number') {
      return this.bigC * 14.787;
    } else {
      return undefined;
    }
  }

  bigcG(){
    if (typeof this.bigC === 'number') {
      return this.bigC / 256;
    } else {
      return undefined;
    }
  }

  bigcCm(){
    if (typeof this.bigC === 'number') {
      return this.bigC / 67630;
    } else {
      return undefined;
    }
  }

  bigcSmallC(){
    if (typeof this.bigC === 'number') {
      return this.bigC * 3;
    } else {
      return undefined;
    }
  }

  smallcL(){
    if (typeof this.smallC === 'number') {
      return this.smallC / 202.9;
    } else {
      return undefined;
    }
  }

  smallcM(){
    if (typeof this.smallC === 'number') {
      return this.smallC * 4.929;
    } else {
      return undefined;
    }
  }

  smallcG(){
    if (typeof this.smallC === 'number') {
      return this.smallC / 768;
    } else {
      return undefined;
    }
  }

  smallcCm(){
    if (typeof this.smallC === 'number') {
      return this.smallC / 202900;
    } else {
      return undefined;
    }
  }

  smallcBigC(){
    if (typeof this.smallC === 'number') {
      return this.smallC / 3;
    } else {
      return undefined;
    }
  }

  resetOthers(a:any,b:any,c:any,d:any,e:any){
    if (a === this.l || b === this.l || c === this.l || d === this.l || e === this.l) this.l = '';
    if (a === this.m || b === this.m || c === this.m || d === this.m || e === this.m)  this.m = '';
    if (a === this.g || b === this.g || c === this.g || d === this.g || e === this.g)  this.g = '';
    if (a === this.cm || b === this.cm || c === this.cm || d === this.cm || e === this.cm)  this.cm = '';
    if (a === this.bigC || b === this.bigC || c === this.bigC || d === this.bigC || e === this.bigC)  this.bigC = '';
    if (a === this.smallC || b === this.smallC || c === this.smallC || d === this.smallC || e === this.smallC)  this.smallC = '';
  }
}
