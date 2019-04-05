import { TestBed, inject } from '@angular/core/testing';

import { HttpcustomService } from './httpcustom.service';

describe('HttpcustomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpcustomService]
    });
  });

  it('should be created', inject([HttpcustomService], (service: HttpcustomService) => {
    expect(service).toBeTruthy();
  }));
});
