<template>
	<div class="bg-steel-800 w-[255px]">
		<p class="text-sm font-medium text-muted pt-4 pl-4">WHOOP Workout Planner</p>
		<UNavigationMenu orientation="vertical" :items="items" variant="pill" highlight-color="neutral" :ui="{
			root: 'flex flex-col gap-1 w-[255px] p-2',
			list: 'flex flex-col gap-1',
			link: 'text-sm font-medium rounded-[6px] text-white hover:text-white before:rounded-[6px]',
			linkLeadingIcon: 'w-4 h-4 font-medium text-white hover:text-white',
		}" />
	</div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
	{
		label: 'Dashboard',
		to: '/dashboard',
		icon: 'i-lucide-home'
	},
	{
		label: 'Weekly Planner',
		to: '/weekly-planner',
		icon: 'i-lucide-calendar'
	},
	{
		label: 'Workout Library',
		to: '/workout-library',
		icon: 'i-lucide-zap'
	},
	{
		label: 'Workout Tracker',
		to: '/workout-tracker',
		icon: 'i-lucide-dumbbell'
	},
	{
		label: 'Activity Overview',
		to: '/activity-overview',
		icon: 'i-lucide-chart-column'
	},
	{
		label: 'Settings',
		to: '/settings',
		icon: 'i-lucide-settings'
	}
]
</script>
