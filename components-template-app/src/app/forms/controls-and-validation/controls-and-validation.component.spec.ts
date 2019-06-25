import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsAndValidationComponent } from './controls-and-validation.component';

describe('ControlsAndValidationComponent', () => {
  let component: ControlsAndValidationComponent;
  let fixture: ComponentFixture<ControlsAndValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsAndValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsAndValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
