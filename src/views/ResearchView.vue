<script setup></script>

<template>
	<div>
		<main>
			<div class="research">
				<h1>Research</h1>
				<p>
					Krishna's research interests are driven by a desire to
					improve safety and quality of care in surgery. He has
					undertaken research to develop and validate different
					technologies for surgical training. His research includes
					both quantitative and qualitative data analysis. He is a
					reviewer for a number of high impact journals such as the
					Annals of Surgery, the BMJ and the British Journal of
					Surgery. He is also a reviewer of grants for the National
					Institute of Health Research (NIHR).
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
					key
						.replace(/_/g, " ")
						.replace(/\b\w/g, (c) => c.toUpperCase())
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

		<h1 id="teaching">Teaching</h1>
		<div class="teaching">
			<div class="teaching-card shadow">
				<img src="@/assets/krishna-images/KMpic.png" alt="" />
				<div>
					<h2>Mr Krishna Moorthy</h2>
					<h3>Faculty of Medicine, Department of Surgery & Cancer</h3>
					<h4>Clinical Senior Lecturer in Upper Gastrointestinal</h4>
					<a class="paper-link" href=""
						>View profile at Imperial College’s website</a
					>
				</div>
			</div>
			<div class="teaching-text">
				<p>
					As an academic surgeon, Krishna has supervised a number of
					PhDs and MDs. He also supervises a number of postgraduate
					research projects and dissertations.
				</p>
				He was the lead for the Master in Surgical Technology and now
				leads two modules on the Masters in Surgical Innovation in
				Imperial (link). He is involved in teaching on post-graduate
				courses in patient safety, quality improvement and surgical
				technology.
				<p>
					He was the local lead for the Royal College of Surgeons Core
					Skills in Laparoscopic surgery course. He has led and
					developed surgical training courses in his areas of clinical
					interest.
				</p>
				<p>
					He is an active surgical trainer and has trained a number of
					trainees and established UK and visiting surgeons in
					oesophagogastric, bariatric and abdominal wall hernia
					surgery.
				</p>
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
#teaching {
	font-weight: 900;
	color: var(--heading-color);
	margin: 2rem 0;
	text-align: center;
}

.teaching {
	display: flex;
}

.teaching-card {
	display: flex;
	/* flex-shrink: 0; */
	align-items: center;
	/* max-height: 250px; */
	padding: 1.5rem;
	border-radius: 20px;
	margin: 0 2rem;
}

.teaching-card > div {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 80%;
	margin-left: 1rem;
}

.teaching-card > div > h2 {
	color: #414141;
	font-weight: 900;
	font-size: 1.7rem;
}

.teaching-card > div > h3 {
	color: #606060;
	font-weight: 700;
	font-size: 1.4rem;
	margin-top: 0.5rem;
}

.teaching-card > div > h4 {
	color: #505050;
	font-weight: 600;
	margin-top: 0.5rem;
}

.teaching-card > div > a {
	margin-top: 0.5rem;
}

.teaching-card img {
	max-width: 200px;
	max-height: 200px;
	border-radius: 200px;
}

.teaching-text {
	width: 60%;
	margin-right: 2rem;
}

.teaching-text p {
	margin-bottom: 0.5rem;
}

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
	max-width: 700px;
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

@media screen and (max-width: 1122px) {
	.teaching {
		flex-direction: column;
		justify-content: center;
	}

	.teaching-text {
		width: auto;
		margin: 2rem 2rem 0 2rem;
	}
}

@media screen and (max-width: 700px) {
	.teaching-card {
		flex-direction: column;
	}
	.teaching-card img {
		margin-bottom: 1rem;
	}
	.teaching-card > div {
		align-items: center;
	}

	.teaching-card > div > h2 {
		text-align: center;
	}
	.teaching-card > div > h3 {
		text-align: center;
	}
	.teaching-card > div > h4 {
		text-align: center;
	}
	.teaching-card > div > a {
		text-align: center;
	}
}
</style>
