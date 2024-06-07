import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicToastComponent } from './dynamic-toast.component';

describe('DynamicToastComponent', () => {
  let component: DynamicToastComponent;
  let fixture: ComponentFixture<DynamicToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicToastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
