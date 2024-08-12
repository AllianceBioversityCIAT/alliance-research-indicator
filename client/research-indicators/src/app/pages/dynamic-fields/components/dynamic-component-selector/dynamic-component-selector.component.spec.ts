import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentSelectorComponent } from './dynamic-component-selector.component';

describe('DynamicComponentSelectorComponent', () => {
  let component: DynamicComponentSelectorComponent;
  let fixture: ComponentFixture<DynamicComponentSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicComponentSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicComponentSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
