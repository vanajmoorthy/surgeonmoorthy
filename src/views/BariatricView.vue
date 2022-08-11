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
		<h1 class="title">Bariatic Surgery</h1>

		<div class="flex-col">
			<h2 class="what">What is obesity?</h2>
			<p class="obesity">
				Obesity is on the increase in the Western world and it is
				believed that around 30% of the population in the UK is
				presently obese.
				<br />
				The causes of obesity include:
			</p>
			<ul>
				<li>How you eat and what you eat</li>
				<li>Level of physical activity</li>
				<li>
					Other endocrine causes such as low thyroid levels and low
					levels of steroid hormones
				</li>
				<li>Psychological factors</li>
			</ul>
			<p class="obesity">
				However, all these probably play a contributory role. We are
				only now beginning to understand the causes for obesity. It is
				likely that it a result of a complex interplay of hormones
				secreted by your intestines. Some stimulate your appetite and
				some suppress it and it is the imbalance between the two that
				leads to obesity.
			</p>

			<h2 class="what">Why should obesity be treated?</h2>
			<p class="obesity">
				Obesity can have an effect of nearly all the body's systems.
				Obese people have an increased risk of:
			</p>
			<ul>
				<li>Developing type 2 diabetes</li>
				<li>Developing high blood pressure</li>
				<li>
					Developing problems with circulation leading to heart
					attacks and strokes
				</li>
				<li>
					High lipids and cholesterol in the blood that increase the
					risk of getting circulatory problems
				</li>
				<li>Back and joint problems</li>
				<li>Sleep apnoea (difficulty breathing during sleeping)</li>
				<li>Developing some kinds of cancers</li>
				<li>Developing acid reflux</li>
			</ul>

			<h2 class="what">How is obesity measured?</h2>
			<ul>
				<li>
					Calculating body mass index (BMI) which is Weight in Kg/
					(Height in metres) 2
				</li>
				<li>Excess weight</li>
			</ul>
			<p class="obesity">
				Obesity is also measured as the excess weight that one carries
				over one's expected ideal weight. Thus if a person's ideal
				weight is 70 kg and the person weighs 120 kg, then that person
				is carrying 50 kg of excess weight. The success of any method to
				lose weight, whether it is lifestyle changes, drug treatment or
				surgery, is measured as the excess weight loss as a result of
				that treatment.
			</p>

			<h2 class="what">How is obesity treated?</h2>
			<ul>
				<li>
					Life style changes- encouraging a healthier diet and more
					physical activity. However, recent research suggests that
					this is a lot more difficult than believed due to the
					increased energy requirements of people who are overweight.
				</li>
				<li>Eating habits — eating slowly, small portions</li>
				<li>
					Drugs that reduce appetite and those that cause reduced
					absorption of substances those lead to more fat deposits.
				</li>
			</ul>

			<p class="obesity">
				However, there is abundant research that shows that lifestyle
				changes, diets and drug treatments have a low to negligible
				effect on excess weight loss over a long time such as a year or
				more. Once the diet or drug treatment is stopped, people are
				extremely likely to put on weight again.
			</p>

			<h2 class="what">Surgery for obesity</h2>
			<p class="obesity">
				There are at least 4 different procedures that are commonly
				performed for treating obesity- laparoscopic adjustable gastric
				bands (LAGB) (link to procedure), Laparoscopic gastric bypass
				(LGB) (link to procedure), laparoscopic sleeve gastrectomy (LSG)
				(link to procedure) and laparoscopic duodenal switch (LDS).
			</p>
			<p class="obesity">
				All these procedures are proven to be more effective than diets
				and drug treatments in losing weight. More importantly all these
				procedures have a significant impact on reversing all the
				obesity related conditions such as diabetes, high blood
				pressure, high cholesterol level, sleep apnoea and others. In
				fact procedures such as gastric bypass have an effect on
				diabetes within weeks of having surgery, which is independent of
				weight loss.
			</p>
			<p class="obesity">
				Large-scale studies from the US and the UK have shown that the
				risk of dying from surgery is less than 2 in a 1000 with a low
				complication rate of less than 3%. In fact patients who undergo
				surgery are less likely to die than patients who have not
				undergone surgery.
			</p>

			<h2 class="what">
				Choosing the right operation that is suitable for you.
			</h2>
			<p class="obesity">Take into consideration factors such as</p>
			<ul>
				<li>What is your current weight and BMI</li>
				<li>How much weight do you want to lose</li>
				How rapidly do you want to lose weight 
				<li>Do you have diabetes, high blood pressure, sleep apnoea</li>
				<li>
					Are you prepared to have nutritional supplements for the
					rest of your life
				</li>
				<li>How much risk are you prepared to accept</li>
				<li>Do you want a reversible procedure</li>
				<li>
					Are multiple visits for band adjustments difficult due to
					distance, work or family commitments
				</li>
				<li>
					Would be prepared to accept further procedures is you don't
					achieve a satisfactory weight loss
				</li>
			</ul>
		</div>

		<div class="flex-cols">
			<div @click="showModal1 = true" class="sleeve">
				<img src="@/assets/sleevegastrectomy.jpg" alt="" />
				<h2>Sleeve Gastrectomy</h2>
				<p>Click to learn more</p>
			</div>
			<div @click="showModal2 = true" class="bypass">
				<img src="@/assets/bypass.jpg" alt="" />
				<h2>Gastric Bypass</h2>
				<p>Click to learn more</p>
			</div>
		</div>
		<vue-final-modal
			classes="modal-container"
			content-class="modal-content"
			v-model="showModal1"
		>
			<div class="modal">
				<p class="close" @click="showModal1 = false">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="36"
						height="36"
						style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
					>
						<path
							d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
						></path>
					</svg>
				</p>

				<h1 class="title">Laparoscopic Sleeve Gastrectomy (LSG)</h1>
				<p class="obesity">
					In this procedure around 75% of the stomach is removed and
					the stomach is converted into a narrow tube. This is done by
					multiple applications of a surgical stapler which staples
					and cuts at the same time.
				</p>

				<h2 class="what">How does LSG work?</h2>
				<p class="obesity">
					The LSG works through restriction of the amount of food that
					can be consumed, as the stomach is now a narrow tube and
					cannot accommodate food. The tube fills up rapidly and the
					patient then feels full and cannot eat any more.
				</p>
				<p class="obesity">
					However, research has also revealed that there are more
					complex and interesting ways in which the operation leads to
					weight loss. These include rapid entry to food into the
					bowel which changes the hormones produced by different parts
					of the bowel. The hormones play a role in influencing
					appetite and metabolism of sugars and fats.
				</p>

				<h2 class="what">How is the LSG performed?</h2>
				<p class="obesity">
					The operation is done by keyhole surgery. This procedure is
					always performed under general anaesthesia. The procedure
					takes between 45 mins to an hour.
				</p>

				<h2 class="what">
					What are the advantages of LSG over other procedures?
				</h2>
				<ul>
					<li>
						Quicker to perform and less complex as compared to
						gastric bypass.
					</li>
					<li>
						No foreign body (unlike a gastric band) in the body and
						no need for multiple visits to the clinic or hospital
						for adjustments.
					</li>
					<li>
						As effective in terms of weight loss as a gastric bypass
						in the short term.
					</li>
					<li>
						Can be followed by a gastric bypass or a duodenal switch
						if weight loss is not satisfactory.
					</li>
				</ul>
				<h2 class="what">What are the side effects of LSG?</h2>
				<p class="obesity">
					The risk of any serious complications is less than 1%.
				</p>
				<p class="obesity">
					There are some complications which occur as side effects of
					any procedure under general anaesthesia. These are
					thrombosis of the legs and the lungs, pneumonia, heart
					attacks etc. Fortunately with safe anaesthesia these are
					quite rare nowadays. They occur more commonly in people who
					already have existing heart or lung diseases.
				</p>
				<p class="obesity">
					Other complications specific to the operation
				</p>

				<ul>
					<li>
						Leakage: there could be leakage from the long staple
						line. Various methods are used to detect a leak as soon
						as possible. Post-operative observations such as heart
						rate, temperature and blood tests can indicate a leak.
						Once discharged patients are advised to look out for
						increasing pain, temperature and general feeling of
						being unwell. Leaks generally close by themselves.
						However, in some cases repeat surgery maybe required to
						close the leakage.
					</li>
					<li>
						Bleeding: bleeding from the staple line can occur
						especially in patients who have high blood pressure
						after surgery. Most bleeding will thus stop with control
						of blood pressure with medications. However, in some
						cases repeat surgery maybe required to apply clips over
						the staple line.
					</li>
					<li>
						Narrowing of the tube: with time the tube could narrow
						due to scarring. This usually causes difficulty in
						swallowing with a sensation that the food is stuck. This
						can be resolved with endoscopy and a balloon to open up
						the narrowing but surgery may be required.
					</li>
					<li>
						Acid reflux: The operation can have two effects on acid
						reflux. In those with pre-existing reflux, the surgery
						and resulting weight loss may improve this or the
						operation can make existing acid reflux worse and may
						cause this in patients who did not suffer from reflux
						before the surgery. This is treated by taking anti- acid
						medication. Rarely, if it is severe, surgery may be
						required to convert to a gastric bypass.
					</li>
				</ul>

				<p class="obesity">Other side effects of LSG</p>

				<ul>
					<li>
						You will lose your appetite and may not feel very
						hungry.
					</li>
					<li>
						You will be unable to eat large meals after the surgery.
					</li>
					<li>
						You may experience some diarrhoea which can be
						controlled with medications.
					</li>
					<li>
						Eating and drinking food substances rich in sugar may
						result in a condition called 'dumping'. This is an
						uncommon side effect which is due to the sudden rush of
						sugars (carbohydrates) in the food into the bowel. This
						produces a surge in the blood insulin which then reduces
						the sugars in your blood. You can experience
						light-headedness, sweating and nausea. This is
						controlled by reducing the sugars in your food, eating
						slowly, chewing really well and drinking water after
						meals and not with meals.
					</li>
				</ul>

				<h2 class="what">Pre-operative advice</h2>
				<ul>
					<li>
						You will be seen by a dietician and asked to undertake a
						2-4 week low caloric diet. This is to shrink the size of
						the liver which needs to be kept away from the area of
						surgery. If the liver is too large it will be difficult
						to perform the surgery. Therefore, it is essential that
						you follow the diet strictly.
					</li>
					<li>
						You should go for short walks everyday to make your
						heart and lungs stronger. You will be taught deep
						breathing exercises which you must do every three times
						every hour to help clear your lungs. You will need to do
						these after the surgery so it is better to get used to
						these exercises before you come for the surgery.
					</li>
				</ul>

				<h2 class="what">Post-operative care</h2>
				<p class="obesity">Day of surgery</p>

				<ul>
					<li>
						After the operation you will remain in the recovery area
						of the operating theatre for 1-2 hours. Following that
						you will be transferred to the ward.
					</li>
					<li>
						You should try to get up and go for a walk (visiting a
						toilet is a good reason for this short walk) aided by a
						nurse.
					</li>
					<li>
						You can drink small sips of water on the night of the
						surgery.
					</li>
					<li>
						Please ask the nurses for painkillers and anti-sickness
						medication. You may feel nauseous and in some discomfort
						but we don't want you to be in pain and retch.
					</li>
				</ul>

				<p class="obesity">1st day after surgery</p>

				<ul>
					<li>
						You can start on clear fluids and progress to soup etc
						for supper. Some of the medications will be changed to
						tablets. Intravenous fluids maybe stopped and the needle
						is your arm maybe removed if you are drinking adequate
						amount is fluid.
					</li>
					<li>Blood tests will be performed.</li>
					<li>
						You should sit out in a chair and walk around as much as
						possible
					</li>
					<li>
						Deep breathing exercises are good to keep the lungs
						open.
					</li>
				</ul>

				<p class="obesity">2nd day after surgery</p>

				<ul>
					<li>You should be able to go home.</li>
					<li>
						You should get someone to pick you up from hospital and
						not drive a car yourself. It is also best to avoid
						public transport at busy times.
					</li>
				</ul>

				<h2 class="what">Other post-operative advice</h2>

				<ul>
					<li>
						You must walk as soon as you can after your surgery.
						Once you have recovered from the anaesthesia, you will
						be requested to go for short walks. This also reduced
						the risk of clots but also helps in breathing and moving
						more oxygen into your lungs.
					</li>
					<li>
						You must do deep breathing exercises regularly (3 times
						an hour) to prevent any lung problems
					</li>
					<li>You must avoid smoking after surgery.</li>
				</ul>

				<h2 class="what">Drinking and eating after a band</h2>
				<ul>
					<li>You will be on fluids for the first week</li>
					<li>Then on pureed diet for 10-14 days</li>
					<li>Soft diet (fork mashable food) for weeks 3-8 weeks</li>
					<li>
						2 months after surgery you can start having a regular
						diet.
					</li>
				</ul>

				<p class="obesity">
					It is very important to appreciate that a sleeve is
					successful if you follow this advice.
				</p>

				<ul>
					<li>
						Eat slowly: Every meal must take at least half an hour.
					</li>
					<li>
						Chew your food well: You must chew every mouthful at
						least 20 times.
					</li>
					<li>Eat small amounts often.</li>
					<li>Must avoid sugary and high caloric foods.</li>
					<li>
						Try to separate the solid component of your meal from
						the liquid component. That is drink water around half an
						hour after a meal and not with the meal.
					</li>
				</ul>

				<h2 class="what">Follow-up after surgery</h2>
				<ul>
					<li>
						You will be seen by the surgeon 2 weeks and 6 weeks
						after surgery.
					</li>
					<li>
						After that you will be seen at 3 months, 6 months and a
						year after surgery.
					</li>
				</ul>
			</div>
		</vue-final-modal>
		<vue-final-modal
			classes="modal-container"
			content-class="modal-content"
			v-model="showModal2"
		>
			<div class="modal">
				<p class="close" @click="showModal2 = false">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="36"
						height="36"
						style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
					>
						<path
							d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
						></path>
					</svg>
				</p>

				<h1 class="title">
					Laparoscopic Roux-en-Y Gastric Bypass (LRYGB)
				</h1>
				<p class="obesity">
					The procedure consists of the creation of small stomach
					pouch which is disconnected from the rest of the stomach
					with multiple applications of a surgical stapler which
					staples and cuts at the same time. 50-75 cm of small
					intestine is measured and the bowel is divided at this point
					with a stapler. One end is called the alimentary end and the
					other one is called the bilio-pancreatic (BP) end. The
					alimentary end is brought up and a join is created between
					the alimentary end and the stomach pouch. A further 75-120
					cm of small intestine is measured from the join and another
					join is created between this point and the BP end.
				</p>

				<h2 class="what">How does LRYGB work?</h2>
				<p class="obesity">
					There are two ways in which the operation works- restriction
					and malabsorption
				</p>
				<p class="obesity">
					(a) Restriction: The small pouch leads to restriction in
					eating as the patient feels full as soon as the pouch fills
					up.
				</p>

				<p class="obesity">
					(b) Malabsorption: The 50-75 cm of small bowel (called the
					BP limb) and the 75-120 cm of small bowel called the
					alimentary limb would normally have been involved in the
					digestion and absorption of fats and carbohydrates. However,
					as a result of the operation, the BP limb only consists of
					the digestive juices and the alimentary limb only serves as
					a food channel. The two meet at the lower join and the
					digestion and absorption occurs in the part of the small
					bowel called the common channel. Thus around 125-175 cm of
					small bowel that would have been involved in absorption,
					does not perform this function, leading to weight loss
				</p>

				<p class="obesity">
					However, research has also revealed that there are more
					complex and interesting ways in which the operation leads to
					weight loss as well as the dramatic effect of the operation
					on diabetes. These include changes to the hormones produced
					by different parts of the bowel which influence appetite and
					metabolism of sugars and fats.
				</p>

				<h2 class="what">How is the LRYGB performed?</h2>
				<p class="obesity">
					The operation is done by key hole (laparoscopic) surgery.
					This procedure is always performed under general
					anaesthesia. The procedure takes between one to two hours.
				</p>

				<h2 class="what">
					What are the advantages of LRYGB over other procedures?
				</h2>
				<ul>
					<li>
						More effective in terms of weight loss as compared to
						band and sleeve gastrectomy
					</li>
					<li>
						Helps in the treatment of diabetes within weeks of
						surgery, regardless of weight loss
					</li>
					<li>
						Rapid weight loss (most weight lost by 18 months) as
						compared to band (2-3 years) and sleeve (2-3 years)
					</li>
				</ul>
				<h2 class="what">What are the side effects of LRYGB?</h2>
				<p class="obesity">
					Even though LRYGB is a complex procedure, which should be
					performed only by trained and experienced surgeons, the
					complication rate is still quite low. The risk of
					complications is less than 5% and the risk of dying is 2-3
					in a 1000.
				</p>
				<p class="obesity">
					There are some complications which occur as side effects of
					any procedure under general anaesthesia. These are
					thrombosis of the legs and the lungs, pneumonia, heart
					attacks etc. Fortunately with safe anaesthesia these are
					quite rare nowadays. They occur more commonly in people who
					already have existing heart or lung diseases.
				</p>
				<p class="obesity">
					Other complications specific to the operation
				</p>

				<ul>
					<li>
						Leakage: there could be leakage from one of the two
						joins. The join between the bowel and the stomach pouch
						is more likely to leak than the other one. Various
						methods are used to detect a leak as soon as possible. A
						test is performed during the operation itself to ensure
						that the join is secure. In addition, a drain is left in
						the abdomen near the join. The patient is asked to drink
						some blue dye on the day after surgery. Presence of the
						dye in the drain would indicate a leak. If there is no
						blue dye in the drain and there is still a suspicion of
						a leak, an x-ray or CT scan with dye can be done to
						check for leaks. Leaks generally close by themselves.
						However, in some cases repeat surgery maybe required to
						close the leakage.
					</li>
					<li>
						Bleeding: bleeding from the staple line can occur
						especially in patients who have high blood pressure
						after surgery. Most bleeding will thus stop with control
						of blood pressure with medications. However, in some
						cases repeat surgery maybe required to apply clips over
						the staple line.
					</li>
					<li>
						Internal hernias: When the bowel is moved around inside
						the abdomen, there is a potential to create pockets
						inside the abdomen into which bowel can get stuck. This
						can occur from days to years after the surgery. The
						patient experiences abdominal pain with associated
						vomiting. X-rays and CT scans maybe required but repeat
						laparoscopy is usually needed to detect and fix the
						internal hernia.
					</li>
					<li>
						Bowel blockage: This could be due to internal hernias or
						due to scar tissue (adhesions) from the operation. The
						patient experiences abdominal pain, bloating, vomiting
						and constipation. X-rays and CT scans maybe required but
						usually surgery maybe required to divide the scar tissue
						or repair the hernia depending on the cause.
					</li>
					<li>
						Ulcers: these occur at the join between the stomach
						pouch and the bowel and are called stomal or marginal
						ulcers. They occur more commonly in smokers, in patients
						who take painkillers such as ibuprofen and in patient
						with other risk factors. These are prevented and easily
						treated with acid reducing medication. Rarely these
						ulcers can rupture and cause infection inside the
						abdomen for which emergency surgery is required.
					</li>
				</ul>

				<p class="obesity">Other side effects of LRYGB</p>

				<ul>
					<li>
						You will lose your appetite and may not feel very
						hungry.
					</li>
					<li>
						You will be unable to eat large meals after the surgery.
					</li>
					<li>
						You may experience some diarrhoea which can be
						controlled with medications.
					</li>
					<li>
						Eating and drinking food substances rich in sugar may
						result in a condition called 'dumping'. This is an
						uncommon side effect which is due to the sudden rush of
						sugars (carbohydrates) in the food into the bowel. This
						produces a surge in the blood insulin which then reduces
						the sugars in your blood. You can experience
						light-headedness, sweating and nausea. This is
						controlled by reducing the sugars in your food, eating
						slowly, chewing really well and drinking water after
						meals and not with meals.
					</li>
					<li>
						Rarely some patients experience chronic abdominal pain
						which is difficult to explain.
					</li>
					<li>
						Rarely, some patients may experience hair loss. This is
						usually temporary and maybe related to nutritional
						deficiencies.
					</li>
				</ul>

				<h2 class="what">Pre-operative advice</h2>
				<ul>
					<li>
						You will be seen by a dietician and asked to undertake a
						2-4 week low caloric diet. This is to shrink the size of
						the liver which needs to be kept away from the area of
						surgery. If the liver is too large it will be difficult
						to perform the surgery. Therefore, it is essential that
						you follow the diet strictly.
					</li>
					<li>
						You should go for short walks everyday to make your
						heart and lungs stronger. You will be taught deep
						breathing exercises which you must do every three times
						every hour to help clear your lungs. You will need to do
						these after the surgery so it is better to get used to
						these exercises before you come for the surgery.
					</li>
				</ul>

				<h2 class="what">Post-operative care</h2>
				<p class="obesity">Day of surgery</p>

				<ul>
					<li>
						After the operation you will remain in the recovery area
						of the operating theatre for 1-2 hours. Following that
						you will be transferred to the ward.
					</li>
					<li>
						You should try to get up and go for a walk (visiting a
						toilet is a good reason for this short walk) aided by a
						nurse.
					</li>
					<li>
						You should not drink any water or fluids on the night of
						the surgery, though you will be given special sponge
						'lollipops' to keep your mouth wet.
					</li>
					<li>
						Please ask the nurses for painkillers and anti-sickness
						medication. You may feel nauseous and in some discomfort
						but we don't want you to be in pain and retch.
					</li>
				</ul>

				<p class="obesity">1st day after surgery</p>

				<ul>
					<li>
						You will be asked to drink blue dye on the morning of
						surgery. If this does not come out in the drain, then a
						leak is unlikely and you can start drinking fluids.
						Start with water, and gradually progress to some
						beverages and fruit juices. If these cause no problems
						you can have some soup/ ice cream/ jelly etc for supper.
						Some of the medications will be changed to tablets.
						Intravenous fluids maybe stopped and the needle is your
						arm maybe removed if you are drinking adequate amount is
						fluid.
					</li>
					<li>
						The drain maybe removed if there is not much fluid
						draining out.
					</li>
					<li>Blood tests will be performed.</li>
				</ul>

				<p class="obesity">2nd day after surgery</p>

				<ul>
					<li>You should be able to go home.</li>
					<li>
						You should get someone to pick you up from hospital and
						not drive a car yourself. It is also best to avoid
						public transport at busy times.
					</li>
				</ul>

				<h2 class="what">Other post-operative advice</h2>

				<ul>
					<li>
						You must walk as soon as you can after your surgery.
						Once you have recovered from the anaesthesia, you will
						be requested to go for short walks. This also reduced
						the risk of clots but also helps in breathing and moving
						more oxygen into your lungs.
					</li>
					<li>
						You must do deep breathing exercises regularly (3 times
						an hour) to prevent any lung problems
					</li>
					<li>
						You must avoid smoking after surgery. This increases the
						risk of developing an ulcer between the stomach and the
						bowel.
					</li>
					<li>
						You must avoid taking painkillers such as brufen. They
						increase acid secretion and can cause ulcers at the join
						between the stomach pouch and bowel.
					</li>
				</ul>

				<h2 class="what">Drinking and eating after a bypass</h2>
				<ul>
					<li>You will be on fluids for the first week.</li>
					<li>Then on pureed diet for 3 weeks.</li>
					<li>
						Soft diet (fork mashable food) for weeks 5-12 weeks.
					</li>
					<li>
						3 months after surgery you can start having a regular
						diet.
					</li>
				</ul>

				<p class="obesity">
					It is very important to appreciate that a bypass is
					successful if you follow the advice given to you by your
					surgeon.
				</p>

				<ul>
					<li>
						Eat slowly: Every meal must take at least half an hour.
					</li>
					<li>
						Chew your food well: You must chew every mouthful at
						least 20 times.
					</li>
					<li>Eat small amounts often.</li>
					<li>Must avoid sugary and high caloric foods.</li>
					<li>
						Try to separate the solid component of your meal from
						the liquid component. That is drink water around half an
						hour after a meal and not with the meal.
					</li>
				</ul>

				<h2 class="what">Follow-up after surgery</h2>
				<ul>
					<li>
						You will be seen by the surgeon 2 weeks and 6 weeks
						after surgery.
					</li>
					<li>
						After that you will be seen at 6 months and a year after
						surgery.
					</li>
				</ul>
			</div>
		</vue-final-modal>
	</main>
