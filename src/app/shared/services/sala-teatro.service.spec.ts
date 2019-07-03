import { TestBed } from '@angular/core/testing';

import { SalaTeatroService } from './sala-teatro.service';

describe('SalaTeatroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalaTeatroService = TestBed.get(SalaTeatroService);
    expect(service).toBeTruthy();
  });
});
