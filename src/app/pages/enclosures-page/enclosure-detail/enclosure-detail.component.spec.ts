import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnclosureDetailComponent } from './enclosure-detail.component';

describe('EnclosureDetailComponent', () => {
  let component: EnclosureDetailComponent;
  let fixture: ComponentFixture<EnclosureDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnclosureDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnclosureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
