import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlantComponent } from './user-plant.component';

describe('UserPlantComponent', () => {
  let component: UserPlantComponent;
  let fixture: ComponentFixture<UserPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
