<script setup>
import { RouterLink, RouterView } from "vue-router";
import Nav from "@/components/Nav.vue";
</script>

<template>
	<main id="main">
		<Nav />

		<RouterView />
	</main>
</template>

<style>
@import "@/assets/base.css";

#main {
	margin: 2rem 2rem;
}
</style>
