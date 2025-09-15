<template>
	<div class="bg-steel-800 w-[255px]">
		<p class="text-sm font-medium p-2">WHOOP Workout Planner</p>
		<UNavigationMenu orientation="vertical" :items="items" variant="pill" highlight-color="neutral" :ui="{
			root: 'flex flex-col gap-1 w-[255px] p-2',
			list: 'flex flex-col gap-1',
			link: 'text-sm font-medium rounded-[6px] text-white hover:text-white before:rounded-[6px]',
			linkLeadingIcon: 'text-xs font-medium text-white hover:text-white',
		}" />
	</div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
	{
		label: 'Dashboard',
		to: '/dashboard',
		icon: 'i-heroicons-home'
	},
	{
		label: 'Weekly Planner',
		to: '/weekly-planner',
		icon: 'i-heroicons-calendar'
	},
	{
		label: 'Workout Library',
		to: '/workout-library',
		icon: 'i-heroicons-bolt'
	},
	{
		label: 'Workout Tracker',
		to: '/workout-tracker',
		icon: 'i-heroicons-fire'
	},
	{
		label: 'Activity Overview',
		to: '/activity-overview',
		icon: 'i-heroicons-chart-bar'
	},
	{
		label: 'Settings',
		to: '/settings',
		icon: 'i-heroicons-cog'
	}
]
</script>
