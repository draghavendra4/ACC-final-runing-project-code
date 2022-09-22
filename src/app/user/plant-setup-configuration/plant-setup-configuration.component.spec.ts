import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantSetupConfigurationComponent } from './plant-setup-configuration.component';

describe('PlantSetupConfigurationComponent', () => {
  let component: PlantSetupConfigurationComponent;
  let fixture: ComponentFixture<PlantSetupConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantSetupConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantSetupConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
