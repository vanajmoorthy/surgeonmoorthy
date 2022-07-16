<script setup></script>

<template>
	<div>
		<main>
			<h1 id="innovation-text">Innovation</h1>
			<div class="prehab">
				<h2>Prehabilitation</h2>

				<p>
					Krishna co-leads the PREPARE for surgery prehabilitation.
					This innovative concept is based on the rationale that
					providing patients with a physical and psychological reserve
					would help them cope with the stress of cancer treatment and
					surgery as described in this BMJ paper. Co-developed in
					partnership with his colleague, Venetia Wynter-Blyth,
					consultant cancer nurse, this programme is unique in the
					emphasis that is placed on the value of psychological health
					in patients undergoing cancer treatment as explained in this
					piece on BBC Radio 4 .
				</p>
				<p class="m-top">
					PREPARE has won numerous awards including the BMJ awards in
					2017 for Surgical team of the year and Patient engagement.
				</p>
			</div>
			<div class="prehab">
				<h2 class="m-top-2">ONKOHEALTH</h2>
				<p>
					Krishna and his co-founder, Venetia Wynter-Blyth, have
					founded Onko to deliver personalised programmes of health
					optimisation and support to people with cancer at all stages
					of the cancer pathway. Based on an innovative methodology
					that they have pioneered, their team can deliver the
					programmes remotely using digital technology integrated with
					wearable devices. Patients can access their programme either
					in a face to face format from a 'Hub' in London or remotely
					through a bespoke digital solution (under development).
				</p>
				<p class="m-top">
					Their ambition is to provide these programmes globally in
					order to provide support of people with cancer anywhere in
					the world.
				</p>
				<p class="m-top">
					Some insurers are currently approving the programmes for
					patients undergoing private cancer treatment in London and
					beyond.
				</p>
			</div>
		</main>

		<div class="cols">
			<div class="rob">
				<img src="@/assets/robot.png" alt="" />
				<div>
					<h1>Robotic Surgery</h1>
					<p>
						While Krishna was the first to perform robotic bariatric
						surgery in the UK, he doesn’t believe that the current
						technology offers any benefits over laparoscopic
						surgery. The technology is not cost-effective nor is it
						associated with any advantages to patients in the
						clinical practice of laparoscopic surgeons like Krishna,
						who has performed over 3000 laparoscopic surgeries.
						<br />
						<br />
						However, robotic surgery definitely has a place in
						future surgical practice once the limitations of the
						current technology such as size and cost are reduced.
						There are number of new surgical robots which are
						currently being developed and tested, which may address
						many of the limitations. Krishna believes that the
						future is exciting and looks forward to working with
						these developers.
					</p>
				</div>
			</div>
			<div class="edu">
				<img src="@/assets/education.png" alt="" />
				<div>
					<h1>Surgical Education</h1>
					<p>
						Over the years, Krishna has undertaken research on
						developing and validating a number of simulated
						environments for training surgeons and operating theatre
						teams. As part of his research degree, Krishna developed
						the Simulated Operating Theatre for training technical
						and non-technical skills in surgeons.
						<br /><br />
						He has validated a number for virtual reality simulators
						for improving technical skills in laparoscopy and
						endoscopy.
						<br /><br />
						Krishna has also developed digital solutions for the WHO
						peri-operative checklist and for guidelines for
						implementing guidelines for Surgical Site Infections
						(SSI).
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.m-top-2 {
	margin-top: 4rem;
}
main {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 2rem;
}

.cols {
	display: flex;
	margin-top: 4rem;
}

.cols > div {
	padding: 2rem;
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.cols > div > img {
	width: 80%;
	border-radius: 20px;
	/* max-height: 500px; */
}
.cols > div > div {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.cols > div > div > h1 {
	font-size: 1.7rem;
	font-weight: 700;
	margin-top: 2rem;
	margin-bottom: 0.5rem;
	text-align: center;
}

.cols > div > div > p {
	font-weight: 500;
	width: 80%;
}
#innovation-text {
	font-weight: 900;
	color: var(--heading-color);
	margin: 2rem 0;
	text-align: center;
}

.prehab {
	max-width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.prehab h2 {
	font-weight: 600;
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
	color: var(--heading-color);
}

.prehab p {
	font-weight: 500;
}
.m-top {
	margin-top: 0.5rem;
}

@media screen and (max-width: 1033px) {
	.cols {
		flex-direction: column;
	}

	.cols > div {
		width: 100%;
	}

	.cols > div > img {
		width: 100%;
	}

	.cols > div > div > p {
		width: 100%;
	}
}
</style>
