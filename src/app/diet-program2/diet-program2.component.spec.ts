import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietProgram2Component } from './diet-program2.component';

describe('DietProgram2Component', () => {
  let component: DietProgram2Component;
  let fixture: ComponentFixture<DietProgram2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietProgram2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietProgram2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
