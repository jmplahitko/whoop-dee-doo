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
				<div class="flex items-center justify-between pb-2">
					<p>Recovery Score</p>
					<UIcon name="i-lucide-activity" class="w-4 h-4" />
				</div>
				<p class="text-2xl font-bold"><span class="text-white">78</span><span class="ml-1">%</span></p>
				<div class="flex items-center justify-between mt-1">
					<p class="text-xs">Good recovery</p>
					<p class="text-xs font-medium text-recovery-high">
						↗ +5% vs yesterday
					</p>
				</div>
			</UCard>
			<UCard variant="subtle">
				<div class="flex items-center justify-between">
					<p>Sleep Score</p>
					<UIcon name="i-lucide-moon" class="w-4 h-4" />
				</div>
				<p class="text-2xl font-bold"><span class="text-white">85</span><span class="ml-1">%</span></p>
				<div class="flex items-center justify-between mt-1">
					<p class="text-xs">8h 24m total</p>
					<p class="text-xs font-medium text-recovery-high">
						↗ +12% vs avg
					</p>
				</div>
			</UCard>
			<UCard variant="subtle">
				<div class="flex items-center justify-between">
					<p>Daily Strain</p>
					<UIcon name="i-lucide-zap" class="w-4 h-4" />
				</div>
				<p class="text-2xl font-bold"><span class="text-white">14.2</span></p>
				<div class="flex items-center justify-between mt-1">
					<p class="text-xs">Moderate Effort</p>
					<p class="text-xs">
						Target: 15.0
					</p>
				</div>
			</UCard>
			<UCard variant="subtle">
				<div class="flex items-center justify-between">
					<p>Resting HR</p>
					<UIcon name="i-lucide-heart" class="w-4 h-4" />
				</div>
				<p class="text-2xl font-bold"><span class="text-white">52</span><span class="text-lg ml-1">bpm</span></p>
				<div class="flex items-center justify-between mt-1">
					<p class="text-xs">Well rested</p>
					<p class="text-xs font-medium text-recovery-high">
						↙ -3 vs avg
					</p>
				</div>
			</UCard>
		</div>
		<UCard variant="subtle">
			<template #header>
				<div class="text-2xl text-white font-semibold leading-none tracking-tight flex items-center gap-2">
					<UIcon name="i-lucide-target" class="w-5 h-5" />
					<h2 class="uppercase">Fitness Goals</h2>
				</div>
				<p class="mt-1 text-sm text-muted">Track your progress towards your daily and weekly targets</p>
			</template>
			<UCard variant="soft" :ui="{ body: 'sm:p-4' }">
				<div class="flex align-center justify-between mb-2 text-white">
					<h3 class="text-md font-bold uppercase tracking-wide">Overall Achievement</h3>
					<span class="text-lg font-bold">94%</span>
				</div>
				<div class="relative w-full overflow-hidden rounded-full bg-steel-500 h-3 mb-2">
					<div class="h-full w-full flex-1 bg-primary transition-all" style="transform: translateX(-6%);"></div>
				</div>
				<p class="text-xs">Great progress! Focus on sleep consistency to reach 100%.</p>
			</UCard>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
				<UCard variant="outline" :ui="{ body: 'sm:p-4' }">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-2">
							<UIcon name="i-lucide-trending-down" class="w-4 h-4 text-orange" />
							<span class="text-sm font-medium">Sleep</span>
						</div>
					</div>
				</UCard>
			</div>
		</UCard>
	</div>
</template>

<script setup lang="ts">
definePageMeta({});

const { user } = useUserSession();
const { workouts } = useWorkouts();
const { cycles } = useCycles();

</script>