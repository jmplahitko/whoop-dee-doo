<template>
	<div class="p-6 space-y-8">
		<div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
			<div>
				<h1 class="text-3xl font-bold mb-2 uppercase tracking-wide">Workout Dashboard</h1>
				<p class="text-muted">Plan your training based on WHOOP recovery data</p>
			</div>
			<div class="flex items-center gap-6">
				<MetricCircle :value="78" type="recovery" size="xl" />
			</div>
		</div>
		<!-- <ULink to="/current-data">See current data</ULink> -->
	</div>
</template>

<script setup lang="ts">
definePageMeta({});

const { user } = useUserSession();
const { workouts } = useWorkouts();
const { cycles } = useCycles();

</script>