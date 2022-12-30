<script setup></script>

<template>
	<div>
		<main>
			<img id="krishna-small" src="" alt="" />
			<div class="hero-text">
				<h1>Krishna Moorthy</h1>
				<h2>MS∙MD∙FRCS</h2>
				<p>
					Senior lecturer and consultant surgeon at Imperial College,
					London.
				</p>
			</div>
		</main>

		<div class="about">
			<div class="about-text">
				<h1>About</h1>
				<p>
					Krishna Moorthy (MS, MD, FRCS) is a senior lecturer and
					consult surgeon at Imperial College London. His areas of
					clinical expertise are oesophago-gastric and abdominal wall
					surgery. Krishna's clinical and research interests are
					driven by a desire to improve safety and quality of care in
					surgery.
				</p>
				<p>
					He has published widely in many high impact journals and is
					often invited to lecture on his topics of interest.
				</p>
				<p>
					Krishna is also the founder of Onkohealth, a healthcare
					initiative developed to optimise the health of people
					affected by cancer through multi-professional coaching.
				</p>
			</div>
			<div class="about-img">
				<img src="@/assets/about-ig.png" alt="" />
			</div>
		</div>

		<div class="values">
			<h1>Values</h1>
			<div class="diff-values">
				<div class="row1">
					<div class="patient-safety">
						<h2>Patient Safety</h2>
						<p>
							Krishna sat on the working group of the WHO Safe
							Surgery programme that led to the development of the
							WHO Safe Surgery Checklist.
						</p>
					</div>
					<div class="quality-improvement">
						<h2>Quality Improvement</h2>
						<p>
							He has worked closely with NHS Quality Improvement
							organisations such as CLAHRC-NWL and the Health
							Foundation to integrate the principles of marginal
							gains in improving outcomes in surgery.
						</p>
					</div>
				</div>
				<div class="row2">
					<div class="patient-engagement">
						<h2>Patient Engagement</h2>
						<p>
							His team undertakes regular patient engagement
							events to utilise the principles of experiential
							co-design in developing innovations in surgical
							pathways.
						</p>
					</div>
					<div class="innovation">
						<h2>Innovation</h2>
						<p>
							Krishna co-developed the PREPARE for prehabilitaton
							programme which has won numerous awards including
							the BMJ Surgical team of the year.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.diff-values {
	display: flex;
	flex-direction: column;
}

.row1,
.row2 {
	display: flex;
}

.row1 > div,
.row2 > div {
	width: 50%;
}

.quality-improvement {
	border-left: 1px solid #707070;
	border-bottom: 1px solid #707070;
	padding: 0 0 1rem 1rem;
}

.patient-safety {
	border-bottom: 1px solid #707070;
	padding: 0 1rem 1rem 0;
}

.patient-engagement {
	padding: 1rem 1rem 0 0;
}

.innovation {
	border-left: 1px solid #707070;
	padding: 1rem 0 0 1rem;
}

.about {
	display: flex;
	align-items: center;
	margin-top: -4rem;
}

.about-text {
	margin: 2rem 2rem;
}

.about-text h1,
.values h1 {
	color: var(--heading-color);
	font-weight: 900;
}

.values {
	padding: 2rem;
}

.about-text p {
	font-weight: 500;
	margin-bottom: 1rem;
}

.about-img img {
	max-height: 370px;
}

main {
	display: flex;
	flex-direction: column;
	height: calc(100vh + 17px);
	justify-content: center;
	align-items: flex-end;
	background-image: url("/src/assets/krishna-images/krishna-main.jpeg");
	background-repeat: no-repeat;
	background-size: contain;
	background-position: -208px 0px;
	top: -91px;
	z-index: -1;
}

.hero-text {
	margin-right: 9%;
	background-color: rgb(255, 255, 255, 0.7);
	padding: 1rem;
	border-radius: 12px;
	backdrop-filter: blur(30px);
}

.hero-text h1 {
	font-weight: 900;
	color: var(--heading-color);
}

.hero-text h2 {
	color: #707070;
	margin-bottom: 0.5rem;
}

.hero-text p {
	font-weight: 600;
}

@media screen and (max-width: 930px) {
	.row1,
	.row2 {
		display: block;
	}

	.row1 > div,
	.row2 > div {
		width: 100%;
	}

	.patient-safety,
	.quality-improvement,
	.patient-engagement,
	.innovation {
		border: none;
		padding: 0.25rem 0;
	}
}

@media screen and (max-width: 1195px) {
	main {
		align-items: center;
		background-image: none;
		top: 0px;
		height: calc(100vh - 120px);
	}

	.about {
		flex-direction: column-reverse;
		align-items: center;
		justify-content: center;
		padding: 2rem 0;
		margin-top: 0rem;
	}

	.about-img {
		text-align: center;
	}
	.about-img img {
		border-radius: 20px;
		text-align: center;
		width: 85%;
	}

	#krishna-small {
		content: url("/src/assets/krishna-images/krishna-main-small.jpeg");
		border-radius: 20px;
		height: auto;
		width: 85%;
		max-width: 500px;
		margin: 2rem 2rem;
	}

	.hero-text {
		margin: 0 1rem;
	}
}

@media screen and (max-width: 320px) {
	#krishna-small {
		margin: 9rem 2rem 2rem 2rem;
	}

	.about {
		margin-top: 9rem;
	}
}
</style>
