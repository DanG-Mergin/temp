import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdrFormComponent } from './sdr-form.component';

describe('SdrFormComponent', () => {
  let component: SdrFormComponent;
  let fixture: ComponentFixture<SdrFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdrFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
