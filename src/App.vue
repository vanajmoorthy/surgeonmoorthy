<script setup>
import { RouterLink, RouterView } from "vue-router";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
	<main id="main">
		<Nav />
		<router-view v-slot="{ Component }">
			<transition name="fade">
				<component :is="Component" />
			</transition>
		</router-view>
		<Footer />
	</main>
</template>

<style>
@import "@/assets/base.css";
.fade-enter-active,
.fade-leave-active {
	transition-property: opacity;
	transition-duration: 0.5s;
}

.fade-enter-active {
	transition-delay: 0.5s;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}
</style>
