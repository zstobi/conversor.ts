import { Component } from '@angular/core';
import { AvoidCharsService } from 'src/app/services/avoid-chars.service';
import { WordPickerService } from 'src/app/services/word-picker.service';

@Component({
  selector: 'app-dsize',
  templateUrl: './dsize.component.html',
  styleUrls: ['./dsize.component.scss']
})
export class DsizeComponent {
  bit = '';
  byte = '';
  kilo = '';
  mega = '';
  giga = '';
  tera = '';
  peta = '';

  constructor (
    private inputSvce:AvoidCharsService,
    public pickSvce:WordPickerService
  ) { }

  ngOnInit(){
    this.inputSvce.inputsPrevents();
  }

  bitByte(){
    if (typeof this.bit === 'number') {
      return this.bit / 8;
    } else {
      return undefined;
    }
  }

  bitKilo(){
    if (typeof this.bit === 'number') {
      return this.bit / 8000;
    } else {
      return undefined;
    }
  }

  bitMega(){
    if (typeof this.bit === 'number') {
      return this.bit / 8e+6;
    } else {
      return undefined;
    }
  }

  bitGiga(){
    if (typeof this.bit === 'number') {
      return this.bit / 8e+9;
    } else {
      return undefined;
    }
  }

  bitTera(){
    if (typeof this.bit === 'number') {
      return this.bit / 8e+12;
    } else {
      return undefined;
    }
  }

  bitPeta(){
    if (typeof this.bit === 'number') {
      return this.bit / 8e+15;
    } else {
      return undefined;
    }
  }

  byteBit(){
    if (typeof this.byte === 'number') {
      return this.byte * 8;
    } else {
      return undefined;
    }
  }

  byteKilo(){
    if (typeof this.byte === 'number') {
      return this.byte / 1000;
    } else {
      return undefined;
    }
  }

  byteMega(){
    if (typeof this.byte === 'number') {
      return this.byte / 1e+6;
    } else {
      return undefined;
    }
  }

  byteGiga(){
    if (typeof this.byte === 'number') {
      return this.byte / 1e+9;
    } else {
      return undefined;
    }
  }

  byteTera(){
    if (typeof this.byte === 'number') {
      return this.byte / 1e+12;
    } else {
      return undefined;
    }
  }

  bytePeta(){
    if (typeof this.byte === 'number') {
      return this.byte / 1e+15;
    } else {
      return undefined;
    }
  }

  kiloBit(){
    if (typeof this.kilo === 'number') {
      return this.kilo * 8000;
    } else {
      return undefined;
    }
  }

  kiloByte(){
    if (typeof this.kilo === 'number') {
      return this.kilo * 1000;
    } else {
      return undefined;
    }
  }

  kiloMega(){
    if (typeof this.kilo === 'number') {
      return this.kilo / 1000;
    } else {
      return undefined;
    }
  }

  kiloGiga(){
    if (typeof this.kilo === 'number') {
      return this.kilo / 1e+6;
    } else {
      return undefined;
    }
  }

  kiloTera(){
    if (typeof this.kilo === 'number') {
      return this.kilo / 1e+9;
    } else {
      return undefined;
    }
  }

  kiloPeta(){
    if (typeof this.kilo === 'number') {
      return this.kilo / 1e+12;
    } else {
      return undefined;
    }
  }

  megaBit(){
    if (typeof this.mega === 'number') {
      return this.mega * 8e+6;
    } else {
      return undefined;
    }
  }

  megaByte(){
    if (typeof this.mega === 'number') {
      return this.mega * 1e+6;
    } else {
      return undefined;
    }
  }

  megaKilo(){
    if (typeof this.mega === 'number') {
      return this.mega * 1000;
    } else {
      return undefined;
    }
  }

  megaGiga(){
    if (typeof this.mega === 'number') {
      return this.mega / 1000;
    } else {
      return undefined;
    }
  }

