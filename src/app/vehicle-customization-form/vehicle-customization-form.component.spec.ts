import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCustomizationRequestFormComponent } from './vehicle-customization-form.component';

describe('VehicleCustomizationFormComponent', () => {
  let component: VehicleCustomizationRequestFormComponent;
  let fixture: ComponentFixture<VehicleCustomizationRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleCustomizationRequestFormComponent]
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
