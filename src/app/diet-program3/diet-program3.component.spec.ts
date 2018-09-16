import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietProgram3Component } from './diet-program3.component';

describe('DietProgram3Component', () => {
  let component: DietProgram3Component;
  let fixture: ComponentFixture<DietProgram3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietProgram3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietProgram3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
