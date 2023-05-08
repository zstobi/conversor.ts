import { Component } from '@angular/core';
import { WordPickerService } from 'src/app/services/word-picker.service';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {

  constructor (
    public pickSvce:WordPickerService
  ) { }

}
