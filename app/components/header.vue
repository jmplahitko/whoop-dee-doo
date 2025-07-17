<template>
	<nav class="bg-gray-800 shadow fixed top-0 left-0 right-0 z-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16">
				<div class="flex items-center">
					<h1 class="text-xl font-semibold text-white">Dashboard</h1>
				</div>
				<div class="flex items-center">
					<div class="ml-3">
						<div class="text-sm font-medium text-white">{{ user?.fullName }}</div>
						<div class="text-xs text-white">{{ user?.email }}</div>
					</div>
					<button @click="logout" class="ml-4 bg-transparent border-teal border-1 hover:bg-teal text-teal hover:text-black px-4 py-2 rounded-full text-sm font-medium">
						Logout
					</button>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
const { user } = useUserSession()

const logout = async () => {
	await $fetch('/api/auth/logout', { method: 'POST' });
	await navigateTo('/login');
}
</script>