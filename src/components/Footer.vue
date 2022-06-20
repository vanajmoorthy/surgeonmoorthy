<script setup></script>

<template>
	<footer>
		<p>© Copyright 2022 - Krishna Moorthy</p>
	</footer>
</template>

<style scoped>
@import "@/assets/base.css";

footer {
	height: 7rem;
	color: white;
	background-color: #333333;
	display: flex;
	align-items: center;
	margin-top: 2rem;
	padding: 0 2rem;
}

@media screen and (max-width: 930px) {
	footer {
		justify-content: center;
	}
}
</style>
