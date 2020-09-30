import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostFunctionComponent } from './host-function.component';

describe('HostFunctionComponent', () => {
  let component: HostFunctionComponent;
  let fixture: ComponentFixture<HostFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
