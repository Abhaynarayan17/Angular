import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <img src="assets/banner.jpg" alt="Banner Image" class="img-fluid">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">About Us</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 40px auto;
    }
    .card {
      margin-bottom: 20px;
    }
  `]
})
export class AboutComponent {}
