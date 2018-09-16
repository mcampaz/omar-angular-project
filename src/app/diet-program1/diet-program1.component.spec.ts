import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietProgram1Component } from './diet-program1.component';

describe('DietProgram1Component', () => {
  let component: DietProgram1Component;
  let fixture: ComponentFixture<DietProgram1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietProgram1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietProgram1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
