import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmitSelectedComponent } from './transmit-selected.component';

describe('TransmitSelectedComponent', () => {
  let component: TransmitSelectedComponent;
  let fixture: ComponentFixture<TransmitSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransmitSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmitSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
