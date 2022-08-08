<template>
	<main>
		<router-link to="/practice" class="back"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
			>
				<path
					d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"
				></path>
			</svg>
			Go back</router-link
		>
		<div class="container">
			<h1 class="title">Revision bariatric surgery</h1>
			<div class="img-container">
				<img
					src="@/assets/Revision-surgery-VBG-gastric-bypass.png"
					alt=""
				/>
			</div>

			<p class="obesity">
				A number of patients who have undergone weight loss surgical
				procedures in the past are now seeking revision surgery for
				complications of the previous procedure or weight regain.
			</p>

			<p class="obesity">
				Revision bariatric surgery requires careful planning and should
				only be performed by experienced surgeons in large institutions
				that have the expertise required to undertake all the essential
				pre-operative tests and look after these patients during and
				after surgery. These are highly complex operations due to the
				scar tissue from the previous surgery and unless they are
				performed carefully, they can be associated with a high risk of
				complications.
			</p>

			<p class="obesity">
				Mr Moorthy routinely performs revision bariatric surgery with
				excellent results and is supported by a team of endoscopy and
				radiology specialists, bariatric and endocrine physicians,
				dietitians and psychologists. He performs these operations in
				the Wellington hospital and Lindo Wing of St Mary's Hospital as
				these hospitals have all the necessary facilities to carry out
				these complex laparoscopic operations. Both these facilities
				also offer the possibility of undertaking these operations with
				the use of the robot which make stitching, as essential aspect
				of these operations, safer.
			</p>

			<h2 class="what">Previous vertical banded gastroplasty</h2>
			<p class="obesity">
				A number of patients, especially from the Middle East, who have
				undergone this operation are now suffering from complications.
				The problems associated with this operation and now well
				recognized and this operation is no longer accepted as a safe
				and effective bariatric procedure.
			</p>
			<p class="obesity">
				Patients experience vomiting, difficulty in swallowing and
				severe acid reflux due to the severe narrowing of the stomach
				pouch as a result of this operation.
			</p>
			<p class="obesity">
				The only approach to help these patients is to perform a
				Roux-en-Y gastric bypass.
			</p>

			<h2 class="what">Previous gastric band</h2>

			<p class="obesity">
				A number of patients with gastric band are experiencing
				complications such as vomiting, acid reflux, difficulty
				swallowing or band slippage. Emptying the band does not help as
				the band is often surrounded by a capsule of scar tissue which
				causes a tight blockage even if the band is emptied.
			</p>
			<p class="obesity">
				Following the removal of the gastric band, patients can either
				be converted to a sleeve gastrectomy or a gastric bypass.
				Generally, it is considered to be good practice to remove the
				band first and then perform a second operation 6-8 weeks later
				to give some time for the scar tissue to soften. This is
				especially important in patients who want a sleeve gastrectomy
				as the second procedure as the risk of a leak is four times
				higher in revision surgery as compared to primary (first time)
				surgery. However, if the patient desires a gastric bypass, this
				can be done at the time of the gastric band removal.
			</p>

			<h2 class="what">Previous sleeve gastrectomy</h2>
			<p class="obesity">
				Usually the need to convert a sleeve gastrectomy to a gastric
				bypass is rare unless the original operation has not been
				performed well or there are complications such as acid reflux
				and difficulty swallowing. A poorly performed sleeve either
				results in insufficient weight loss or a risk of weight regain.
			</p>
			<p class="obesity">
				If done well, conversion of the sleeve gastrectomy to a gastric
				bypass is not associated with a high risk of complications and
				good results. The principle is to convert the gastric sleeve to
				a small stomach pouch by stapling across the sleeve and then
				performing a gastric bypass.
			</p>

			<h2 class="what">Previous gastric bypass</h2>
			<p class="obesity">
				The reasons for revision surgery maybe due to insufficient
				weight loss, weight regain or complications such as non-healing
				ulcers.
			</p>
			<p class="obesity">
				Failure to lose weight or weight regain may have a number of
				causes, which need to be clarified before considering further
				surgery. It is essential that patients are seen by a dietitian
				and a psychologist prior to consideration of revision surgery.
			</p>
			<p class="obesity">
				There are various strategies for revision surgery in patients
				who have had gastric bypass- inserting a band over the gastric
				pouch, shortening the gastric pouch, revising the join between
				the pouch and the intestine and lengthening the alimentary limb.
				The appropriate strategy is determined by undertaking a detailed
				consultation with the patient and after investigations that may
				involve an endoscopy and barium studies.
			</p>
		</div>
	</main>
</template>

<style scoped>
img {
	width: 100%;

	margin-top: 2rem;
}

.img-container {
	max-width: 400px;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem;
}
.title {
	text-align: center;
	font-weight: 900;
	color: var(--heading-color);
}

.what {
	margin-top: 2rem;
	margin-bottom: 1rem;
	font-weight: 600;
}

li {
	font-weight: 500;
}

ul {
	margin: 1rem 0;
	margin-left: 1rem;
	padding-inline-start: 0px;
	max-width: 660px;
}

.obesity,
.italic {
	font-weight: 500;
	max-width: 700px;
	margin: 0.5rem 0;
}

.italic {
	font-style: italic;
}

.back {
	display: flex;
	color: black;
	text-decoration: none;
	align-items: center;
	transition: 0.2s ease all;
	margin-top: 2rem;
	margin-left: 2rem;
}

.back:hover {
	opacity: 0.7;
}
</style>
