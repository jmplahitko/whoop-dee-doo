import { useTimeframe } from './timeframe';

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
		}
	}, { immediate: true });

	return {
		cycles,
		pending,
		error,
		refresh
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