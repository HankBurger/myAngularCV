import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/module/user';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  @Input() user: User;
  constructor() {
  }

  ngOnInit() {
  }

}
