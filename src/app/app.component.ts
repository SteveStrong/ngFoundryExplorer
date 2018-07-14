import { Component, ViewContainerRef, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Tools } from 'ng-foundry-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng Foundry Explorer';
  data: string = Tools.generateUUID();

  constructor(
    private toastr: ToastrService,
    private vcr: ViewContainerRef) {
    }

    ngOnInit(): void {
    }

    showSuccess() {
      this.toastr.success('You are awesome!', 'Success!');
    }

    showError() {
      this.toastr.error('This is not good!', 'Oops!');
    }

    showWarning() {
      this.toastr.warning('You are being warned.', 'Alert!');
    }

    showInfo() {
      this.toastr.info('Just some information for you.');
    }

    // showCustom() {
    //   this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
    // }
}
