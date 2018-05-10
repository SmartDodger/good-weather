import {query, stagger, trigger, transition, style, animate} from '@angular/animations';


export const someCoolAnimation = trigger('someCoolAnimation', [
  transition('* => *', [
    query(':enter', style({ opacity: 0 })),

    // starts to animate things with a stagger in between
    query(':enter', stagger('100ms', [
      animate('1s', style({ opacity: 1 }))
    ]))
  ])
]);

