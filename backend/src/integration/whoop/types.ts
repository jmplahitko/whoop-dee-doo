export interface Workout {
	id: number;
	user_id: number;
	created_at: string;
	updated_at: string;
	start: string;
	end: string;
	timezone_offset: string;
	sport_id: number;
	score_state: "SCORED" | "PENDING_SCORE" | "UNSCORABLE";
	score: {
		strain: number;
		average_heart_rate: number;
		max_heart_rate: number;
		kilojoule: number;
		percent_recorded: number;
		distance_meter: number;
		altitude_gain_meter: number;
		altitude_change_meter: number;
		zone_duration: {
			zone_zero_milli: number;
			zone_one_milli: number;
			zone_two_milli: number;
			zone_three_milli: number;
			zone_four_milli: number;
			zone_five_milli: number;
		}
	}
}

export enum SportId {
	activity = -1,
	running = 0,
	cycling = 1,
	baseball = 16,
	basketball = 17,
	rowing = 18,
	fencing = 19,
	fieldHockey = 20,
	football = 21,
	golf = 22,
	iceHockey = 24,
	lacrosse = 25,
	rugby = 27,
	sailing = 28,
	skiing = 29,
	soccer = 30,
	softball = 31,
	squash = 32,
	swimming = 33,
	tennis = 34,
	trackAndField = 35,
	volleyball = 36,
	waterPolo = 37,
	wrestling = 38,
	boxing = 39,
	dance = 42,
	pilates = 43,
	yoga = 44,
	weightlifting = 45,
	crossCountrySkiing = 47,
	functionalFitness = 48,
	duathlon = 49,
	gymnastics = 51,
	hikingRucking = 52,
	horsebackRiding = 53,
	kayaking = 55,
	martialArts = 56,
	mountainBiking = 57,
	powerlifting = 59,
	rockClimbing = 60,
	paddleboarding = 61,
	triathlon = 62,
	walking = 63,
	surfing = 64,
	elliptical = 65,
	stairmaster = 66,
	meditation = 70,
	other = 71,
	diving = 73,
	operationsTactical = 74,
	operationsMedical = 75,
	operationsFlying = 76,
	operationsWater = 77,
	ultimate = 82,
	climber = 83,
	jumpingRope = 84,
	australianFootball = 85,
	skateboarding = 86,
	coaching = 87,
	iceBath = 88,
	commuting = 89,
	gaming = 90,
	snowboarding = 92,
	motocross = 93,
	caddying = 94,
	obstacleCourseRacing = 95,
	motorRacing = 96,
	hiit = 96,
	spin = 97,
	jiuJitsu = 98,
	manualLabor = 99,
	cricket = 100,
	pickleball = 101,
	inlineSkating = 102,
	boxFitness = 103,
	spikeball = 104,
	wheelchairPushing = 105,
	paddleTennis = 106,
	barre = 107,
	stagePerformance = 108,
	highStressWork = 109,
	parkour = 110,
	gaelicFootball = 111,
	hurlingCamogie = 112,
	circusArts = 113,
	massageTherapy = 121,
	strengthTrainer = 123,
	watchingSports = 125,
	assaultBike = 126,
	kickboxing = 127,
	stretching = 128,
	tableTennis = 230,
	badminton = 231,
	netball = 232,
	sauna = 233,
	discGolf = 234,
	yardWork = 235,
	airCompression = 236,
	percussiveMassage = 237,
	paintball = 238,
	iceSkating = 239,
	handball = 240,
	f45Training = 248,
	padel = 249,
	barrys = 250,
	dedicatedParenting = 251,
	strollerWalking = 252,
	strollerJogging = 253,
	toddlerwearing = 254,
	babywearing = 255,
	barre3 = 258,
	hotYoga = 259,
	stadiumSteps = 261,
	polo = 262,
	musicalPerformance = 263,
	kiteBoarding = 264,
	dogWalking = 266,
	waterSkiing = 267,
	wakeboarding = 268,
	cooking = 269,
	cleaning = 270,
	publicSpeaking = 272
}