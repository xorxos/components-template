import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedTablesComponent } from './paginated-tables.component';

describe('PaginatedTablesComponent', () => {
  let component: PaginatedTablesComponent;
  let fixture: ComponentFixture<PaginatedTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatedTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatedTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