  megaTera(){
    if (typeof this.mega === 'number') {
      return this.mega / 1e+6;
    } else {
      return undefined;
    }
  }

  megaPeta(){
    if (typeof this.mega === 'number') {
      return this.mega / 1e+9;
    } else {
      return undefined;
    }
  }

  gigaBit(){
    if (typeof this.giga === 'number') {
      return this.giga * 8e+9;
    } else {
      return undefined;
    }
  }

  gigaByte(){
    if (typeof this.giga === 'number') {
      return this.giga * 1e+9;
    } else {
      return undefined;
    }
  }

  gigaKilo(){
    if (typeof this.giga === 'number') {
      return this.giga * 1e+6;
    } else {
      return undefined;
    }
  }

  gigaMega(){
    if (typeof this.giga === 'number') {
      return this.giga * 1000;
    } else {
      return undefined;
    }
  }

  gigaTera(){
    if (typeof this.giga === 'number') {
      return this.giga / 1000;
    } else {
      return undefined;
    }
  }

  gigaPeta(){
    if (typeof this.giga === 'number') {
      return this.giga / 1e+6;
    } else {
      return undefined;
    }
  }

  teraBit(){
    if (typeof this.tera === 'number') {
      return this.tera * 8e+12;
    } else {
      return undefined;
    }
  }

  teraByte(){
    if (typeof this.tera === 'number') {
      return this.tera * 1e+12;
    } else {
      return undefined;
    }
  }

  teraKilo(){
    if (typeof this.tera === 'number') {
      return this.tera * 1e+9;
    } else {
      return undefined;
    }
  }

  teraMega(){
    if (typeof this.tera === 'number') {
      return this.tera * 1e+6;
    } else {
      return undefined;
    }
  }

  teraGiga(){
    if (typeof this.tera === 'number') {
      return this.tera * 1000;
    } else {
      return undefined;
    }
  }

  teraPeta(){
    if (typeof this.tera === 'number') {
      return this.tera / 1000;
    } else {
      return undefined;
    }
  }

  petaBit(){
    if (typeof this.peta === 'number') {
      return this.peta * 8e+15;
    } else {
      return undefined;
    }
  }

  petaByte(){
    if (typeof this.peta === 'number') {
      return this.peta * 1e+15;
    } else {
      return undefined;
    }
  }

  petaKilo(){
    if (typeof this.peta === 'number') {
      return this.peta * 1e+12;
    } else {
      return undefined;
    }
  }

  petaMega(){
    if (typeof this.peta === 'number') {
      return this.peta * 1e+9;
    } else {
      return undefined;
    }
  }

  petaGiga(){
    if (typeof this.peta === 'number') {
      return this.peta * 1e+6;
    } else {
      return undefined;
    }
  }

  petaTera(){
    if (typeof this.peta === 'number') {
      return this.peta * 1000;
    } else {
      return undefined;
    }
  }

  resetOthers(a:any,b:any,c:any,d:any,e:any,f:any){
    if (a === this.bit || b === this.bit || c === this.bit || d === this.bit || e === this.bit || f === this.bit) this.bit = '';
    if (a === this.byte || b === this.byte || c === this.byte || d === this.byte || e === this.byte || f === this.byte)  this.byte = '';
    if (a === this.kilo || b === this.kilo || c === this.kilo || d === this.kilo || e === this.kilo || f === this.kilo)  this.kilo = '';
    if (a === this.mega || b === this.mega || c === this.mega || d === this.mega || e === this.mega || f === this.mega)  this.mega = '';
    if (a === this.giga || b === this.giga || c === this.giga || d === this.giga || e === this.giga || f === this.giga)  this.giga = '';
    if (a === this.tera || b === this.tera || c === this.tera || d === this.tera || e === this.tera || f === this.tera)  this.tera = '';
    if (a === this.peta || b === this.peta || c === this.peta || d === this.peta || e === this.peta || f === this.peta)  this.peta = '';
  }
}
