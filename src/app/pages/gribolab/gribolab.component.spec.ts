import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GribolabComponent } from './gribolab.component';

describe('GribolabComponent', () => {
  let component: GribolabComponent;
  let fixture: ComponentFixture<GribolabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GribolabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GribolabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
