import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerFormComponent } from './controller-form.component';

describe('ControllerFormComponent', () => {
  let component: ControllerFormComponent;
  let fixture: ComponentFixture<ControllerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
