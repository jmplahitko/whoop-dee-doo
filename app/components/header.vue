<template>
	<header class="flex items-center justify-between p-4 border-b">
		<UButton color="neutral" variant="ghost" size="sm" icon="i-lucide-panel-left" />
		<!-- <button
				class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 border border-transparent h-7 w-7">
				<Icon name="heroicons:menu" class="size-4" />
			</button> -->
		<!-- <div class="ml-3">
					<div class="text-sm font-medium text-white">{{ user?.fullName }}</div>
					<div class="text-xs text-white">{{ user?.email }}</div>
				</div> -->
		<div class="flex items-center gap-2">
			<UButton color="neutral" variant="outline" icon="i-lucide-sun-dim" />
			<UButton v-if="user" @click="logout" color="neutral" variant="outline" icon="i-lucide-log-out" />
		</div>
	</header>
</template>

<script setup>
const { user } = useUserSession()

const logout = async () => {
	await $fetch('/api/auth/logout', { method: 'POST' });
	await navigateTo('/login');
}
</script>