<template>
	<div class="px-4 py-6 sm:px-0">
		<div class="bg-gray-600 rounded-lg flex items-center p-4">
			<div class="flex justify-between items-center w-full">
				<h2 class="text-lg font-medium text-white">{{ $route.meta.pageTitle }}</h2>
				<TimeframeSelect />
			</div>
		</div>

		<!-- Cycles Section -->
		<div class="mt-6">
			<div class="flex justify-between items-center">
				<h3 class="text-lg font-medium text-white mb-4">Cycles</h3>
			</div>
			<CycleDataTable />
		</div>

		<div class="mt-6">
			<div class="flex justify-between items-center">
				<h3 class="text-lg font-medium text-white mb-4">Workouts</h3>
			</div>
			<WorkoutDataTable />
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	pageTitle: 'Current Data'
});


</script>