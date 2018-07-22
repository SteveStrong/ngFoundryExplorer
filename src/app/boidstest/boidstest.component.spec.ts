import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoidstestComponent } from './boidstest.component';

describe('BoidstestComponent', () => {
  let component: BoidstestComponent;
  let fixture: ComponentFixture<BoidstestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoidstestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoidstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
