import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnclosureWizardComponent } from './enclosure-wizard.component';

describe('EnclosureWizardComponent', () => {
  let component: EnclosureWizardComponent;
  let fixture: ComponentFixture<EnclosureWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnclosureWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnclosureWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
