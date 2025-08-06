const toGetWorkouts = () => '/api/whoop/workouts';
const toGetWorkout = (id: string) => `/api/whoop/workouts/${id}`;

export const useWorkouts = () => {
	const workouts = useState<WhoopWorkout[]>('workouts.current', () => []);
	const nextToken = useState<string | null>('workouts.nextToken', () => null);
	const { currentTimeframe } = useTimeframe();

	const { data, pending, error, refresh } = useFetch<WhoopWorkoutResponse>(toGetWorkouts(), {
		query: computed(() => ({
			startDate: currentTimeframe.value.startDate,
			endDate: currentTimeframe.value.endDate,
			limit: 25
		})),
		watch: [currentTimeframe]
	});

	// Update workouts when data changes
	watch(data, (newData) => {
		if (newData) {
			workouts.value = newData.workouts;
			nextToken.value = newData.nextToken || null;
		}
	}, { immediate: true });

	// Function to load more workouts
	const loadMore = async () => {
		if (!nextToken.value) return;

		try {
			const response = await $fetch<WhoopWorkoutResponse>(toGetWorkouts(), {
				query: {
					startDate: currentTimeframe.value.startDate,
					endDate: currentTimeframe.value.endDate,
					nextToken: nextToken.value,
					limit: 25
				}
			});

			if (response.workouts) {
				workouts.value.push(...response.workouts);
				nextToken.value = response.nextToken || null;
			}
		} catch (error) {
			console.error('Error loading more workouts:', error);
		}
	};

	return {
		workouts: workouts,
		total: computed(() => workouts.value.length),
		pending,
		error,
		refresh,
		loadMore,
		canLoadMore: computed(() => nextToken.value !== null)
	};
};
