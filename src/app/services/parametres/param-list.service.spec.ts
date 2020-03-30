import { TestBed } from '@angular/core/testing';

import { ParamListService } from './param-list.service';

describe('ParamListService', () => {
  let service: ParamListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParamListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
