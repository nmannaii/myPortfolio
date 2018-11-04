import { trigger, state, style, transition, animate } from '@angular/animations';

export const flipAnimation = trigger('flip', [
  state('flip-out', style({
    transform: 'rotateY(180deg)',
    opacity: 0
  })),
  state('flip-in', style({
    opacity: 1
  })),
  transition('flip-in => flip-out', animate('600ms ease-out')),
  transition('flip-out => flip-in', animate('600ms ease-out')),
]);
