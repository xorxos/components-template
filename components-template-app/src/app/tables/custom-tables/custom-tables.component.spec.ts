import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTablesComponent } from './custom-tables.component';

describe('CustomTablesComponent', () => {
  let component: CustomTablesComponent;
  let fixture: ComponentFixture<CustomTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
