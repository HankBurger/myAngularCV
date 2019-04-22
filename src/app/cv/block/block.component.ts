import { Component, OnInit, Input } from '@angular/core';
import { Card, ModelType, TimeLine } from 'src/app/module';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  @Input() cardInfo: Card;
  ModelType = ModelType;
  constructor() { }

  ngOnInit() {
  }

  getTimeLine(): TimeLine[] {
    return this.cardInfo.content as TimeLine[];
  }
}
