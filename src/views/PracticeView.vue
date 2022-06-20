<script setup></script>

<template>
	<main>
		<div class="practice-landing">
			<h1>Clinical Practice</h1>
			<h2>Oesophago Gastric Surgery</h2>
			<p>
				Krishna specialises in all conditions of the oesophagus and
				stomach. Working closely with colleagues from gastroenterology,
				endoscopy, radiology, oncology and colleagues from nursing and
				allied healthcare, Krishna delivers comprehensive
				multi-disciplinary care to all his patients.
			</p>
		</div>
	</main>
	<div class="bariatric">
		<div class="bariatric-img"></div>
		<div class="bariatric-text">
			<h1>Bariatric</h1>
			<p>
				Krishna performs the whole range of laparoscopic bariatric
				surgery procedures. Bariatric surgery makes a significant impact
				on the health of people, reduces risk factors for serious
				diseases such as diabetes and cancer and makes significant
				improvements to their quality of life. However, his practice is
				underpinned by the principle that surgery is only one part of
				the whole process of care. Excellence is based on a
				multi-disciplinary team approach and a treatment plan that
				addresses the overall health of every individual. Surgery is a
				start towards a new life.
			</p>
		</div>
	</div>
</template>

<style scoped>
main {
	display: flex;
	justify-content: center;
	padding: 0 2rem;
}

.practice-landing {
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 500px;
	margin-top: 4rem;
}

.practice-landing h1 {
	font-weight: 900;
	color: var(--heading-color);
	margin-bottom: 2rem;
}

.practice-landing h2 {
	font-weight: 600;
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
	color: var(--heading-color);
}

.practice-landing p {
	font-weight: 500;
}
</style>
