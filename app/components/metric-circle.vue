<template>
	<div class="relative inline-flex items-center justify-center" :class="sizeClass">
		<svg class="w-full h-full transform -rotate-90" viewBox="0 0 32 32">
			<!-- Background circle -->
			<circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="2.5" fill="none" class="text-steel-500" />
			<!-- Progress circle -->
			<circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="2.5" fill="none" :stroke-dasharray="circumference" :stroke-dashoffset="strokeDashoffset" :class="progressColor"
				stroke-linecap="round" />
		</svg>
		<!-- Value in center -->
		<div class="absolute inset-0 flex items-center justify-center">
			<span :class="['font-mono', textSizeClass]">
				{{ displayValue }}
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
type MetricType = 'strain' | 'recovery' | 'sleep';

interface Props {
	value: number | null | undefined;
	type: MetricType;
	size?: 'sm' | 'md' | 'lg' | 'xl';
}

const props = withDefaults(defineProps<Props>(), {
	size: 'md'
});

// Size classes
const sizeClass = computed(() => {
	switch (props.size) {
		case 'sm':
			return 'w-4 h-4';
		case 'md':
			return 'w-8 h-8';
		case 'lg':
			return 'w-16 h-16';
		case 'xl':
			return 'w-32 h-32';
		default:
			return props.size;
	}
});

// Text size classes based on component size
const textSizeClass = computed(() => {
	switch (props.size) {
		case 'sm':
			return 'text-sm';
		case 'md':
			return 'text-md';
		case 'lg':
			return 'text-lg';
		case 'xl':
			return 'text-3xl';
		default:
			return 'text-md';
	}
});

// Calculate circumference (2 * π * radius)
const circumference = 2 * Math.PI * 14;

// Get max value and color based on type
const getTypeConfig = (type: MetricType) => {
	switch (type) {
		case 'strain':
			return { max: 21, color: 'text-strain' };
		case 'recovery':
			return { max: 100, color: 'text-recovery' };
		case 'sleep':
			return { max: 100, color: 'text-sleep' };
		default:
			return { max: 100, color: 'text-gray-400' };
	}
};

// Calculate stroke dash offset based on value percentage
const strokeDashoffset = computed(() => {
	if (!props.value || props.value <= 0) return circumference;

	const config = getTypeConfig(props.type);
	const percentage = (props.value / config.max) * 100;
	// Clamp percentage to 0-100
	const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
	return circumference - (clampedPercentage * circumference / 100);
});

// Format value for display
const displayValue = computed(() => {
	if (!props.value) return '0';

	switch (props.type) {
		case 'strain':
			return props.value.toFixed(1);
		case 'recovery':
			return Math.round(props.value).toString() + '%';
		case 'sleep':
			return props.value.toFixed(1) + 'h';
		default:
			return props.value.toString();
	}
});

// Determine color based on type and value
const progressColor = computed(() => {
	if (!props.value) return 'text-gray-400';

	const config = getTypeConfig(props.type);

	// Add conditional coloring based on value ranges
	if (props.type === 'recovery') {
		if (props.value >= 67) return 'text-recovery-high';
		if (props.value >= 34) return 'text-recovery-medium';
		return 'text-recovery-low';
	}

	return config.color;
});
</script>