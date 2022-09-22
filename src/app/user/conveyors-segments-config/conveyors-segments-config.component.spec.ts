import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveyorsSegmentsConfigComponent } from './conveyors-segments-config.component';

describe('ConveyorsSegmentsConfigComponent', () => {
  let component: ConveyorsSegmentsConfigComponent;
  let fixture: ComponentFixture<ConveyorsSegmentsConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConveyorsSegmentsConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConveyorsSegmentsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
