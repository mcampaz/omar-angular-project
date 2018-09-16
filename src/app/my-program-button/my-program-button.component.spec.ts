import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProgramButtonComponent } from './my-program-button.component';

describe('MyProgramButtonComponent', () => {
  let component: MyProgramButtonComponent;
  let fixture: ComponentFixture<MyProgramButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProgramButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProgramButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
