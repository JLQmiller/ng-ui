import { TestBed } from '@angular/core/testing';

import { MuiService } from './mui.service';

describe('MuiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MuiService = TestBed.get(MuiService);
    expect(service).toBeTruthy();
  });
});
