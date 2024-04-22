import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
export class CardAgeComponent { }
