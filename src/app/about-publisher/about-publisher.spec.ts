import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPublisher } from './about-publisher';

describe('AboutPublisher', () => {
  let component: AboutPublisher;
  let fixture: ComponentFixture<AboutPublisher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPublisher],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPublisher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
