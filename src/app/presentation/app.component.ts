import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DateInputComponent } from './components/date-input/date-input.component';
import { LocationInputComponent } from './components/location-input/location-input.component';
import { CardAgeComponent } from './components/card-age/card-age.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DateInputComponent,
    LocationInputComponent,
    CardAgeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cotizador';
}
