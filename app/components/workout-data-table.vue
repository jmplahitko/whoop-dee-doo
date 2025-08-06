<template>
	<UTable :data="workouts" :columns="workoutColumns" :loading="workoutsPending" />
	<div class="flex justify-center" v-if="canLoadMoreWorkouts">
		<UButton color="neutral" variant="ghost" @click="() => loadMoreWorkouts()">
			<template #leading>
				<UIcon name="i-heroicons-plus" />
			</template>
			Load More Workouts
		</UButton>
	</div>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui';
import { UButton, UPopover, StrainCircle } from '#components';

const { workouts, pending: workoutsPending, loadMore: loadMoreWorkouts, canLoadMore: canLoadMoreWorkouts } = useWorkouts();


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
		cell: ({ row }) => shortDate(row.original.start)
	},
	{
		accessorKey: 'end',
		header: 'End',
		cell: ({ row }) => shortDate(row.original.end)
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
		header: 'Status'
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