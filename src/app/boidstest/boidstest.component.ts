import { Component, OnInit,Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Tools, Screen2D, foPage, foDocument, foWorkspace } from 'ngFoundryModels';


@Component({
  selector: 'app-boidstest',
  templateUrl: './boidstest.component.html',
  styleUrls: ['./boidstest.component.css']
})
export class BoidstestComponent implements OnInit, AfterViewInit  {
  @ViewChild('canvas') public canvasRef: ElementRef;

  @Input() public pageWidth = 1400;
  @Input() public pageHeight = 800;

  workspace: foWorkspace = new foWorkspace().defaultName('Boid Render');

  screen2D: Screen2D = new Screen2D();
  currentDocument: foDocument = new foDocument();

  guid: string;
  constructor() { }

  doSetCurrentPage(page: foPage) {
    this.screen2D.clear();
    page.canvas = this.canvasRef.nativeElement;

    //with the render function you could
    //1) render a single page
    //2) render pages like layers
    //3) render pages side by side
    this.screen2D.render = (ctx: CanvasRenderingContext2D) => {
      page.render(ctx);
    };
    this.screen2D.go();

    this.addEventHooks(page);
  }

  addEventHooks(page: foPage) {
  }

  ngOnInit() {
    this.guid = Tools.generateUUID();


  }

  public ngAfterViewInit() {
    this.currentDocument.establishPage('Boids');

    this.screen2D.setRoot(
      this.canvasRef.nativeElement,
      this.pageWidth,
      this.pageHeight
    );

    setTimeout(_ => {
      this.doSetCurrentPage(this.currentDocument.currentPage);
    });
  }
}
