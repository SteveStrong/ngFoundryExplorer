import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFoundryComponent } from './ng-foundry.component';

describe('NgFoundryComponent', () => {
  let component: NgFoundryComponent;
  let fixture: ComponentFixture<NgFoundryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFoundryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFoundryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
