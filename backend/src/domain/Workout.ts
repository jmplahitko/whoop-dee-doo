export interface Workout {
	id: number;
	userId: number;
	type: WorkoutType;
	createdDate: Date;
	updatedDate: Date;
	startDate: Date;
	endDate: Date;
	timezoneOffset: string;
	scoreState: ScoreState;
	score: WorkoutScore;
}

export type ScoreState = "SCORED" | "PENDING_SCORE" | "UNSCORABLE";

export interface WorkoutScore {
	strain: number;
	averageHeartRate: number;
	maxHeartRate: number;
	kilojoule: number;
	distance: number;
	altitudeGain: number;
	altitudeChange: number;
	hrZoneDuration: WorkoutZoneDuration;
}

export interface WorkoutZoneDuration {
	zero: number;
	one: number;
	two: number;
	three: number;
	four: number;
	five: number;
}

export enum WorkoutType {
	Activity = "ACTIVITY",
	AirCompression = "AIR_COMPRESSION",
	AssaultBike = "ASSAULT_BIKE",
	AustralianFootball = "AUSTRALIAN_FOOTBALL",
	Babywearing = "BABYWEARING",
	Badminton = "BADMINTON",
	Barre = "BARRE",
	Barre3 = "BARRE3",
	Barrys = "BARRYS",
	Baseball = "BASEBALL",
	Basketball = "BASKETBALL",
	BoxFitness = "BOX_FITNESS",
	Boxing = "BOXING",
	Caddying = "CADDYING",
	CircusArts = "CIRCUS_ARTS",
	Cleaning = "CLEANING",
	Climber = "CLIMBER",
	Coaching = "COACHING",
	Commuting = "COMMUTING",
	Cooking = "COOKING",
	Cricket = "CRICKET",
	CrossCountrySkiing = "CROSS_COUNTRY_SKIING",
	Cycling = "CYCLING",
	Dance = "DANCE",
	DedicatedParenting = "DEDICATED_PARENTING",
	DiscGolf = "DISC_GOLF",
	Diving = "DIVING",
	DogWalking = "DOG_WALKING",
	Duathlon = "DUATHLON",
	Elliptical = "ELLIPTICAL",
	F45Training = "F45_TRAINING",
	Fencing = "FENCING",
	FieldHockey = "FIELD_HOCKEY",
	Football = "FOOTBALL",
	FunctionalFitness = "FUNCTIONAL_FITNESS",
	GaelicFootball = "GAELIC_FOOTBALL",
	Gaming = "GAMING",
	Golf = "GOLF",
	Gymnastics = "GYMNASTICS",
	Handball = "HANDBALL",
	HighStressWork = "HIGH_STRESS_WORK",
	Hiit = "HIIT",
	HikingRucking = "HIKING_RUCKING",
	HorsebackRiding = "HORSEBACK_RIDING",
	HotYoga = "HOT_YOGA",
	HurlingCamogie = "HURLING_CAMOGIE",
	IceBath = "ICE_BATH",
	IceHockey = "ICE_HOCKEY",
	IceSkating = "ICE_SKATING",
	InlineSkating = "INLINE_SKATING",
	JiuJitsu = "JIU_JITSU",
	JumpingRope = "JUMPING_ROPE",
	Kayaking = "KAYAKING",
	Kickboxing = "KICKBOXING",
	KiteBoarding = "KITE_BOARDING",
	Lacrosse = "LACROSSE",
	ManualLabor = "MANUAL_LABOR",
	MartialArts = "MARTIAL_ARTS",
	MassageTherapy = "MASSAGE_THERAPY",
	Meditation = "MEDITATION",
	MotorRacing = "MOTOR_RACING",
	Motocross = "MOTOCROSS",
	MountainBiking = "MOUNTAIN_BIKING",
	MusicalPerformance = "MUSICAL_PERFORMANCE",
	Netball = "NETBALL",
	ObstacleCourseRacing = "OBSTACLE_COURSE_RACING",
	OperationsFlying = "OPERATIONS_FLYING",
	OperationsMedical = "OPERATIONS_MEDICAL",
	OperationsTactical = "OPERATIONS_TACTICAL",
	OperationsWater = "OPERATIONS_WATER",
	Other = "OTHER",
	Padel = "PADEL",
	Paddleboarding = "PADDLEBOARDING",
	PaddleTennis = "PADDLE_TENNIS",
	Paintball = "PAINTBALL",
	Parkour = "PARKOUR",
	PerussiveMassage = "PERCUSSIVE_MASSAGE",
	Pickleball = "PICKLEBALL",
	Pilates = "PILATES",
	Polo = "POLO",
	Powerlifting = "POWERLIFTING",
	PublicSpeaking = "PUBLIC_SPEAKING",
	RockClimbing = "ROCK_CLIMBING",
	Rowing = "ROWING",
	Rugby = "RUGBY",
	Running = "RUNNING",
	Sailing = "SAILING",
	Sauna = "SAUNA",
	Skateboarding = "SKATEBOARDING",
	Skiing = "SKIING",
	Snowboarding = "SNOWBOARDING",
	Soccer = "SOCCER",
	Softball = "SOFTBALL",
	Spin = "SPIN",
	Spikeball = "SPIKEBALL",
	Squash = "SQUASH",
	StadiumSteps = "STADIUM_STEPS",
	StagePerformance = "STAGE_PERFORMANCE",
	Stairmaster = "STAIRMASTER",
	StrengthTrainer = "STRENGTH_TRAINER",
	StrollerJogging = "STROLLER_JOGGING",
	StrollerWalking = "STROLLER_WALKING",
	Stretching = "STRETCHING",
	Surfing = "SURFING",
	Swimming = "SWIMMING",
	TableTennis = "TABLE_TENNIS",
	Tennis = "TENNIS",
	Toddlerwearing = "TODDLERWEARING",
	TrackAndField = "TRACK_AND_FIELD",
	Triathlon = "TRIATHLON",
	Ultimate = "ULTIMATE",
	Volleyball = "VOLLEYBALL",
	Wakeboarding = "WAKEBOARDING",
	Walking = "WALKING",
	WaterPolo = "WATER_POLO",
	WaterSkiing = "WATER_SKIING",
	WatchingSports = "WATCHING_SPORTS",
	Weightlifting = "WEIGHTLIFTING",
	WheelchairPushing = "WHEELCHAIR_PUSHING",
	Wrestling = "WRESTLING",
	YardWork = "YARD_WORK",
	Yoga = "YOGA"
}