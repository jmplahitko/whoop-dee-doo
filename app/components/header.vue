<template>
	<header class="flex items-center justify-between p-4 border-b border-steel-500">
		<UButton color="neutral" variant="ghost" size="sm" icon="i-lucide-panel-left" />
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