<template>
	<div class="px-4 py-6 sm:px-0">
		<div class="bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center p-4">
			<div class="flex justify-between items-center w-full">
				<h3 class="text-lg font-medium text-white">Welcome {{ user?.firstName }}!</h3>
				<div class="flex items-center gap-2">
					<label for="timeframe" class="text-white">Timeframe:</label>
					<div class="relative">
						<select v-model="selectedTimeframe" class="appearance-none mr-3 text-white">
							<option v-for="option in timeframeOptions" :key="option.value" :value="option.value">
								{{ option.label }}
							</option>
						</select>
						<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
							<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>

		<pre>{{ workouts }}</pre>
	</div>
</template>

<script setup>
definePageMeta({
	// middleware: 'auth'
});

const { user } = useUserSession();
const { currentTimeframe, getTimeframeOptions } = useTimeframe();
const { workouts } = useWorkouts();

const timeframeOptions = computed(() => getTimeframeOptions());

const selectedTimeframe = ref(timeframeOptions.value[0].value);

</script>