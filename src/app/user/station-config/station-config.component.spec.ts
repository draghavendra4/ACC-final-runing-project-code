import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationConfigComponent } from './station-config.component';

describe('StationConfigComponent', () => {
  let component: StationConfigComponent;
  let fixture: ComponentFixture<StationConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
