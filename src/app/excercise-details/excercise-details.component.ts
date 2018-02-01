import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-excercise-details',
  templateUrl: './excercise-details.component.html',
  styleUrls: ['./excercise-details.component.css'],
  animations: [
  		trigger('dialog', [
  			state('shown', style({ opacity: 1 })),
        state('hidden', style({ opacity: 1 })),
        transition('* => *',animate('.6s'))
  		])
  ]
})
export class ExcerciseDetailsComponent implements OnInit {

@Input() visible: boolean = true;
showDialog = 'shown';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
      this.showDialog = this.visible ? 'shown' : 'hidden';
  }
}
