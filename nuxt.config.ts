import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-08-04',
	devtools: { enabled: true },
	modules: [
		'@nuxt/ui',
		'nuxt-auth-utils'
	],
	css: ['assets/css/fonts.css', 'assets/css/main.css'],
	ui: {
		colorMode: true,
		fonts: false,
	},
	alias: {
		'@model': path.resolve(__dirname, 'model')
	},
	runtimeConfig: {
		public: {
			apiBase: process.env.API_BASE || 'http://localhost:3001/api'
		},
		whoop: {
			clientId: process.env.WHOOP_CLIENT_ID,
			clientSecret: process.env.WHOOP_CLIENT_SECRET,
			redirectUri: process.env.WHOOP_REDIRECT_URI || 'http://localhost:3000/api/auth/callback'
		}
	}
})