<script setup>
import { RouterLink, RouterView } from "vue-router";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
	<main id="main">
		<Nav />

		<RouterView />

		<Footer />
	</main>
</template>

<style>
@import "@/assets/base.css";
</style>
