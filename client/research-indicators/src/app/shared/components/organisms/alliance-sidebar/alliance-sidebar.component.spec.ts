import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllianceSidebarComponent } from './alliance-sidebar.component';

describe('AllianceSidebarComponent', () => {
  let component: AllianceSidebarComponent;
  let fixture: ComponentFixture<AllianceSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllianceSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllianceSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
