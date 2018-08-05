import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulateDetailComponent } from './emulate-detail.component';

describe('EmulateDetailComponent', () => {
  let component: EmulateDetailComponent;
  let fixture: ComponentFixture<EmulateDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmulateDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmulateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
