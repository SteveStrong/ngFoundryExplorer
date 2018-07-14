import { Component, OnInit } from '@angular/core';
import { Tools } from './models/foTools';

@Component({
  selector: 'fo-root',
  template: `
    <p>
      simple tools test {{data}}
    </p>
  `,
  styles: []
})
export class NgFoundryModelsComponent implements OnInit {
  data: string;

  constructor() { }

  ngOnInit() {
    this.data = Tools.generateUUID();
  }

}
