import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFoundryShapesComponent } from './ng-foundry-shapes.component';

describe('NgFoundryShapesComponent', () => {
  let component: NgFoundryShapesComponent;
  let fixture: ComponentFixture<NgFoundryShapesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFoundryShapesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFoundryShapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
