import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritySetupComponent } from './security-setup.component';

describe('SecuritySetupComponent', () => {
  let component: SecuritySetupComponent;
  let fixture: ComponentFixture<SecuritySetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritySetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritySetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
