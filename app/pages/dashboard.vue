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

const { user } = useUserSession();

// const { data } = await useFetch('/api/whoop/workouts', {
// 	query: {
// 		startDate: '2025-06-01T00:00:00Z',
// 		endDate: '2025-06-30T23:59:59Z'
// 	}
// });

// console.log(data?.value?.sportNames);
// console.log(data?.value?.workouts);

const { data } = await useFetch(`/api/whoop/workouts/${'b5d8f7a6-b48d-4e39-acbf-2a021ce08620'}`);

console.log(data?.value?.workout);
</script>