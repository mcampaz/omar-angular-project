import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietProgram4Component } from './diet-program4.component';

describe('DietProgram4Component', () => {
  let component: DietProgram4Component;
  let fixture: ComponentFixture<DietProgram4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietProgram4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietProgram4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
