import { Component, OnInit } from '@angular/core';

import { Tools } from 'ngFoundryModels';


@Component({
  selector: 'app-boidstest',
  templateUrl: './boidstest.component.html',
  styleUrls: ['./boidstest.component.css']
})
export class BoidstestComponent implements OnInit {
  guid:string;
  constructor() { }

  ngOnInit() {
    this.guid = Tools.generateUUID();
  }

}
