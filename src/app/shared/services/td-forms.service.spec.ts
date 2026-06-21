import { TestBed } from '@angular/core/testing';

import { TdFormsService } from './td-forms.service';

describe('TdFormsService', () => {
  let service: TdFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TdFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
