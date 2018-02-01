import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import{ Gym } from '../muscle';
import { GymService } from '../gym.service';

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.component.html',
  styleUrls: ['./excercise.component.css']
})
export class ExcerciseComponent implements OnInit {

  @Input() excercise: Gym;

  constructor(
    private route: ActivatedRoute,
    private gymService: GymService,
    private location: Location
  ) {}

  ngOnInit(): void {

     this.getData();
  }

  getData(): void{

    const day = this.route.snapshot.paramMap.get('day');
    this.gymService.getExcercise(day).subscribe(excercise => this.excercise = excercise);
  }	 

}
