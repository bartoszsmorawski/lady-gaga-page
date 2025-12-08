//Podmianie tekstu

const personsList = [
	{
		imageName: 'cynthia.jpg',
		fullname: 'CYNTHIA GERMOTTA',
		position: 'President + Co-Founder',
		pronouns: 'She/Her/Hers',
		description:
			'Cynthia Bissett Germanotta is President of Born This Way Foundation, which she co-founded with her daughter Lady Gaga in 2012. Under Cynthia’s leadership, the Foundation has connected with tens of thousands of young people across the country and around the world, launched innovative youth-focused programming, and conducted cutting edge research to improve the understanding of mental wellness. Cynthia is a former telecommunications executive whose career in sales and management spanned 25 years. In May 2019, the United Nations’ World Health Organization appointed Cynthia as a global Goodwill Ambassador for Mental Health. Cynthia was born and raised in West Virginia, earned her bachelor’s degree at West Virginia University and a master’s degree from The George Washington University. She now resides in New York City with her husband Joe Germanotta. Joe and Cynthia have two wonderful daughters, Natali and Stefani, and are owners of a charming NYC restaurant, Joanne Trattoria.',
		socialMedia:
			'You can follow Cynthia on Twitter at <a class="teamPerson-socialMedia--link">@momgerm</a>, on Instagram at <a class="teamPerson-socialMedia--link">@momgerm</a>, and on Facebook at <a class="teamPerson-socialMedia--link">@CynthiaGermanotta</a>.',
	},
	{
		imageName: 'ladygaga.jpg',
		fullname: 'LADY GAGA',
		position: 'Co-Founder',
		pronouns: 'She/Her/Hers',
		description: 'Lady Gaga is co-founder of Born This Way Foundation.',
		socialMedia: '------',
	},
	{
		imageName: 'Alex-Aide_Headshot_Be-Kind-Shirt.jpg',
		fullname: 'ALEX AIDE',
		position: 'Vice President, Programs + Impact',
		pronouns: 'He/Him/His',
		description:
			'Alex Aide serves as the Vice President, Programs + Impact at Born This Way Foundation. In this capacity, he oversees Foundation programming including Channel Kindness and teen Mental Health First Aid. Before joining the team at Born This Way Foundation, Alex worked for Arianna Huffington and at the William Morris Endeavor (WME) talent agency in Los Angeles. Originally from West Virginia, Alex holds a Bachelor of Science in Business Administration and a Juris Doctorate degree from West Virginia University.',
		socialMedia: 'You can follow Alex on Instagram at <a class="teamPerson-socialMedia--link">@AlexAide</a>.',
	},
	{
		imageName: 'Aysha-Mahmood-Updated-Grey-Brackground-2.png',
		fullname: 'AYSHA MAHMOOD',
		position: 'Senior Manager, Programs',
		pronouns: 'She/Her/Hers',
		description:
			'Aysha Mahmood is Senior Programs Manager for Born This Way Foundation. In this capacity, Aysha’s responsibilities include editing Channel Kindness stories, supporting the program’s youth participants, and helping to maintain Channel Kindness’ social media accounts. Before joining Born This Way Foundation, Aysha earned her B.A. in journalism and political science from the University of Connecticut. Upon graduation, she worked as a reporter for The Journal Inquirer and then as a press aide for Connecticut House Democrats.</br> </br>  In her role with the foundation, Aysha has used her writing background to help youth craft over 2,000 stories on Channel Kindness. Her own creative work has been supported by the Kenyon Review Writers Workshop, VONA Voices, and Yale Writers’ Workshop. In 2024, she completed a fiction residency at Juniper Summer Writing Institute where she worked on her literary fiction novel. You can find Aysha’s poetry and fiction in Salamander, LEON Literary Review, Milk Candy Review, and Emerge Literary Journal, amongst others, and her nonfiction work in HuffPost, Teen Vogue, and Nylon. Aysha is a proud alum of Obama Foundation’s Community Leadership Corps, Google News Initiative Start Ups Lab, and Inkluded Academy, a mentorship program that amplifies BIPOC voices in the publishing field. <---',
		socialMedia: '------',
	},
	{
		imageName: 'Claudia-Santi-F.-Fernandes-Updated-Headshot-1.png',
		fullname: 'CLAUDIA-SANTIF. FERNANDES',
		position: 'Vice President, Research + Evaluation',
		pronouns: 'She/Her/Hers',
		description:
			'Claudia-Santi F. Fernandes, Ed.D., LPC, MCHES is the Vice President, Research + Evaluation at Born This Way Foundation, where she spearheads the Foundation’s research strategy and provides scientific expertise in the design and implementation of impactful programs and youth-led initiatives. She also holds a faculty appointment as an assistant clinical professor of the Child Study Center and in Biomedical Informatics and Data Science at the Yale School of Medicine.--->With a career spanning over 20 years, Dr. Claudia has been instrumental in leading efforts toward mental health promotion and substance misuse prevention within educational settings. As a prevention scientist and licensed professional counselor (LPC), she brings a unique blend of academic knowledge and practical experience to her approach—strongly emphasizing evidence-based research to inform youth-centered programs, policies, and structures. A core focus of her work is amplifying youth perspectives and experiences, ensuring their voices are central to decision-making processes.<--- --->Dr. Claudia’s professional journey began as a public school teacher in Connecticut and a bilingual school counselor in New York City. She was part of the founding leadership team at Bard High School Early College in Newark, NJ. Observing the impact and reach of science, she transitioned to a 10-year career in applied research at the Yale School of Medicine where she was promoted to ladder-track faculty. Her research was funded by the prestigious Yale Center for Clinical Investigation Scholar Award and sponsored by the National Institutes of Health/National Center for Advancing Translational Science. With this funding, she led her team in the development and evaluation of a digital game targeting suicide prevention in young people who misuse substances. Dr. Claudia has disseminated her research widely through publications in peer-reviewed journals and national presentations.<--- --->Dr. Claudia holds a Master of Arts (M.A.) in Applied Psychology from New York University and a Doctor of Education (Ed.D.) in Health and Behavior Studies from Columbia University Teachers College. She brings an unwavering commitment to improving youth well-being through her extensive research experience and ongoing work in the field of mental health promotion and prevention.<---',
		socialMedia:
			'You can follow Dr. Claudia on Instagram at <a class="teamPerson-socialMedia--link">@drclaudiaBTWF</a> and on Twitter at  <a class="teamPerson-socialMedia--link">@DrClaudiaSantiF</a> .',
	},
	{
		imageName: 'Fran-Headshot.png',
		fullname: 'FRANCESCA GIANNATTASIO',
		position: 'Manager, Research and Clinical Knowledge',
		pronouns: 'She/Her/Hers',
		description:
			'Francesca Giannattasio is the Manager of  Research and Clinical Knowledge for Born This Way Foundation. In this capacity, she supports research priorities related to innovation and design, program development and evaluation, and implementation science at Born This Way Foundation. ---> Fran holds a masters degree in Mental Health Counseling (M.S. Ed.)  and is currently a Counseling Psychology doctoral student at Fordham University. Fran’s research at Fordham focuses on understanding the experiences of young people accessing mental health information online. Prior to her work at the Foundation, Fran was a postgraduate research associate at the Yale School of Medicine where she supported the design, development, and evaluation of digital interventions targeting youth suicide and substance misuse prevention. At Yale, Fran managed Youth4Wellness at Yale, a youth advisory board working alongside several projects. Fran is originally from Connecticut and is a graduate of Fairfield University. <--- ',
		socialMedia: '------',
	},
	{
		imageName: 'Josh-Meredith_Headshot_Be-Kind-Shirt.jpg',
		fullname: 'JOSH MEREDITH',
		position: 'Chief of Staff',
		pronouns: 'He/Him/His',
		description:
			'Josh Meredith is the Chief of Staff for Born This Way Foundation. His responsibilities include assisting the President and Executive Director and helping to manage all logistical elements that go into the Foundation’s day-to-day operation. Prior to joining the Foundation, Josh worked at the Walt Disney Company and strives to bring the smile and all the magic he gained there into every aspect of his life. After facing the hardships and mental health struggles that came along with growing up as a queer youth in Appalachia, Josh recognized a passion for mental health advocacy and strives to be a voice and a resource for any young person who may be facing the same struggles. He is a native of West Virginia and a graduate of Marshall University.',
		socialMedia: 'You can follow Josh on Instagram at <a class="teamPerson-socialMedia--link">@joshmeredithnyc.</a>.',
	},
	{
		imageName: 'Joshua-Hollin_Headshot_Be-Kind-Shirt.jpg',
		fullname: 'JOSHUA HOLLIN',
		position: 'Manager, Digital',
		pronouns: 'He/Him/His',
		description:
			'Joshua Hollin is Digital Manager for Born This Way Foundation where he executes digital content in service to the mission of building a kinder, braver world. In 2017, Josh initiated “Channel Kindness Radio,” a recurring podcast series featured on <a>channelkindness.org</a>, which centered around non profit organizations and people who are actively making a difference in their communities. Josh graduated with his Bachelors in Commercial Music Composition from Florida Atlantic University. In the future, Josh wishes to combine his passion for music, marketing, graphic design, and social media in a way that makes a difference.',
		socialMedia:
			'You can follow Josh on Twitter at <a class="teamPerson-socialMedia--link">@PAJAMAJOSH </a> and on Instagram at  <a class="teamPerson-socialMedia--link">@PAJAMAJOSH.</a> .',
	},
	{
		imageName: 'Katy-Butler-Headshot.jpg',
		fullname: 'KATY BUTLER',
		position: 'Digital Planner',
		pronouns: 'She/Her/Hers',
		description:
			'For nearly 10 years Katy has worked in digital advocacy and communication with a focus on social justice and social impact. Previously, she spent 3 years working with Congressman Mike Honda in Washington, D.C. where she worked on national anti-bullying legislation. Following her time in government, Katy moved into the nonprofit sector where she has been using her expertise to maximize digital action and impact on a variety of important and intersecting issues including climate, LGBTQ rights, mental health and wellness, voter suppression, and democracy. She is a passionate storyteller and campaigner who has launched multiple anti-bullying campaigns on local, state, and national levels, and has traveled the country to share her story about being bullied as a teenager with schools, conferences, and a variety of social justice initiatives. Katy is dedicated to building a country that works for everyone and using her experience in campaigns and marketing to harness the power of digital strategy to make that happen. She has a BA in both Women’s Studies and Sociology and a Masters in Diversity and Equity Education. Pre-pandemic, Katy used to play rugby and now enjoys watching matches on TV. In her free time, she loves to sing, paint with watercolors, and go to the park with her 4-year-old and her two puppies!',
		socialMedia: '------',
	},
	{
		imageName: 'Keemia-Abbaszadeh-Headshot.jpg',
		fullname: 'KEEMIA ABBASZADEH',
		position: 'Senior Associate, Operations',
		pronouns: 'She/Her/Hers',
		description:
			'Keemia Abbaszadeh is the Senior Associate, Operations for Born This Way Foundation. In this role, she supports the seamless day-to-day functioning of the organization and is responsible for overseeing administrative and operational tasks. Before joining Born This Way Foundation, she worked in communications for Shad Canada and Western University Students’ Council – two education-based, youth-focused nonprofit organizations. She has also volunteered with HOBY Leadership seminars for nearly a decade. Originally from London, Canada, Keemia is currently a Nonprofit Management graduate student at Columbia University and a graduate of Western University.',
		socialMedia: '------',
	},
	{
		imageName: 'Mariah-KharisUpdated-Grey-Brackground.041.png',
		fullname: 'MARIAH KARIS',
		position: 'Senior Associate, Programs',
		pronouns: 'She/Her/Hers',
		description:
			'Mariah Karis is Senior Associate of Programs, where she currently runs Born This Way Foundation’s Global Youth Advisory Board program and hosts the monthly Channel Kindness Storytellers Club writing workshops, offering virtual workshop options and in-person sessions for schools and organizations upon request. Additionally, she has taught theatre education and produced musical productions for over 3000 young people as a guest teaching artist at schools and arts organizations in 13 U.S. states, British Columbia, and Italy. She holds a BA in Journalism from the University of Montana. Additionally, she’s taken advanced creative writing courses from UCLA Extension Writers’ Program and Gotham Writers in New York City. Mariah has also received public speaking instruction from New York Speech Coaching.',
		socialMedia: '------',
	},
	{
		imageName: 'Megan-Bradley_Headshot-1.png',
		fullname: 'MEGAN BRADLEY',
		position: 'Senior Manager, Partnerships',
		pronouns: 'They/She',
		description:
			'Megan Bradley is Senior Manager, Partnerships for Born This Way Foundation, where they support the continued and expanding growth of the Foundation’s programming through strategic partnerships. Prior to joining Born This Way Foundation, Megan managed partnerships and cause marketing campaigns at DonorsChoose, a nonprofit crowdfunding platform for US public school teachers, and has professional experience across brand management, sales, data analytics, and education. When she’s not cultivating relationships with organizations who want to build kind communities and promote youth mental health, she’s cultivating relationships with the pollinators, birds, and other critters who visit her suburban Philly garden. Originally from Pennsylvania, Megan graduated from Northwestern University with a BA in Cultural Anthropology. ',
		socialMedia: 'Connect with Megan on <a class="teamPerson-socialMedia--link"> LinkedIn</a>.',
	},
	{
		imageName: 'Mitu-Yilma__Headshot_Be-Kind-Shirt-2.jpg',
		fullname: 'MITU YILMA',
		position: 'Vice President, Communications',
		pronouns: 'She/Her/Hers',
		description:
			'Mitu Yilma is the Vice President, Communications for Born This Way Foundation where she leads the communications and digital strategy for the organization. She is passionate about centering the stories and experiences of young people, and deeply believes in the power of strategic storytelling to spark needed change. Prior to joining Born This Way Foundation, Mitu served in digital and marketing roles for Working America, the community affiliate of AFL-CIO, Advancement Project, The Atlantic, and National Journal. Mitu is a graduate of Duke University.',
		socialMedia:
			'You can follow Mitu on Instagram at <a class="teamPerson-socialMedia--link">@MituYilma</a> and on Twitter at  <a class="teamPerson-socialMedia--link">@MituYilma</a> .',
	},
	{
		imageName: 'Rachel-Martin-Final-Headshot.png',
		fullname: 'RACHEL MARTIN',
		position: 'Chief Operating Officer',
		pronouns: 'She/Her/Hers',
		description:
			'Rachel Martin is Chief Operating Officer for Born This Way Foundation. In this role she works closely with the Foundation’s co-founders to set organizational strategy and oversees the talented programs, research, and communications teams to bring that strategy to life in support of a kinder, braver world built for and with young people. She’s worked with the Foundation in a variety of capacities since 2014, including as Deputy Executive Director. Rachel’s background includes operations, communications, and leadership roles within the nonprofit, advocacy, and government sectors, including for the Democratic National Committee during the 2012 presidential cycle, for NYC Mayor Bill de Blasio, and for Kamala Harris for the People in 2020. She also served as COO of a mission-driven digital agency and helped an array of nonprofit, advocacy, and corporate clients develop and execute strategic communications plans while at PR firm DKC. A graduate of George Washington University, Rachel is originally from Massachusetts and currently lives in Brooklyn, New York.',
		socialMedia: '------',
	},
	{
		imageName: 'Shadille_Expanded-2.png',
		fullname: 'SHADILLE ESTEPAN',
		position: 'Senior Manager, Communications',
		pronouns: 'She/Her/Hers',
		description:
			'Shadille Estepan (she/ella) is a storyteller, communications strategist, and mental health advocate with 12 years of experience in nonprofit communications. As Senior Communications Manager at Born This Way Foundation, she brings extensive experience in storytelling, media relations, and public health advocacy to amplify youth voices, destigmatize mental health, and expand access to critical resources. ---> Shadille has led high-impact partnerships with local, federal, and international organizations, ensuring that research-backed mental health resources reach young people and their communities. She has curated and facilitated hundreds of conversations–both online and in person–on mental health, youth wellbeing, and community building, amplifying the voices of young changemakers and policy leaders alike. <--- ---> As a Dominican immigrant whose first language is Spanish, she saw firsthand the gaps in culturally responsive and accessible mental health resources. This experience shaped her commitment to ensuring that all young people have the support they need to care for their wellbeing. Through her work, she helps curate compelling narratives that drive action, ensuring mental health conversations are inclusive, empowering, and reflective of diverse communities. <--- ---> Her journey with Born This Way Foundation began in 2012 as a member of its inaugural Youth Advisory Board. Since then, she has played a pivotal role in shaping the organization’s messaging and outreach strategies. She’s dedicated to leveraging storytelling as a tool for social change, ensuring that young people have the platforms, resources, and support they need to thrive.<---',
		socialMedia:
			'You can follow Shadille on Twitter at <a class="teamPerson-socialMedia--link">@shadille</a> and on Instagram at <a class="teamPerson-socialMedia--link"> @shadille</a> .',
	},
];

const params = new URLSearchParams(window.location.search);
let index = parseInt(params.get('person'));

if (index !== NaN) {
	const person = personsList[index];

	const personImageEl = document.querySelector('.picture-teamPerson');
	const personNameEl = document.querySelector('.person-name--teamPerson');
	const personPositionEl = document.querySelector('.teamPerson-position');
	const personPronounsEl = document.querySelector('.teamPerson-pronouns');
	const personDescriptionEl = document.querySelector('.teamPerson-description');
	const personSocialMediaEl = document.querySelector('.teamPerson-socialMedia');

	const buttonEl = document.querySelector('.btn-teamPerson');

	const imagePath = '../picture/';

	personImageEl.src = imagePath + person.imageName;
	personNameEl.textContent = person.fullname;
	personPositionEl.textContent = person.position;
	personPronounsEl.textContent = person.pronouns;
	personDescriptionEl.innerHTML = person.description;
	personSocialMediaEl.innerHTML = person.socialMedia;

	buttonEl.addEventListener('click', () => {
		let nextIndex = (index + 1) % personsList.length;
		window.location.href = `teamPerson.html?person=${nextIndex}`;
	});
}
