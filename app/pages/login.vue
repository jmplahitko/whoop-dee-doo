<template>
	<div class="min-h-screen flex items-center justify-center bg-grad-light">
		<div class="max-w-md w-full space-y-8">
			<div class="mt-8 space-y-6">
				<div>
					<button @click="signInWithWhoop" class="bg-transparent border-teal border-1 hover:bg-teal text-teal hover:text-black px-8 py-4 rounded-full text-xs uppercase">
						Connect with your Whoop account
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	// middleware: 'auth'
})

const signInWithWhoop = () => {
	// Redirect to the Whoop OAuth endpoint
	window.location.href = '/api/auth/whoop'
}
</script>