import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanSelectComponent } from './scan-select.component';

describe('ScanSelectComponent', () => {
  let component: ScanSelectComponent;
  let fixture: ComponentFixture<ScanSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
