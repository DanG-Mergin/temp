import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetsDialogComponent } from './targets-dialog.component';

describe('TargetsDialogComponent', () => {
  let component: TargetsDialogComponent;
  let fixture: ComponentFixture<TargetsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
