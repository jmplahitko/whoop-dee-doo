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
			<h3 class="text-lg font-medium text-white mb-4">Cycles</h3>
			<UTable :data="cycles" :columns="cycleColumns" :loading="cyclesPending">
				<template #expanded="{ row }">
					<div class="px-4 bg-gray-600 rounded-lg">
						<UTable
							:data="workouts.filter(workout => new Date(workout.created_at).getDate() === new Date(row.original.created_at).getDate()).sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())"
							:columns="workoutColumns" :loading="workoutsPending" />
					</div>
				</template>
			</UTable>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui';
import { h } from 'vue'
import { UButton, UIcon, StrainCircle, UPopover } from '#components';

definePageMeta({
	pageTitle: 'Current Data'
});

const { workouts, pending: workoutsPending } = useWorkouts();
const { cycles, pending: cyclesPending } = useCycles();

// Format date helper
const formatDate = (dateString: string) => {
	return new Date(dateString).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	});
};

const formatTime = (dateString: string) => {
	return new Date(dateString).toLocaleTimeString('en-US', {
		hour: '2-digit',
		minute: '2-digit'
	});
};

// Cycle table columns
const cycleColumns: TableColumn<WhoopCycle>[] = [
	{
		id: 'expandCycle',
		cell: ({ row }) =>
			h(UButton, {
				color: 'neutral',
				variant: 'ghost',
				icon: 'i-lucide-chevron-down',
				square: true,
				'aria-label': 'Expand',
				ui: {
					leadingIcon: [
						'transition-transform',
						row.getIsExpanded() ? 'duration-200 rotate-180' : ''
					]
				},
				onClick: () => row.toggleExpanded()
			})
	},
	{
		accessorKey: 'id',
		header: 'ID',
	},
	{
		accessorKey: 'start',
		header: 'Start Date',
		cell: ({ row }) => formatDate(row.original.start)
	},
	{
		accessorKey: 'end',
		header: 'End Date',
		cell: ({ row }) => row.original.end ? formatDate(row.original.end) : ''
	},
	{
		accessorKey: 'score.strain',
		header: 'Strain',
		cell: ({ row }) => {
			const strain = row.original.score?.strain;
			return h(StrainCircle, { strain });
		}
	},
	{
		accessorKey: 'score_state',
		header: 'Status',
		cell: ({ row }) => {
			const scoreState = row.original.score_state;
			return h(UIcon, {
				name: scoreState === 'SCORED' ? 'i-heroicons-check-circle' : scoreState === 'PENDING_SCORE' ? 'i-heroicons-clock' : 'i-heroicons-x-circle',
				color: scoreState === 'SCORED' ? 'success' : scoreState === 'PENDING_SCORE' ? 'warning' : 'error',
			});
		}
	},
	{
		header: 'Raw',
		cell: ({ row }) => {
			return h(UPopover, {
				mode: 'click'
			}, {
				default: () => h(UButton, {
					label: '{}',
					// icon: 'i-heroicons-',
					color: 'neutral',
					variant: 'ghost',
				}),
				content: () => h('div', {
					class: 'p-4 max-w-md max-h-96 overflow-auto'
				}, [
					h('pre', {
						class: 'text-xs bg-gray-800 p-3 rounded overflow-auto'
					}, JSON.stringify(row.original, null, 2))
				])
			});
		}
	}
];

// Workout table columns
const workoutColumns: TableColumn<WhoopWorkout>[] = [
	{
		accessorKey: 'id',
		header: 'ID'
	},
	{
		accessorKey: 'sport_id',
		header: 'Sport',
		cell: ({ row }) => getSportTypeDisplay(row.original.sport_id as WhoopSportType)
	},
	{
		accessorKey: 'start',
		header: 'Start',
		cell: ({ row }) => formatTime(row.original.start)
	},
	{
		accessorKey: 'end',
		header: 'End',
		cell: ({ row }) => formatTime(row.original.end)
	},
	{
		accessorKey: 'score.strain',
		header: 'Strain',
		cell: ({ row }) => {
			const strain = row.original.score?.strain;
			return h(StrainCircle, { strain });
		}
	},
	{
		accessorKey: 'score_state',
		header: 'Status',
		cell: ({ row }) => {
			const scoreState = row.original.score_state;
			return h(UIcon, {
				name: scoreState === 'SCORED' ? 'i-heroicons-check-circle' : scoreState === 'PENDING_SCORE' ? 'i-heroicons-clock' : 'i-heroicons-x-circle',
				color: scoreState === 'SCORED' ? 'success' : scoreState === 'PENDING_SCORE' ? 'warning' : 'error',
			});
		}
	},
	{
		header: 'Raw',
		cell: ({ row }) => {
			return h(UPopover, {
				mode: 'click'
			}, {
				default: () => h(UButton, {
					label: '{}',
					// icon: 'i-heroicons-',
					color: 'neutral',
					variant: 'ghost',
				}),
				content: () => h('div', {
					class: 'p-4 max-w-md max-h-96 overflow-auto'
				}, [
					h('pre', {
						class: 'text-xs bg-gray-800 p-3 rounded overflow-auto'
					}, JSON.stringify(row.original, null, 2))
				])
			});
		}
	}
];
</script>