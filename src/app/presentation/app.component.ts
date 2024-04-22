import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DateInputComponent } from './components/date-input/date-input.component';
import { LocationInputComponent } from './components/location-input/location-input.component';
import { CardAgeComponent } from './components/card-age/card-age.component';
import { FormControl, Validators } from '@angular/forms';

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

  initialDate = new FormControl(null, Validators.required);
  finalDate = new FormControl(null, Validators.required);
  locationInput = new FormControl(null, Validators.required);

  initialAge = new FormControl(0);
  adultAge = new FormControl(0);
  seniorAge = new FormControl(0);

  onSelectInitialDate(event: any) {
    this.initialDate.setValue(event);
  }

  onSelectFinalDate(event: any) {
    this.finalDate.setValue(event);
  }

  onSelectDestiny(event: any) {
    this.locationInput.setValue(event.iso2);
  }

  onQuote() {
    console.log({
      intialDate: this.initialDate.value,
      finalDate: this.finalDate.value,
      destiny: this.locationInput.value,
      adultAge: this.adultAge.value,
      initialAge: this.initialAge.value,
      seniorAge: this.seniorAge.value,
    });

    const initialDate = this.initialDate.value;
    const finalDate = this.finalDate.value;
    const destiny = this.locationInput.value;
    const adultAge = this.adultAge.value;
    const initialAge = this.initialAge.value;
    const seniorAge = this.seniorAge.value;

    if ((initialAge! > 0 || adultAge! > 0) && seniorAge! > 0) {
      window.alert('Los grupos de mayores de 70 se cotizan por separado');
    }

    if (!initialDate) {
      window.alert('La fecha inicial es requerida');
    }

    if (!finalDate) {
      window.alert('La fecha final es requerida');
    }

    if (!destiny) {
      window.alert('El destino es requerido');
    }

    const repeatedArray = [];
    for (let i = 0; i < initialAge!; i++) {
      repeatedArray.push(1);
    }

    for (let i = 0; i < adultAge!; i++) {
      repeatedArray.push(21);
    }

    for (let i = 0; i < seniorAge!; i++) {
      repeatedArray.push(71);
    }

    var passengerCount = repeatedArray.length;

    var url = 'https://cotizaredcard.online/cotizar?';
    url +=
      'cantidad=' +
      passengerCount +
      '&edades=' +
      repeatedArray.join(',') +
      '&origen=' +
      'BO' +
      '&destino=' +
      destiny;
    url += '&tipo=FULL&fecha_ini=' + initialDate + '&fecha_fin=' + finalDate;

    //console.log(repeatedArray);
    // console.log(url);
    // Hacer lo que necesites con la URL generada
    // console.log(url);

    window.open(url, '_blank');
  }
}
