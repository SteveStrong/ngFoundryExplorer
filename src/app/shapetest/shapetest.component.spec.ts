import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapetestComponent } from './shapetest.component';

describe('ShapetestComponent', () => {
  let component: ShapetestComponent;
  let fixture: ComponentFixture<ShapetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
