<script setup></script>

<template>
	<nav>
		<div id="home">
			<RouterLink class="home-link link" to="/"
				>Krishna Moorthy</RouterLink
			>
			<div
				class="hamburger"
				v-on="{ click: toggleMenu }"
				:class="{ open: isMenuOpen }"
			>
				<div id="line1"></div>
				<div id="line2"></div>
			</div>
		</div>
		<div id="nav-links" :class="{ expand: isMenuOpen }">
			<RouterLink class="nav-link link" to="/research"
				>Research & Teaching</RouterLink
			>
			<RouterLink class="nav-link link" to="/practice"
				>Clinical Practice</RouterLink
			>
			<RouterLink class="nav-link link" to="/innovation"
				>Innovation</RouterLink
			>
			<RouterLink class="nav-link link" to="/contact">Contact</RouterLink>
			<a
				id="gastro"
				class="nav-link link"
				href="https://gastroreflux.co.uk"
				target="_blank"
				rel="noopener noreferrer"
				>gastroreflux.co.uk</a
			>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			isMenuOpen: false,
		};
	},
	methods: {
		toggleMenu: function () {
			this.isMenuOpen = !this.isMenuOpen;
		},
	},

	watch: {
		$route() {
			this.isMenuOpen = false;
		},
	},
};
</script>

<style scoped>
@import "@/assets/base.css";
nav {
	display: flex;
	justify-content: space-between;
	font-size: 1.1rem;
	backdrop-filter: blur(2px);
	z-index: 2;
}

#home {
	padding: 2rem 2rem 0 2rem;
}

#gastro {
	color: white;
	background-color: #0050fd;
	padding: 0.4rem 0.5rem;
	border: none;
	border-radius: 5px;
	max-width: min-content;
}

.home-link {
	font-size: 1.3rem;
	font-weight: 600;
}

.nav-link {
	margin-left: 1rem;
}

.nav-link,
.home-link {
	color: black;
	text-decoration: none;
	transition: 0.2s ease all;
}

.hamburger {
	height: 15px;
	width: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transition: 0.2s ease all;
	display: none;
}

.open #line1 {
	transform: translateY(6.5px) rotate(45deg);
}

.open #line2 {
	transform: translateY(-6.5px) rotate(-45deg);
}

.hamburger:hover {
	cursor: pointer;
	opacity: 0.6;
}

#line1,
#line2 {
	height: 2px;
	width: 100%;
	background-color: black;
	transition: 0.2s ease all;
}

.expand {
	overflow: visible;
	max-height: 300px !important;
	margin-top: 1rem;
	background-color: rgb(233 233 233);
	padding: 1rem 2rem !important;
}

#nav-links {
	transition: 0.6s ease all;
	padding: 2rem 2rem;
}

.nav-link.router-link-active {
	text-decoration: underline;
}

@media screen and (max-width: 990px) {
	nav {
		flex-direction: column;
	}
	#nav-links {
		display: flex;
		flex-direction: column;
		padding: 0 2rem;
	}
	.home-link {
		margin-left: 0rem;
	}

	.nav-link {
		margin-left: 0rem;
		margin-bottom: 0.5rem;
	}

	#home {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.hamburger {
		display: inline-flex;
	}

	#nav-links {
		overflow: hidden;
		max-height: 0px;
	}
}
</style>
