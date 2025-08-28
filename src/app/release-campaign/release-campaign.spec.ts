import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseCampaign } from './release-campaign';

describe('ReleaseCampaign', () => {
  let component: ReleaseCampaign;
  let fixture: ComponentFixture<ReleaseCampaign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleaseCampaign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseCampaign);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
