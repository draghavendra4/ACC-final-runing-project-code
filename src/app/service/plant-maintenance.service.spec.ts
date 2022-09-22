import { TestBed } from '@angular/core/testing';

import { PlantMaintenanceService } from './plant-maintenance.service';

describe('PlantMaintenanceService', () => {
  let service: PlantMaintenanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantMaintenanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
