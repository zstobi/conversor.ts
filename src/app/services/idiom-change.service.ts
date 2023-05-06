import { Injectable } from '@angular/core';
import { idiom } from '../var';

@Injectable({
  providedIn: 'root'
})
export class IdiomChangeService {

  constructor() { }

  checkCurrentIdiom():number{
    if (idiom.current === 'english'){
      return 1;
    } else {
      return 0;
    }
  }
}
