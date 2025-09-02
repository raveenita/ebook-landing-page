import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pill } from './pills';

describe('pill', () => {
  let component: pill;
  let fixture: ComponentFixture<pill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [pill],
    }).compileComponents();

    fixture = TestBed.createComponent(pill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
