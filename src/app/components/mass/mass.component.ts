import { Component } from '@angular/core';

@Component({
  selector: 'app-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.scss']
})
export class MassComponent {
  kg = '';
  g = '';
  pounds = '';
  tons = '';

  kgGram(){
    if (typeof this.kg === 'number') {
      return this.kg * 1000;
    } else {
      return undefined;
    }
  }

  kgPound(){
    if (typeof this.kg === 'number') {
      return this.kg * 2.20462;
    } else {
      return undefined;
    }
  }

  kgTon(){
    if (typeof this.kg === 'number') {
      return this.kg / 1000;
    } else {
      return undefined;
    }
  }

  gKg(){
    if (typeof this.g === 'number') {
      return this.g / 1000;
    } else {
      return undefined;
    }
  }

  gPound(){
    if (typeof this.g === 'number') {
      return this.g / 454;
    } else {
      return undefined;
    }
  }

  gTon(){
    if (typeof this.g === 'number') {
      return this.g / 1e+6;
    } else {
      return undefined;
    }
  }

  poundKg(){
    if (typeof this.pounds === 'number') {
      return this.pounds / 2.20462;
    } else {
      return undefined;
    }
  }

  poundG(){
    if (typeof this.pounds === 'number') {
      return this.pounds * 454;
    } else {
      return undefined;
    }
  }

  poundTon(){
    if (typeof this.pounds === 'number') {
      return this.pounds / 2205;
    } else {
      return undefined;
    }
  }

  tonKg(){
    if (typeof this.tons === 'number') {
      return this.tons * 1000;
    } else {
      return undefined;
    }
  }

  tonG(){
    if (typeof this.tons === 'number') {
      return this.tons * 1e+6;
    } else {
      return undefined;
    }
  }

  tonPound(){
    if (typeof this.tons === 'number') {
      return this.tons * 2205;
    } else {
      return undefined;
    }
  }

  resetOthers(a:any,b:any,c:any){
    if (a === this.kg || b === this.kg || c === this.kg) this.kg = '';
    if (a === this.g || b === this.g || c === this.g) this.g = '';
    if (a === this.pounds || b === this.pounds || c === this.pounds) this.pounds = '';
    if (a === this.tons || b === this.tons || c === this.tons) this.tons = '';
  }
}
