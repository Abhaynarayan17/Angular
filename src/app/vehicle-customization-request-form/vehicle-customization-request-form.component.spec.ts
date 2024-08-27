import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCustomizationRequestFormComponent } from './vehicle-customization-request-form.component';

describe('VehicleCustomizationRequestFormComponent', () => {
  let component: VehicleCustomizationRequestFormComponent;
  let fixture: ComponentFixture<VehicleCustomizationRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleCustomizationRequestFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleCustomizationRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
