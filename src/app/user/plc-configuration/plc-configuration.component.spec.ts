import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLCConfigurationComponent } from './plc-configuration.component';

describe('PLCConfigurationComponent', () => {
  let component: PLCConfigurationComponent;
  let fixture: ComponentFixture<PLCConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PLCConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PLCConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
