<template>
	<div class="px-4 py-6 sm:px-0">
		<div class="bg-gray-600 rounded-lg flex items-center p-4">
			<div class="flex justify-between items-center w-full">
				<h3 class="text-lg font-medium text-white">Welcome {{ user?.firstName }}!</h3>
				<TimeframeSelect />
			</div>
		</div>
		<pre>{{ selectedTimeframe }}</pre>
		<pre>{{ currentTimeframe }}</pre>
		<!-- <pre>{{ workouts }}</pre> -->
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	// middleware: 'auth'
});

const { user } = useUserSession();
// const { workouts } = useWorkouts();
const { currentTimeframe, selectedTimeframe } = useTimeframe();

</script>