<template>

	<div class="px-4 py-6 sm:px-0">
		<div class="bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center p-4">
			<div class="text-center">
				<h3 class="text-lg font-medium text-white">Welcome {{ user?.firstName }}!</h3>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	middleware: 'auth'
});

const { user } = useUserSession()
</script>