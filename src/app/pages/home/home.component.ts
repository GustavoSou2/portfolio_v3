import { MenuComponent } from '@/app/components/menu/menu.component';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

const animation = trigger('animationLetterByLetter', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(-50px)' }),
      stagger(100, [
        animate('500ms', style({ opacity: 1, transform: 'translateY(*)' })),
      ]),
    ]),
  ]),
]);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [animation],
})
export class HomeComponent {
  date: Date = new Date();
}
