import { Component, OnInit } from '@angular/core';

import{ Gym } from '../muscle';
import { GymService } from '../gym.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	excercises: Gym[] = [];
	selectedExcercise: Gym;

  constructor(private gymService: GymService) { }

  ngOnInit() {
  	this.receiveExcercises();
  }

    receiveExcercises(): void {
  		this.gymService.getExcercises().subscribe(excercises =>this.excercises = excercises);
    }	

    onSelect(excercise: Gym) : void{
        this.selectedExcercise = excercise;

    }	

}