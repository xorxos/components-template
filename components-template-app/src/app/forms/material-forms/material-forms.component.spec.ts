import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFormsComponent } from './material-forms.component';

describe('MaterialFormsComponent', () => {
  let component: MaterialFormsComponent;
  let fixture: ComponentFixture<MaterialFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
