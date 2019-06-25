import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredTablesComponent } from './filtered-tables.component';

describe('FilteredTablesComponent', () => {
  let component: FilteredTablesComponent;
  let fixture: ComponentFixture<FilteredTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
