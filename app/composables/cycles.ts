
const toGetCycles = () => '/api/whoop/cycles';
const toGetCycle = (id: string) => `/api/whoop/cycles/${id}`;

export const useCycles = () => {
	const cycles = useState<WhoopCycle[]>('cycles.current', () => []);
	const nextToken = useState<string | null>('cycles.nextToken', () => null);
	const { currentTimeframe } = useTimeframe();

	const { data, pending, error, refresh } = useFetch<WhoopCycleResponse>(toGetCycles(), {
		query: computed(() => ({
			startDate: currentTimeframe.value.startDate,
			endDate: currentTimeframe.value.endDate,
			limit: 25
		})),
		watch: [currentTimeframe]
	});


	// Update cycles when data changes
	watch(data, (newData) => {
		if (newData?.cycles) {
			cycles.value = newData.cycles;
			nextToken.value = newData.nextToken;
		}
	}, { immediate: true });

	// Function to load more cycles
	const loadMore = async () => {
		if (!nextToken.value) return;

		try {
			const response = await $fetch<WhoopCycleResponse>(toGetCycles(), {
				query: {
					startDate: currentTimeframe.value.startDate,
					endDate: currentTimeframe.value.endDate,
					nextToken: nextToken.value,
					limit: 25
				}
			});

			if (response.cycles) {
				cycles.value.push(...response.cycles);
				nextToken.value = response.nextToken;
			}
		} catch (error) {
			console.error('Error loading more cycles:', error);
		}
	};

	return {
		cycles,
		total: computed(() => cycles.value.length),
		pending,
		error,
		refresh,
		loadMore,
		canLoadMore: computed(() => nextToken.value !== null)
	};
};

export const useCycle = (id: string) => {
	const { data, pending, error, refresh } = useFetch<WhoopCycle>(toGetCycle(id), {
		key: `cycle-${id}`
	});

	return {
		cycle: data,
		pending,
		error,
		refresh
	};
}; 