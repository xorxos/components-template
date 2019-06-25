import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleLoginsComponent } from './sample-logins.component';

describe('SampleLoginsComponent', () => {
  let component: SampleLoginsComponent;
  let fixture: ComponentFixture<SampleLoginsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleLoginsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleLoginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
