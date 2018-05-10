import {query, stagger, state, trigger, keyframes, transition, style, animate} from '@angular/animations';


/*export const someCoolAnimation = trigger('someCoolAnimation', [
  transition('* => *', [
    query(':enter', style({ opacity: 0 }), {optional: true}),

    query(':enter', stagger('300ms', [
      animate('.6s ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(20%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1.0}),
      ]))]), {optional: true})
    ,
    query(':leave', stagger('300ms', [
      animate('.6s ease-out', keyframes([
        style({opacity: 1, transform: 'translateY(0)', offset: 0}),
        style({opacity: 0, transform: 'translateY(20%)', offset: 1.0}),
      ]))]), {optional: true})
  ])
]);*/

/*export const fadeComponentAnimation = trigger(
  'fadeComponentAnimation', [
    transition(':enter', [
      style({transform: 'translateY(-10%)', opacity: 0}),
      animate('300ms ease-in', style({transform: 'translateY(0)', opacity: 1}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0)', opacity: 1}),
      animate('300ms ease-out', style({transform: 'translateY(-10%)', opacity: 0}))
    ])
  ]
);*/

export const fadeComponentAnimation =  trigger('fadeComponentAnimation', [
  state('in', style({transform: 'translateX(0)'})),
  transition('void => *', [
    style({ opacity: 0 }),
    animate(200)
  ]),
  transition('* => void', [
    animate(200, style({ opacity: 0}))
  ])
]);
