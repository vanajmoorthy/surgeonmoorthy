import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/research",
			name: "research",
			component: () => import("../views/ResearchView.vue"),
		},
		{
			path: "/practice",
			name: "practice",
			component: () => import("../views/PracticeView.vue"),
		},
		{
			path: "/innovation",
			name: "innovation",
			component: () => import("../views/InnovationView.vue"),
		},
		{
			path: "/contact",
			name: "contact",
			component: () => import("../views/ContactView.vue"),
		},
		{
			path: "/bariatric",
			name: "bariatric",
			component: () => import("../views/BariatricView.vue"),
			meta: { transition: "slide-left" },
		},
	],
});

export default router;
