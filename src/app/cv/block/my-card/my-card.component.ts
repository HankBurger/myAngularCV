import { Component, Input } from '@angular/core';
import { CardContent } from 'src/app/module';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent {
  @Input() cardContent: CardContent[];

  getCardSize(tmp: CardContent): string {
    if (tmp.colSize) {
      return 'col-md-' + tmp.colSize + ' col-sm-12';
    }
    return 'col-md-12 col-sm-12';
  }
}


