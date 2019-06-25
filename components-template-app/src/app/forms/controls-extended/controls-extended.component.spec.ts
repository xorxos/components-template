import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsExtendedComponent } from './controls-extended.component';

describe('ControlsExtendedComponent', () => {
  let component: ControlsExtendedComponent;
  let fixture: ComponentFixture<ControlsExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
