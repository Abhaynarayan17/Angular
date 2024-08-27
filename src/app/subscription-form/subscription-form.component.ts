import { Component } from '@angular/core';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {
  email: string = '';
  name: string = '';

  // Method to handle the form submission
  handleForm(event: Event) {
    event.preventDefault(); // Prevent the default form submission
    
    const subscriptionData = {
      email: this.email,
      name: this.name
    };
    console.log(subscriptionData);

    // Reset the form fields after submission
    this.email = '';
    this.name = '';
  }
}
