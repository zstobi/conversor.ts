import { Injectable } from '@angular/core';
import { idiom } from '../var';

@Injectable({
  providedIn: 'root'
})
export class WordPickerService {

  constructor() { }

  picker(a:string,b:string):string{
    if (idiom.current === 'english'){
      return a;
    } else {
      return b;
    }
  }
}
