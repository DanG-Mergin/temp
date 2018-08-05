import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatePageComponent } from './operate-page.component';

describe('OperatePageComponent', () => {
  let component: OperatePageComponent;
  let fixture: ComponentFixture<OperatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
