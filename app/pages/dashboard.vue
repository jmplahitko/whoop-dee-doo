<template>
	<div class="min-h-screen bg-gray-50">
		<nav class="bg-white shadow">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex justify-between h-16">
					<div class="flex items-center">
						<h1 class="text-xl font-semibold text-gray-900">Whoop Dashboard</h1>
					</div>
					<div class="flex items-center">
						<div class="ml-3">
							<div class="text-sm font-medium text-gray-700">{{ user?.fullName }}</div>
							<div class="text-xs text-gray-500">{{ user?.email }}</div>
						</div>
						<button @click="logout" class="ml-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium">
							Logout
						</button>
					</div>
				</div>
			</div>
		</nav>

		<main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
			<div class="px-4 py-6 sm:px-0">
				<div class="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
					<div class="text-center">
						<h3 class="text-lg font-medium text-gray-900">Welcome {{ user?.firstName }}!</h3>
						<p class="mt-2 text-sm text-gray-500">
							You are successfully authenticated with Whoop!
						</p>
						<div class="mt-4">
							<div class="bg-green-50 border border-green-200 rounded-md p-4">
								<div class="flex">
									<div class="flex-shrink-0">
										<svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clip-rule="evenodd" />
										</svg>
									</div>
									<div class="ml-3">
										<p class="text-sm font-medium text-green-800">
											Authentication successful
										</p>
										<p class="mt-1 text-sm text-green-700">
											Your Whoop access token is securely stored in your session.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup>
definePageMeta({
	middleware: 'auth'
})

const { user } = useUserSession()
console.log(user)

const logout = async () => {
	await $fetch('/api/auth/logout', { method: 'POST' })
	await navigateTo('/login')
}
</script>