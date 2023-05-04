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
}
