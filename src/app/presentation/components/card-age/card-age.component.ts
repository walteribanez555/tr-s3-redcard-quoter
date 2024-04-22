import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'card-age',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl : './card-age.component.html',
  styleUrl: './card-age.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardAgeComponent {


  @Input() ageFormControl! : FormControl;


  // quantity : number = 0;


  onAdd() {
    const quantity = this.ageFormControl.value;
    this.ageFormControl.setValue(quantity + 1);
  }


  onLess() {
    const quantity = this.ageFormControl.value;

    if(quantity > 0) {
      this.ageFormControl.setValue( quantity - 1 );
    }
  }



}
