import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncChangesComponent } from './sync-changes.component';

describe('SyncChangesComponent', () => {
  let component: SyncChangesComponent;
  let fixture: ComponentFixture<SyncChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
