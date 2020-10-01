import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckbookedComponent } from './checkbooked.component';

describe('CheckbookedComponent', () => {
  let component: CheckbookedComponent;
  let fixture: ComponentFixture<CheckbookedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckbookedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckbookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
