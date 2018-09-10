import { Component, OnInit, ViewChild } from '@angular/core';

import {  foConcept, foNode } from 'NgFoundryModelsModule';

//import { Toast } from '../common/emitter.service';
//import { SignalRService } from "../common/signalr.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  @ViewChild('chat') public inputRef: HTMLInputElement;

  typeinText: string = '';
  postList: Array<any> = [];
  model = [];

  def: foConcept<foNode> = new foConcept<foNode>();

  //constructor(private signalR: SignalRService) {}
  constructor() {}

  doToast(): void {
    //Toast.info("info message", "my title")
  }

  doVersion(): void {
    //this.signalR.askforVersion();
  }

  doPost() {
    let text = this.inputRef.innerText || this.typeinText;
    //this.signalR.send(text);
    this.typeinText = '';
  }

  onKeyUp(value: string) {
    this.typeinText = value;
  }

  onInput(value: string) {
    this.typeinText = value;
    this.doPost();
  }

  ngOnInit(): void {
    // this.signalR.canStart() && this.signalR.start().then( () => {
    //   this.signalR.receive(data => {
    //     Toast.info(JSON.stringify(data), "receive");
    //     this.postList.push(data);
    //   });
    // });

    let xxx = function() {
      return 'hello';
    };
    let yyy = xxx.toString();
    let zzz = '{ return "hello" }';

    function evil(fn) {
      return new Function(fn)();
    }

    let props = {
      first: 'steve',
      last: 'strong',
      full: function() {
        return `hello all ${this.first} - ${this.last}`;
      },
      xxx: xxx,
      yyy: yyy,
      zzz: evil(zzz),
      morestuff: function(x) {
        return `${this.first} - ${this.last}`;
      }
    };

    this.def = new foConcept({
      first: 'mile',
      last: 'davis'
    });

    this.model = [
      this.def,
      this.def.newInstance(),
      // new foNode(props),
      // new foNode(props),
      new foNode(props)
    ];
  }
}
