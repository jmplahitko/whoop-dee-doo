<template>
	<div class="px-4 py-6 sm:px-0">
		<div class="bg-gray-600 rounded-lg flex items-center p-4">
			<div class="flex justify-between items-center w-full">
				<h2 class="text-lg font-medium text-white">Welcome {{ user?.firstName }}!</h2>
				<TimeframeSelect />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({});

const { user } = useUserSession();
const { workouts, currentSportNames } = useWorkouts();
const { cycles } = useCycles();

</script>