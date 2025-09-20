<template>
	<div class="p-6 space-y-8">
		<div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
			<div>
				<h1 class="text-3xl font-bold mb-2 uppercase tracking-wide">Workout Dashboard</h1>
				<p class="text-muted">Plan your training based on WHOOP recovery data</p>
			</div>
			<div class="flex items-center gap-6">
				<MetricCircle :value="78" type="recovery" size="xl" />
				<UCard>
					<div class="flex flex-col space-y-1.5 pb-3">
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-2 text-white">
								<UIcon name="i-lucide-circle-check-big" class="w-5 h-5" />
								<h2 class="tracking-tight text-lg">WHOOP Connected</h2>
							</div>
							<UBadge variant="solid" color="neutral">Active</UBadge>
						</div>
						<p class="mt-2">
							Successfully connected to your WHOOP device. Recovery and workout data is syncing.
						</p>
					</div>
					<div class="pt-4">
						<div class="flex items-center justify-between">
							<p>Last sync: 2 minutes ago</p>
							<UButton color="neutral" size="sm" variant="outline">Disconnect</UButton>
						</div>
					</div>
				</UCard>
			</div>
		</div>
		<!-- <ULink to="/current-data">See current data</ULink> -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			<UCard variant="subtle">
				Recovery Score
			</UCard>
			<UCard variant="subtle">
				Sleep Score
			</UCard>
			<UCard variant="subtle">
				Daily Strain
			</UCard>
			<UCard variant="subtle">
				Resting HR
			</UCard>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({});

const { user } = useUserSession();
const { workouts } = useWorkouts();
const { cycles } = useCycles();

</script>