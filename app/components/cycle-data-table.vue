<template>
	<UTable :data="cycles" :columns="cycleColumns" :loading="cyclesPending" />
	<div class="flex justify-center" v-if="canLoadMoreCycles">
		<UButton color="neutral" variant="ghost" @click="() => loadMoreCycles()">
			<template #leading>
				<UIcon name="i-heroicons-plus" />
			</template>
			Load More Cycles
		</UButton>
	</div>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui';
import { UButton, UPopover, StrainCircle } from '#components';

const { cycles, pending: cyclesPending, loadMore: loadMoreCycles, canLoadMore: canLoadMoreCycles } = useCycles();

// Cycle table columns
const cycleColumns: TableColumn<WhoopCycle>[] = [
	{
		accessorKey: 'id',
		header: 'ID',
	},
	{
		accessorKey: 'start',
		header: 'Start Date',
		cell: ({ row }) => shortDate(row.original.start)
	},
	{
		accessorKey: 'end',
		header: 'End Date',
		cell: ({ row }) => row.original.end ? shortDate(row.original.end) : ''
	},
	{
		accessorKey: 'score.strain',
		header: 'Strain',
		cell: ({ row }) => {
			return h(StrainCircle, {
				strain: row.original.score.strain
			});
		}
	},
	{
		accessorKey: 'score_state',
		header: 'Status',
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
