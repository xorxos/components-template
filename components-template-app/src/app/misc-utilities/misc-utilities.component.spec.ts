import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscUtilitiesComponent } from './misc-utilities.component';

describe('MiscUtilitiesComponent', () => {
  let component: MiscUtilitiesComponent;
  let fixture: ComponentFixture<MiscUtilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscUtilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
