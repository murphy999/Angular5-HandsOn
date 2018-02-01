import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import{ Gym } from './muscle';
import{ EXCERCISES } from './mock-excercise';

@Injectable()
export class GymService {

	getExcercises(): Observable<Gym[]> {
        return of(EXCERCISES);
	}

	getExcercise(day: string): Observable<Gym>{
       return of(EXCERCISES.find(excercise => excercise.day === day));
}

  constructor() { }

}
