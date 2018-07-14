import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFoundryModelsComponent } from './ng-foundry-models.component';

describe('NgFoundryModelsComponent', () => {
  let component: NgFoundryModelsComponent;
  let fixture: ComponentFixture<NgFoundryModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFoundryModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFoundryModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
