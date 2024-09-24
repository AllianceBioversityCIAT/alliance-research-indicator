import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorsInfoComponent } from './indicators-info.component';

describe('IndicatorsInfoComponent', () => {
  let component: IndicatorsInfoComponent;
  let fixture: ComponentFixture<IndicatorsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicatorsInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicatorsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
