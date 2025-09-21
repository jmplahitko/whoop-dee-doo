export default defineAppConfig({
	ui: {
		button: {
			slots: {
				base: [
					'rounded-[6px] font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75'
				]
			}
		},
		badge: {
			variants: {
				size: {
					xs: {
						base: 'text-[8px]/3 px-2 py-0.5 gap-1 rounded-xs',
					},
					sm: {
						base: 'text-[10px]/3 px-2 py-0.5 gap-1 rounded-xs',
					},
					md: {
						base: 'text-xs/4 px-2 py-0.5 gap-0.5 rounded-xs',
					},
					lg: {
						base: 'text-sm/5 px-2.5 py-0.5 gap-1.5 rounded-xs',
					},
					xl: {
						base: 'text-base/4 px-3 py-1 gap-1.5 rounded-xs',
					}
				},
			},
			compoundVariants: [
				{
					color: 'neutral',
					variant: 'solid',
					class: 'bg-steel-700 text-white'
				}
			]
		},
		card: {
			slots: {
				root: 'bg-default rounded-md text-muted',
				header: 'p-4 pb-0 sm:p-6 sm:pb-0 border-b-0',
				body: 'p-4 sm:p-6 text-sm',
				footer: 'p-4 sm:p-6'
			},
			variants: {
				variant: {
					solid: {
						root: 'bg-default rounded-md text-muted'
					},
					outline: {
						root: 'overflow-hidden rounded-md text-muted bg-default'
					},
					soft: {
						root: 'overflow-hidden rounded-md text-muted bg-elevated/50 ring-0'
					},
					subtle: {
						root: 'overflow-hidden rounded-md text-muted bg-elevated/50 ring ring-default'
					}
				}
			}
		}
	}
})