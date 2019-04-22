import { Component, OnInit, Input } from '@angular/core';
import { TimeLine } from 'src/app/module';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  constructor() { }
  @Input() tlAry: TimeLine;
  ngOnInit() {
  }

}
