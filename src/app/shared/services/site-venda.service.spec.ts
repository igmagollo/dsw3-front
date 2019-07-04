import { TestBed } from '@angular/core/testing';

import { SiteVendaService } from './site-venda.service';

describe('SiteVendaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiteVendaService = TestBed.get(SiteVendaService);
    expect(service).toBeTruthy();
  });
});
