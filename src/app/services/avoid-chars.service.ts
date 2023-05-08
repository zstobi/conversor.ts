import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvoidCharsService {

  constructor() { }

  inputsPrevents(){
    const inputs = document.querySelectorAll('input');

    for (let i = 0; i <= 4; i++){
      inputs[i]?.addEventListener('keypress',(e)=>{
        if (e.key === '-' || e.key === ','){
          e.preventDefault();
        }
      });
      inputs[i]?.addEventListener('paste',(e)=>{
        if (e.clipboardData?.getData('text/plain').includes('-') || e.clipboardData?.getData('text/plain').includes(',')){
          e.preventDefault();
        };
      });
    }
  }
}
