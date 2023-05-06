import { Component } from '@angular/core';
import { IdiomChangeService } from 'src/app/services/idiom-change.service';
import { WordPickerService } from 'src/app/services/word-picker.service';
import { idiom } from 'src/app/var';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor (
    private idiomSvce:IdiomChangeService,
    public pickSvce:WordPickerService
  ) {

  }

  toggleIdiom(){
    if (this.idiomSvce.checkCurrentIdiom() === 1){
      idiom.current = 'spanish';
    } else {
      idiom.current = 'english';
    }
  }
}
