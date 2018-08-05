import { TestBed, inject } from '@angular/core/testing';

import { FakeCellsService } from './fake-cells.service';

describe('FakeCellsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeCellsService]
    });
  });

  it('should be created', inject([FakeCellsService], (service: FakeCellsService) => {
    expect(service).toBeTruthy();
  }));
});
