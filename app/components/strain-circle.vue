<template>
	<div class="relative inline-flex items-center justify-center">
		<svg class="w-8 h-8 transform -rotate-90" viewBox="0 0 32 32">
			<!-- Background circle -->
			<circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="2" fill="none" class="text-gray-600" />
			<!-- Progress circle -->
			<circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="2" fill="none" :stroke-dasharray="circumference" :stroke-dashoffset="strokeDashoffset" :class="strainColor"
				stroke-linecap="round" />
		</svg>
		<!-- Strain value in center -->
		<div class="absolute inset-0 flex items-center justify-center">
			<span class="text-xs font-medium" :class="strainColor">
				{{ strainValue }}
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Props {
	strain: number | null | undefined;
}

const props = defineProps<Props>();

// Calculate circumference (2 * π * radius)
const circumference = 2 * Math.PI * 14;

// Calculate stroke dash offset based on strain percentage
const strokeDashoffset = computed(() => {
	if (!props.strain || props.strain <= 0) return circumference;

	// Convert strain (0-21) to percentage (0-100)
	const percentage = (props.strain / 21) * 100;
	// Calculate stroke dash offset (circumference - (percentage * circumference / 100))
	return circumference - (percentage * circumference / 100);
});

// Format strain value for display
const strainValue = computed(() => {
	return props.strain?.toFixed(1) ?? 0;
});

// Determine color based on strain level
const strainColor = computed(() => {
	return props.strain ? 'text-strain' : 'text-gray-400';
});
</script>