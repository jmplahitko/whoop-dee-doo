declare global {
	export interface WhoopWorkoutQuery {
		sportName?: string
		startDate?: string
		endDate?: string
		limit?: number
	}

	export interface WhoopWorkoutScore {
		strain: number
		average_heart_rate: number
		max_heart_rate: number
		kilojoule: number
		percent_recorded: number
		distance_meter: number
		altitude_gain_meter: number
		altitude_change_meter: number
		zone_durations: {
			zone_zero_milli: number
			zone_one_milli: number
			zone_two_milli: number
			zone_three_milli: number
			zone_four_milli: number
			zone_five_milli: number
		}
	}

	export interface WhoopWorkout {
		id: string
		v1_id: number
		user_id: number
		created_at: string
		updated_at: string
		start: string
		end: string
		timezone_offset: string
		sport_name: string
		score_state: string
		score: WhoopWorkoutScore
		sport_id: number
	}

	export enum WhoopSportType {
		Activity = -1,
		Running = 0,
		Cycling = 1,
		Baseball = 16,
		Basketball = 17,
		Rowing = 18,
		Fencing = 19,
		FieldHockey = 20,
		Football = 21,
		Golf = 22,
		IceHockey = 24,
		Lacrosse = 25,
		Rugby = 27,
		Sailing = 28,
		Skiing = 29,
		Soccer = 30,
		Softball = 31,
		Squash = 32,
		Swimming = 33,
		Tennis = 34,
		TrackAndField = 35,
		Volleyball = 36,
		WaterPolo = 37,
		Wrestling = 38,
		Boxing = 39,
		Dance = 42,
		Pilates = 43,
		Yoga = 44,
		Weightlifting = 45,
		CrossCountrySkiing = 47,
		FunctionalFitness = 48,
		Duathlon = 49,
		Gymnastics = 51,
		HikingRucking = 52,
		HorsebackRiding = 53,
		Kayaking = 55,
		MartialArts = 56,
		MountainBiking = 57,
		Powerlifting = 59,
		RockClimbing = 60,
		Paddleboarding = 61,
		Triathlon = 62,
		Walking = 63,
		Surfing = 64,
		Elliptical = 65,
		Stairmaster = 66,
		Meditation = 70,
		Other = 71,
		Diving = 73,
		OperationsTactical = 74,
		OperationsMedical = 75,
		OperationsFlying = 76,
		OperationsWater = 77,
		Ultimate = 82,
		Climber = 83,
		JumpingRope = 84,
		AustralianFootball = 85,
		Skateboarding = 86,
		Coaching = 87,
		IceBath = 88,
		Commuting = 89,
		Gaming = 90,
		Snowboarding = 91,
		Motocross = 92,
		Caddying = 93,
		ObstacleCourseRacing = 94,
		MotorRacing = 95,
		HIIT = 96,
		Spin = 97,
		JiuJitsu = 98,
		ManualLabor = 99,
		Cricket = 100,
		Pickleball = 101,
		InlineSkating = 102,
		BoxFitness = 103,
		Spikeball = 104,
		WheelchairPushing = 105,
		PaddleTennis = 106,
		Barre = 107,
		StagePerformance = 108,
		HighStressWork = 109,
		Parkour = 110,
		GaelicFootball = 111,
		HurlingCamogie = 112,
		CircusArts = 113,
		MassageTherapy = 121,
		StrengthTrainer = 123,
		WatchingSports = 125,
		AssaultBike = 126,
		Kickboxing = 127,
		Stretching = 128,
		TableTennis = 230,
		Badminton = 231,
		Netball = 232,
		Sauna = 233,
		DiscGolf = 234,
		YardWork = 235,
		AirCompression = 236,
		PercussiveMassage = 237,
		Paintball = 238,
		IceSkating = 239,
		Handball = 240,
		F45Training = 248,
		Padel = 249,
		Barrys = 250,
		DedicatedParenting = 251,
		StrollerWalking = 252,
		StrollerJogging = 253,
		Toddlerwearing = 254,
		Babywearing = 255,
		Barre3 = 258,
		HotYoga = 259,
		StadiumSteps = 261,
		Polo = 262,
		MusicalPerformance = 263,
		KiteBoarding = 264,
		DogWalking = 266,
		WaterSkiing = 267,
		Wakeboarding = 268,
		Cooking = 269,
		Cleaning = 270,
		PublicSpeaking = 272
	}

	export interface WhoopWorkoutResponse {
		workouts: WhoopWorkout[]
		sportNames: string[]
		total: number
		nextToken: string | null
	}

	export interface WhoopTokenResponse {
		access_token: string
		refresh_token: string
	}
	export interface WhoopUserProfile {
		user_id: string
		email: string
		first_name: string
		last_name: string
	}
}

export { }