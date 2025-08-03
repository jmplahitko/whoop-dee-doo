<template>
	<div class="flex items-center gap-2">
		<label for="timeframe" class="text-white">Timeframe:</label>
		<div class="flex items-center">
			<select v-model="selectedTimeframe" @change="handleTimeframeChange" class="appearance-none mr-3 text-white">
				<option v-for="option in timeframeOptions" :key="option.value" :value="option.value">
					{{ option.label }}
				</option>
			</select>
			<div class="pointer-events-none inset-y-0 right-0 flex items-center px-2 text-white">
				<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
					<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
				</svg>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { TimeframeType } from '../composables/timeframe';
import { useTimeframe } from '../composables/timeframe';

const { currentTimeframe, getTimeframeOptions, setTimeframe } = useTimeframe();
const timeframeOptions = computed(() => getTimeframeOptions());
const selectedTimeframe = computed(() => currentTimeframe.value.type);

const handleTimeframeChange = (event: Event) => {
	const target = event.target as HTMLSelectElement;
	setTimeframe(target.value as TimeframeType);
};
</script>