const toGetWorkouts = () => '/api/whoop/workouts';
const toGetWorkout = (id: string) => `/api/whoop/workouts/${id}`;

export const useWorkouts = () => {
	const workouts = useState<WhoopWorkout[]>('whoop.workouts', () => []);
	const { currentTimeframe } = useTimeframe();

	const { data, pending, error, refresh } = useFetch<WhoopWorkout[]>(toGetWorkouts(), {
		query: computed(() => ({
			startDate: currentTimeframe.value.startDate,
			endDate: currentTimeframe.value.endDate
		})),
		watch: [currentTimeframe]
	});

	// Update workouts when data changes
	watch(data, (newData) => {
		if (newData) {
			workouts.value = newData;
		}
	}, { immediate: true });

	return {
		workouts: readonly(workouts),
		pending,
		error,
		refresh
	};
};
