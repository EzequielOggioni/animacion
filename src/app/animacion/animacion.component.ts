import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.component.html',
  styleUrls: ['./animacion.component.css'],
  animations: [ trigger('openClose', [
    // ...
    state('open', style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow'
    })),
    state('closed', style({
      height: '100px',
      opacity: 0.8,
      backgroundColor: 'blue'
    })),
    transition('open => closed', [
      animate('1s')
    ]),
    transition('closed => open', [
      animate('0.5s')
    ]),
  ]),
]
})
export class AnimacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
