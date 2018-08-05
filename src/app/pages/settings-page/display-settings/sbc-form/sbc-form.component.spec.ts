import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbcFormComponent } from './sbc-form.component';

describe('SbcFormComponent', () => {
  let component: SbcFormComponent;
  let fixture: ComponentFixture<SbcFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbcFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
