import { Gym } from './muscle';

export const EXCERCISES: Gym[] = [

	{ info:[
		  { bodyPart: 'Chest',
	  		names: ['Machine Fly / Peckdec', 'Incline Dumbell Bench Press'],
	  		/*sets: 4,
	  		reps: 12,*/
	  	   },
           { bodyPart: 'Triceps',
	  		 names:['ChestDip', 'Dumbell Triceps Extension', 'Triceps Pushdown - Rope'],
	  	    /* sets: 4,
	  		 reps: 12,*/
	       }],
	  day: 'monday'
	},

	{ info:[
	       { bodyPart: 'Cardio',
             names:['Treadmill', 'cycling', 'Elliptical Training'],
             /*sets: 20,
             reps: 1,*/
           }],
	  day: 'tuesday'
	},

	{ info:[
	       { bodyPart: 'Back',
	  		 names:['Wide Grip Lat Pulldown', 'PullUps', 'Reverse Pecdec'],
	  		/* sets: 4,
	  		 reps: 12,*/
	       },
	       { bodyPart: 'Biceps',
	  		 names:['Alternate Dumbell Incline Curl', 'Alternate Hammer Curl'],
	  		/* sets: 4,
	  		 reps: 12,*/
	       }],
	  day: 'wednesday'
	},

    { info:[
           { bodyPart: 'Cardio',
             names:['Treadmill', 'cycling', 'Elliptical Training'],
            /* sets: 20,
             reps: 1,*/
           }],
	  day: 'thursday'
	},

	{ info:[
	       { bodyPart: 'Shoulders',
	  		 names:['Dumbell Shoulder Press', 'Dumbell Lateral Raise', 'Dumbell Shoulder Shrug' ],
	  		/* sets: 4,
	  		 reps: 12,*/
	       },

	       { bodyPart: 'Legs',
	  		 names:['Squats & Lunges', 'Lying Leg Curl / Lying Hamstring Curl', 'Leg Extensions', 'StepUp with Dumbells' ],
	  		/* sets: 4,
	  		 reps: 12,*/
	       }],
	  day: 'friday'
	},

	{ info:[
	  	   { bodyPart: 'Abs',
	  		 names:[ 'Leg Raise', 'AirBike', 'Running' ],
	  		/*sets: 4,
	  		 reps: 12,*/
	       }],
	  day: 'saturday'
	}
];