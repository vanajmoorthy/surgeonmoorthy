<script setup></script>

<template>
	<main>
		<div v-for="(paper, key) in groupedPapers" :key="paper">
			<h1>{{ key }}</h1>

			<div v-for="p in paper" :key="p">
				<p>{{ p.title }}</p>
				<p>{{ p.byline }}</p>
				<p>{{ p.link }}</p>
			</div>
		</div>
	</main>
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
