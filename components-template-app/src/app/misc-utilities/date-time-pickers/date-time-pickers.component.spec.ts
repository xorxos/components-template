import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimePickersComponent } from './date-time-pickers.component';

describe('DateTimePickersComponent', () => {
  let component: DateTimePickersComponent;
  let fixture: ComponentFixture<DateTimePickersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTimePickersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimePickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
