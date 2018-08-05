import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfChainFormComponent } from './rf-chain-form.component';

describe('RfChainFormComponent', () => {
  let component: RfChainFormComponent;
  let fixture: ComponentFixture<RfChainFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfChainFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfChainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
