import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServiceDetailsComponent } from './user-service-details.component';

describe('UserServiceDetailsComponent', () => {
  let component: UserServiceDetailsComponent;
  let fixture: ComponentFixture<UserServiceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserServiceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserServiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
