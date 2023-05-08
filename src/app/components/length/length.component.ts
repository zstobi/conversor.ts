import { Component } from '@angular/core';
import { AvoidCharsService } from 'src/app/services/avoid-chars.service';
import { WordPickerService } from 'src/app/services/word-picker.service';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.scss']
})
export class LengthComponent {
  kilo = '';
  meter = '';
  centi = '';
  mile = '';
  yard = '';
  feet = '';
  inch = '';

  constructor (
    private inputSvce:AvoidCharsService,
    public pickSvce:WordPickerService
  ) { }

  ngOnInit(){
    this.inputSvce.inputsPrevents();
  }

  kiloMeter(){
    if (typeof this.kilo === 'number') {
      return this.kilo * 1000;
    } else {
      return undefined;
    }
  }

  kiloCenti(){
    if (typeof this.kilo === 'number') {
      return this.kilo * 100000;
    } else {
      return undefined;
    }
  }

  kiloMile(){
    if (typeof this.kilo === 'number') {
      return this.kilo / 1.609;
    } else {
      return undefined;
    }
  }

  kiloYard(){
    if (typeof this.kilo === 'number') {
      return this.kilo * 1094;
    } else {
      return undefined;
    }
  }

  kiloFeet(){
    if (typeof this.kilo === 'number') {
      return this.kilo * 3281;
    } else {
      return undefined;
    }
  }

  kiloInch(){
    if (typeof this.kilo === 'number') {
      return this.kilo * 39370;
    } else {
      return undefined;
    }
  }

  meterKilo(){
    if (typeof this.meter === 'number') {
      return this.meter / 1000;
    } else {
      return undefined;
    }
  }

  meterCenti(){
    if (typeof this.meter === 'number') {
      return this.meter * 100;
    } else {
      return undefined;
    }
  }

  meterMile(){
    if (typeof this.meter === 'number') {
      return this.meter / 1609;
    } else {
      return undefined;
    }
  }

  meterYard(){
    if (typeof this.meter === 'number') {
      return this.meter * 1.094;
    } else {
      return undefined;
    }
  }

  meterFeet(){
    if (typeof this.meter === 'number') {
      return this.meter * 3.281;
    } else {
      return undefined;
    }
  }

  meterInch(){
    if (typeof this.meter === 'number') {
      return this.meter * 39.37;
    } else {
      return undefined;
    }
  }

  centiKilo(){
    if (typeof this.centi === 'number') {
      return this.centi / 100000;
    } else {
      return undefined;
    }
  }

  centiMeter(){
    if (typeof this.centi === 'number') {
      return this.centi / 100;
    } else {
      return undefined;
    }
  }

  centiMile(){
    if (typeof this.centi === 'number') {
      return this.centi / 160900;
    } else {
      return undefined;
    }
  }

  centiYard(){
    if (typeof this.centi === 'number') {
      return this.centi / 91.44;
    } else {
      return undefined;
    }
  }

  centiFeet(){
    if (typeof this.centi === 'number') {
      return this.centi / 30.48;
    } else {
      return undefined;
    }
  }

  centiInch(){
    if (typeof this.centi === 'number') {
      return this.centi / 2.54;
    } else {
      return undefined;
    }
  }

  mileKilo(){
    if (typeof this.mile === 'number') {
      return this.mile * 1.609;
    } else {
      return undefined;
    }
  }

  mileMeter(){
    if (typeof this.mile === 'number') {
      return this.mile * 1609;
    } else {
      return undefined;
    }
  }

  mileCenti(){
    if (typeof this.mile === 'number') {
      return this.mile * 160900;
    } else {
      return undefined;
    }
  }

  mileYard(){
    if (typeof this.mile === 'number') {
      return this.mile * 1760;
    } else {
      return undefined;
    }
  }

  mileFeet(){
    if (typeof this.mile === 'number') {
      return this.mile * 5280;
    } else {
      return undefined;
    }
  }

  mileInch(){
    if (typeof this.mile === 'number') {
      return this.mile * 63360;
    } else {
      return undefined;
    }
  }

  yardKilo(){
    if (typeof this.yard === 'number') {
      return this.yard / 1094;
    } else {
      return undefined;
    }
  }

  yardMeter(){
    if (typeof this.yard === 'number') {
      return this.yard / 1.094;
    } else {
      return undefined;
    }
  }

  yardCenti(){
    if (typeof this.yard === 'number') {
      return this.yard * 91.44;
    } else {
      return undefined;
    }
  }

  yardMile(){
    if (typeof this.yard === 'number') {
      return this.yard / 1760;
    } else {
      return undefined;
    }
  }

  yardFeet(){
    if (typeof this.yard === 'number') {
      return this.yard * 3;
    } else {
      return undefined;
    }
  }

  yardInch(){
    if (typeof this.yard === 'number') {
      return this.yard * 36;
    } else {
      return undefined;
    }
  }

  feetKilo(){
    if (typeof this.feet === 'number') {
      return this.feet / 3281;
    } else {
      return undefined;
    }
  }

  feetMeter(){
    if (typeof this.feet === 'number') {
      return this.feet / 3.281;
    } else {
      return undefined;
    }
  }

  feetCenti(){
    if (typeof this.feet === 'number') {
      return this.feet * 30.48;
    } else {
      return undefined;
    }
  }

  feetMile(){
    if (typeof this.feet === 'number') {
      return this.feet / 5280;
    } else {
      return undefined;
    }
  }

  feetYard(){
    if (typeof this.feet === 'number') {
      return this.feet / 3;
    } else {
      return undefined;
    }
  }

  feetInch(){
    if (typeof this.feet === 'number') {
      return this.feet * 12;
    } else {
      return undefined;
    }
  }

  inchKilo(){
    if (typeof this.inch === 'number') {
      return this.inch / 39370;
    } else {
      return undefined;
    }
  }

  inchMeter(){
    if (typeof this.inch === 'number') {
      return this.inch / 39.37;
    } else {
      return undefined;
    }
  }

  inchCenti(){
    if (typeof this.inch === 'number') {
      return this.inch * 2.54;
    } else {
      return undefined;
    }
  }

  inchMile(){
    if (typeof this.inch === 'number') {
      return this.inch / 63360;
    } else {
      return undefined;
    }
  }

  inchYard(){
    if (typeof this.inch === 'number') {
      return this.inch / 36;
    } else {
      return undefined;
    }
  }

  inchFeet(){
    if (typeof this.inch === 'number') {
      return this.inch / 12;
    } else {
      return undefined;
    }
  }

  resetOthers(a:any,b:any,c:any,d:any,e:any,f:any){
    if (a === this.kilo || b === this.kilo || c === this.kilo || d === this.kilo || e === this.kilo || f === this.kilo) this.kilo = '';
    if (a === this.meter || b === this.meter || c === this.meter || d === this.meter || e === this.meter || f === this.meter)  this.meter = '';
    if (a === this.kilo || b === this.kilo || c === this.kilo || d === this.kilo || e === this.kilo || f === this.kilo)  this.kilo = '';
    if (a === this.mile || b === this.mile || c === this.mile || d === this.mile || e === this.mile || f === this.mile)  this.mile = '';
    if (a === this.yard || b === this.yard || c === this.yard || d === this.yard || e === this.yard || f === this.yard)  this.yard = '';
    if (a === this.feet || b === this.feet || c === this.feet || d === this.feet || e === this.feet || f === this.feet)  this.feet = '';
    if (a === this.inch || b === this.inch || c === this.inch || d === this.inch || e === this.inch || f === this.inch)  this.inch = '';
  }
}
