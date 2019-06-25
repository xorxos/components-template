import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRegistrationsComponent } from './sample-registrations.component';

describe('SampleRegistrationsComponent', () => {
  let component: SampleRegistrationsComponent;
  let fixture: ComponentFixture<SampleRegistrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleRegistrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
