import { Component } from '@angular/core';
import { WordPickerService } from 'src/app/services/word-picker.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor (
    public pickSvce:WordPickerService
  ) {}
}
