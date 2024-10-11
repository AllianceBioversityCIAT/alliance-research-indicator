import { ComponentFixture, TestBed } from '@angular/core/testing';
import DynamicFieldsComponent from './dynamic-fields.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('DynamicFieldsComponent', () => {
  let component: DynamicFieldsComponent;
  let fixture: ComponentFixture<DynamicFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFieldsComponent, provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
