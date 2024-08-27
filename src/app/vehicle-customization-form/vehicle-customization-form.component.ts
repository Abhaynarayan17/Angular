import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle-customization-request-form',
  templateUrl: './vehicle-customization-form.component.html',
  styleUrls: ['./vehicle-customization-form.component.css']
})
export class VehicleCustomizationRequestFormComponent {
  name: string = '';
  vehicleModel: string = '';

  // Method to handle the form submission
  handleForm(event: Event) {
    event.preventDefault(); // Prevent the default form submission
    
    const customizationRequest = {
      name: this.name,
      vehicleModel: this.vehicleModel
    };
    console.log(customizationRequest);

    // Reset the form fields after submission
    this.name = '';
    this.vehicleModel = '';
  }
}
