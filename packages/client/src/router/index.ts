import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import home from '../pages/home';
import oidcCallback from '../pages/oidc-callback';
import { routeAuthorization } from './middlewares/routeAuthorization';
import { RoleFlags } from '../model/User';
import dashboard from '../pages/dashboard';


const routes: RouteRecordRaw[] = [
	{
		name: 'home',
		path: '/',
		component: home,
	},
	{
		name: 'oidcCallback',
		props: true,
		path: '/auth/:provider/callback',
		component: oidcCallback
	},
	{
		name: 'dashboard',
		path: '/dashboard',
		component: dashboard,
		meta: {
			authorize: RoleFlags.user
		}
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes
});

// router.beforeEach(routeAuthorization);

export {
	router
};