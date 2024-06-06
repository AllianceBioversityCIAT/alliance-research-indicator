import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllianceNavbarComponent } from './alliance-navbar.component';

describe('AllianceNavbarComponent', () => {
  let component: AllianceNavbarComponent;
  let fixture: ComponentFixture<AllianceNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllianceNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllianceNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