</template>

<script>
import { $vfm, VueFinalModal, ModalsContainer } from "vue-final-modal";
export default {
	components: {
		VueFinalModal,
		ModalsContainer,
	},
	data: () => ({
		showModal1: false,
		showModal2: false,
	}),
};
</script>

<style scoped>
:deep .modal-container {
	overflow-y: scroll;
	padding: 1rem;
}

.scroll {
	overflow-y: scroll;
}

.close {
	position: absolute;
	left: 95%;
	transition: 0.2s ease all;
}

.close:hover {
	cursor: pointer;
	opacity: 0.7;
}
.modal {
	background-color: white;
	max-width: 700px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	margin-top: 1rem;
	margin-bottom: 1rem;

	padding: 1rem;
	border: none;
	border-radius: 10px;
}

main {
	margin: 0 2rem;
}

.flex-cols {
	display: flex;
	justify-content: center;
}

@media screen and (max-width: 570px) {
	.flex-cols {
		flex-direction: column;
		align-items: center;
	}
}

.flex-cols > div {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 1rem;
	border-radius: 10px;
	padding: 1rem;
	transition: 0.2s ease all;
}

.flex-cols > div:hover {
	background-color: rgb(235, 235, 235);
	cursor: pointer;
}

.flex-cols > div > h2 {
	font-weight: 600;
	margin-block: 0.5rem;
}

.flex-cols > div > p {
	color: #0050fd;
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

.obesity {
	font-weight: 500;
	max-width: 700px;
	margin: 0.5rem 0;
}

.flex-col {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.back {
	display: flex;
	color: black;
	text-decoration: none;
	align-items: center;
	transition: 0.2s ease all;
	margin-top: 2rem;
}

.back:hover {
	opacity: 0.7;
}
</style>
