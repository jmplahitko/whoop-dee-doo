<template>
	<div class="px-4 py-6 sm:px-0">
		<div class="bg-gray-600 rounded-lg flex items-center p-4">
			<div class="flex justify-between items-center w-full">
				<h2 class="text-lg font-medium text-white">Welcome {{ user?.firstName }}!</h2>
				<TimeframeSelect />
			</div>
		</div>
		<template v-for="sportName in currentSportNames.toSorted()">
			<h3 class="text-lg font-medium text-white">{{ sportName }}</h3>
			<div class="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				<div v-for="workout in workouts.filter(workout => workout.sport_name === sportName).toSorted((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())" :key="workout.id"
					class="bg-gray-600 rounded-lg p-4">
					<p>{{ workout.sport_name }}</p>
					<p>{{ workout.start }}</p>
					<p>{{ workout.end }}</p>
					<p>{{ workout.score.strain }}</p>
				</div>
			</div>
		</template>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	// middleware: 'auth'
});

const { user } = useUserSession();
const { workouts, currentSportNames } = useWorkouts();

</script>