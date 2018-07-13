import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundryComponent } from './foundry.component';

describe('FoundryComponent', () => {
  let component: FoundryComponent;
  let fixture: ComponentFixture<FoundryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
