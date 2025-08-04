const toGetWorkouts = () => '/api/whoop/workouts';
const toGetWorkout = (id: string) => `/api/whoop/workouts/${id}`;

export const useWorkouts = () => {
	const workouts = useState<WhoopWorkout[]>('workouts.current', () => []);
	const currentSportNames = useState<string[]>('workouts.sportNames', () => []);
	const currentTotal = useState<number>('workouts.total', () => 0);
	const nextToken = useState<string | null>('workouts.nextToken', () => null);
	const { currentTimeframe } = useTimeframe();

	const { data, pending, error, refresh } = useFetch<WhoopWorkoutResponse>(toGetWorkouts(), {
		query: computed(() => ({
			startDate: currentTimeframe.value.startDate,
			endDate: currentTimeframe.value.endDate
		})),
		watch: [currentTimeframe]
	});

	// Update workouts when data changes
	watch(data, (newData) => {
		if (newData) {
			workouts.value = data.value?.workouts || [];
			currentSportNames.value = data.value?.sportNames || [];
			currentTotal.value = data.value?.total || 0;
			nextToken.value = data.value?.nextToken || null;
		}
	}, { immediate: true });

	return {
		workouts: workouts,
		currentSportNames: readonly(currentSportNames),
		currentTotal: readonly(currentTotal),
		nextToken: readonly(nextToken),
		pending,
		error,
		refresh
	};
};
