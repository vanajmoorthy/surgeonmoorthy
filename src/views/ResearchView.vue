<script setup></script>

<template>
	<main>
		<div class="research">
			<h1>Research</h1>
			<p>
				Krishna's research interests are driven by a desire to improve
				safety and quality of care in surgery. He has undertaken
				research to develop and validate different technologies for
				surgical training. His research includes both quantitative and
				qualitative data analysis. He is a reviewer for a number of high
				impact journals such as the Annals of Surgery, the BMJ and the
				British Journal of Surgery. He is also a reviewer of grants for
				the National Institute of Health Research (NIHR).
			</p>
		</div>
	</main>

	<div
		class="paper-holder"
		v-for="(paper, key) in groupedPapers"
		:key="paper"
	>
		<h1>
			{{
				key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
			}}
		</h1>

		<div class="paper-category">
			<div class="shadow" v-for="p in paper" :key="p">
				<p class="title">{{ p.title }}</p>
				<p class="byline">{{ p.byline }}</p>
				<a class="paper-link" :href="p.link">Read paper</a>
			</div>
		</div>
	</div>
</template>

<script>
import { gql } from "graphql-request";
export default {
	data() {
		return {
			papers: [],
			groupedPapers: [],
			loading: true,
			errors: [],
		};
	},
	methods: {
		groupBy: function (arr, property) {
			return arr.reduce(function (memo, x) {
				if (!memo[x[property]]) {
					memo[x[property]] = [];
				}
				memo[x[property]].push(x);
				return memo;
			}, {});
		},
	},
	async created() {
		const data = await this.$graphcms.request(
			gql`
				{
					papers {
						title
						byline
						link
						category
					}
				}
			`
		);
		this.errors = data.errors;
		this.loading = false;
		this.papers = data.papers;

		this.groupedPapers = this.groupBy(this.papers, "category");

		console.log(this.groupedPapers);
	},
};
</script>

<style scoped>
main {
	display: flex;
	justify-content: center;
}

.paper-holder {
	margin-top: 4rem;
}

.title {
	font-weight: 500;
}

.byline {
	font-style: italic;
}

.shadow {
	-webkit-box-shadow: 10px 10px 32px 0px rgba(181, 181, 181, 1);
	-moz-box-shadow: 10px 10px 32px 0px rgba(181, 181, 181, 1);
	box-shadow: 10px 10px 32px 0px rgba(181, 181, 181, 1);
}

.paper-link {
	color: #2557f8;
	transition: 0.2s ease all;
}

.paper-link:hover {
	color: #1a43cd;
}

.paper-category {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.paper-category > div {
	display: flex;
	flex-direction: column;
	width: 300px;
	text-align: center;
	justify-content: space-between;
	height: 400px;
	padding: 2rem 1rem;
	margin: 2rem;
	border-radius: 8px;
	transition: 0.2s ease all;
}

.paper-category > div:hover {
	transform: translateY(-10px);
}

.paper-holder h1 {
	font-weight: 600;
	font-size: 1.5rem;
	text-align: center;
}
.research {
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 500px;
	margin-top: 4rem;
	padding: 0 2rem;
}

.research h1 {
	font-weight: 900;
	color: var(--heading-color);
	margin-bottom: 2rem;
}

.research p {
	font-weight: 500;
}
</style>
