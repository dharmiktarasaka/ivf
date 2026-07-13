// Detailed Fertility Treatments Data
// All content is written in plain, comforting, and reassuring language with disclaimers.

export const treatmentsData = [
  {
    slug: "ivf",
    name: "In Vitro Fertilization (IVF)",
    tagline: "IVF Treatment With Personalized Guidance at Every Step",
    shortDescription: "An advanced fertility treatment where eggs are gently collected, fertilized in a state-of-the-art laboratory, and placed back in the uterus to support a healthy pregnancy.",
    definition: "In Vitro Fertilization (IVF) is a supportive reproductive procedure. Eggs are gently collected from the ovaries and combined with sperm in a specialized laboratory. Once fertilization occurs and the embryos develop, they are carefully placed back in the uterus.",
    whoConsiders: [
      "Couples who have been trying to conceive for over a year with unexplained infertility.",
      "Women with blocked or damaged fallopian tubes.",
      "Couples where male factor fertility concerns are present.",
      "Individuals experiencing endometriosis or polycystic ovary syndrome (PCOS)."
    ],
    whyRecommended: "IVF offers the highest success rates among fertility treatments because it manages the fertilization process under strict, protective laboratory conditions, bypassing many physical roadblocks in the body.",
    steps: [
      {
        title: "Ovarian Stimulation",
        description: "Hormone medications are gently administered to encourage the ovaries to develop multiple mature eggs. We monitor your body closely with comfortable ultrasounds."
      },
      {
        title: "Egg Retrieval",
        description: "A quick, 15-minute ultrasound-guided procedure done under light, comfortable sedation to collect mature eggs from the ovaries."
      },
      {
        title: "Fertilization",
        description: "In our high-tech laboratory, the collected eggs are combined with the partner's or donor's sperm by experienced embryologists."
      },
      {
        title: "Embryo Development",
        description: "The fertilized eggs (embryos) are monitored in an incubator for 3 to 5 days, checking their growth and health milestones."
      },
      {
        title: "Embryo Transfer",
        description: "A gentle procedure where the healthiest embryo is placed into the uterus using a tiny, flexible tube. No sedation is required, and it feels like a regular checkup."
      },
      {
        title: "Follow-up & Support",
        description: "Two weeks after transfer, we perform a blood test to check for pregnancy while providing emotional support throughout the waiting period."
      }
    ],
    preparation: [
      "Maintain a balanced, nutritious diet with recommended prenatal vitamins like folic acid.",
      "Avoid smoking, alcohol, and excessive caffeine.",
      "Focus on stress-reducing activities like yoga, light walking, or reading.",
      "Keep an open line of communication with our counselling team to manage emotional stress."
    ],
    questionsToAsk: [
      "What lifestyle adjustments can we make before starting our IVF cycle?",
      "Are there any specific diagnostic tests we need before beginning stimulation?",
      "What happens to additional high-quality embryos?"
    ],
    limitations: "While IVF has helped millions of families, success depends on individual factors like maternal age, egg quality, and sperm health. Not every IVF cycle results in pregnancy.",
    timeline: "A typical IVF cycle takes about 4 to 6 weeks, depending on your body's natural response to stimulation.",
    faqs: [
      {
        question: "Is the egg retrieval procedure painful?",
        answer: "No, retrieval is done under light sedation, meaning you will sleep comfortably and feel no pain. You may experience mild cramping afterward, which resolves quickly."
      },
      {
        question: "How long should we wait before trying IVF?",
        answer: "Generally, if you are under 35 and have tried for a year, or over 35 and tried for 6 months, it is a good time to consult. Your doctor will advise if IVF is appropriate."
      }
    ],
    related: ["icsi", "iui", "fet"]
  },
  {
    slug: "icsi",
    name: "Intracytoplasmic Sperm Injection (ICSI)",
    tagline: "Advanced Laboratory Care to Maximize Fertilization",
    shortDescription: "A specialized form of IVF where a single high-quality sperm is directly injected into a mature egg in the lab, specifically supporting male infertility.",
    definition: "Intracytoplasmic Sperm Injection (ICSI) is a highly precise laboratory procedure used alongside IVF. Rather than placing many sperm near an egg, our embryologist selects a single healthy sperm and gently injects it directly into the egg.",
    whoConsiders: [
      "Couples experiencing severe male factor infertility (low count, poor motility, or shape issues).",
      "Couples who experienced low fertilization rates in previous standard IVF cycles.",
      "Cases where sperm has been surgically retrieved."
    ],
    whyRecommended: "ICSI directly resolves physical fertilization barriers. By selecting the most viable sperm and ensuring it enters the egg, it optimizes the chance of creating healthy embryos.",
    steps: [
      {
        title: "Sperm Selection",
        description: "Using high-magnification microscopes, our embryologists identify and select a single sperm with the best structure and movement."
      },
      {
        title: "Micro-Injection",
        description: "With extreme precision, the embryologist stabilizes the mature egg and gently injects the selected sperm into the center of the egg."
      },
      {
        title: "Monitoring",
        description: "The injected eggs are placed in incubators and monitored for signs of successful fertilization, continuing standard IVF steps."
      }
    ],
    preparation: [
      "Men are advised to make healthy lifestyle choices, avoid hot tubs/saunas, and discuss supportive supplements with our clinical team.",
      "Women follow standard IVF ovarian stimulation protocols."
    ],
    questionsToAsk: [
      "Does ICSI increase our overall fertilization rate compared to standard IVF?",
      "Are there any specific risks associated with ICSI?",
      "How is the sperm selected for the micro-injection?"
    ],
    limitations: "ICSI assists fertilization, but embryo development and successful implantation still depend on egg and sperm quality.",
    timeline: "Matches the IVF timeline (4 to 6 weeks). The micro-injection occurs on the day of egg collection.",
    faqs: [
      {
        question: "Does ICSI affect the health of the baby?",
        answer: "ICSI is a widely used, safe procedure. Extensive studies show that children born via ICSI are as healthy as those born via standard IVF or natural conception."
      }
    ],
    related: ["ivf", "male-infertility"]
  },
  {
    slug: "iui",
    name: "Intrauterine Insemination (IUI)",
    tagline: "A Gentle, Less Invasive First Step",
    shortDescription: "A simple, low-intervention fertility procedure where prepared sperm is placed directly inside the uterus around the time of ovulation to aid natural fertilization.",
    definition: "Intrauterine Insemination (IUI), sometimes called artificial insemination, is a gentle procedure where washed and concentrated sperm is placed directly into the woman's uterus, closer to the waiting egg, during her fertile window.",
    whoConsiders: [
      "Couples with unexplained infertility or mild male factor issues.",
      "Women with cervical mucus issues that block sperm passage.",
      "Individuals using donor sperm."
    ],
    whyRecommended: "IUI is less invasive, requires fewer medications, and is more cost-effective. It gives healthy sperm a 'head start' by bypassing the cervix and placing them directly inside the uterus.",
    steps: [
      {
        title: "Ovulation Monitoring",
        description: "We monitor your natural cycle or use mild fertility pills to track egg development. We time the procedure exactly when you ovulate."
      },
      {
        title: "Sperm Preparation",
        description: "The partner's or donor's sperm is collected and 'washed' in our laboratory to extract the most active and healthy sperm."
      },
      {
        title: "Insemination",
        description: "A simple, quick procedure where a thin, flexible catheter is used to insert the sperm into the uterus. It takes only a few minutes and feels like a Pap smear."
      }
    ],
    preparation: [
      "Ensure proper hydration and light activities.",
      "Attend scheduled ultrasound scans to track egg maturity.",
      "Discuss if a trigger injection is needed to timing ovulation."
    ],
    questionsToAsk: [
      "How many IUI cycles do you recommend trying before exploring IVF?",
      "Is ovulation medication recommended for my specific case?",
      "Are there any side effects of the ovulation medicines?"
    ],
    limitations: "IUI success rates are lower than IVF. It requires open fallopian tubes and a reasonable sperm count to be effective.",
    timeline: "Aligned with your natural menstrual cycle (about 2 weeks from the start of medication to insemination).",
    faqs: [
      {
        question: "Do I need to rest after IUI?",
        answer: "We recommend resting on the table for 15-20 minutes after the procedure. After that, you can return to your normal daily activities with ease."
      }
    ],
    related: ["ivf", "ovulation-induction"]
  },
  {
    slug: "egg-freezing",
    name: "Egg Freezing (Oocyte Cryopreservation)",
    tagline: "Preserve Your Fertility Options for the Future",
    shortDescription: "Safely collect and freeze healthy eggs to preserve your reproductive potential, allowing you to plan a family when the time is right for you.",
    definition: "Egg freezing is a medical method of preserving a woman's fertility. Eggs are collected from the ovaries, fast-frozen (vitrified), and stored at sub-zero temperatures to remain viable for future use.",
    whoConsiders: [
      "Women who wish to delay childbearing for career, educational, or personal reasons.",
      "Women diagnosed with medical conditions (like cancer) that require fertility-altering treatments.",
      "Individuals with a family history of early menopause."
    ],
    whyRecommended: "Egg quality naturally changes over time. By freezing eggs in your peak reproductive years, you lock in their age and quality, offering peace of mind and flexibility.",
    steps: [
      {
        title: "Stimulation",
        description: "We use hormone injections over 10-12 days to stimulate the ovaries to mature multiple eggs."
      },
      {
        title: "Retrieval",
        description: "Eggs are gently retrieved under light sedation, using a thin needle guided by ultrasound."
      },
      {
        title: "Vitrification",
        description: "The mature eggs are immediately frozen using advanced rapid-freezing technology (vitrification) and stored securely."
      }
    ],
    preparation: [
      "Discuss your career or medical timeline with our specialists.",
      "Ensure general healthy habits and prenatal support."
    ],
    questionsToAsk: [
      "How many eggs should I aim to freeze for a high chance of future success?",
      "What are the annual storage costs?",
      "How long can eggs remain frozen without losing quality?"
    ],
    limitations: "Egg freezing provides options but is not an absolute guarantee of a future pregnancy. Egg survival rates during thawing are high, but not 100%.",
    timeline: "Approximately 2 to 3 weeks, matching the first half of an IVF cycle.",
    faqs: [
      {
        question: "What is the best age to freeze eggs?",
        answer: "The general guideline is in your late 20s to mid-30s, as egg quantity and quality are typically at their peak, though it can be done successfully at other ages too."
      }
    ],
    related: ["ivf", "fertility-testing"]
  },
  {
    slug: "egg-donation",
    name: "Egg Donation",
    tagline: "A Path to Motherhood with Compassionate Support",
    shortDescription: "A hopeful treatment route utilizing healthy eggs from a carefully screened donor, combined with the partner's sperm to help build your family.",
    definition: "Egg donation is a fertility process where eggs from a healthy donor are fertilized in our laboratory using the partner's (or donor's) sperm. The resulting embryo is then transferred to the recipient's uterus.",
    whoConsiders: [
      "Women with premature ovarian failure or low ovarian reserve.",
      "Women who have experienced multiple failed IVF cycles due to egg quality issues.",
      "Individuals carries genetic conditions they wish to avoid passing on."
    ],
    whyRecommended: "Donor eggs have very high success rates because they come from young, healthy donors whose eggs are at their peak reproductive potential.",
    steps: [
      {
        title: "Donor Screening",
        description: "Donors undergo rigorous medical, psychological, and genetic screening to ensure safety and health."
      },
      {
        title: "Uterine Preparation",
        description: "The recipient's uterine lining is prepared with gentle hormones to create a welcoming environment for implantation."
      },
      {
        title: "Fertilization & Transfer",
        description: "Donor eggs are fertilized in our laboratory, and a healthy embryo is transferred into the recipient's uterus."
      }
    ],
    preparation: [
      "Receive supportive counselling to understand the emotional and legal aspects of donor care.",
      "Follow hormone protocols exactly as advised to prepare your womb."
    ],
    questionsToAsk: [
      "How are donors screened and matched?",
      "What is the anonymous matching protocol?",
      "How does the success rate compare to using my own eggs?"
    ],
    limitations: "Egg donation requires accepting the genetic separation, which is why counselling is an integrated, comforting part of this service.",
    timeline: "Typically 6 to 8 weeks, including donor synchronization and recipient lining preparation.",
    faqs: [
      {
        question: "Is the donor's identity kept confidential?",
        answer: "Yes, in accordance with regulatory guidelines, egg donation is anonymous, and donor confidentiality is strictly maintained."
      }
    ],
    related: ["ivf", "infertility-counselling"]
  },
  {
    slug: "fet",
    name: "Frozen Embryo Transfer (FET)",
    tagline: "Flexible and Relaxed Planning for Embryo Transfer",
    shortDescription: "A gentle procedure where high-quality embryos created during a past cycle are carefully thawed and transferred into the uterus at the optimal time.",
    definition: "Frozen Embryo Transfer (FET) is a process where frozen embryos from a previous IVF cycle are thawed and placed in the uterus during a carefully prepared window of your menstrual cycle.",
    whoConsiders: [
      "Couples who have remaining frozen embryos from a previous cycle and wish to try for another child.",
      "Patients whose bodies need a recovery phase after the egg retrieval stage of IVF.",
      "Patients undergoing pre-implantation genetic testing."
    ],
    whyRecommended: "FET is highly successful, allows timing flexibility, and reduces stress on the body by separating egg retrieval from the transfer phase, allowing hormone levels to settle.",
    steps: [
      {
        title: "Cycle Tracking",
        description: "We monitor your natural cycle or use hormone tablets to prepare the lining of your uterus."
      },
      {
        title: "Embryo Thawing",
        description: "On the transfer day, embryologists thaw the selected embryo with advanced heating protocols."
      },
      {
        title: "Gentle Transfer",
        description: "The embryo is gently placed into the uterus under ultrasound guidance, taking about 10 minutes."
      }
    ],
    preparation: [
      "Take prescribed estrogen/progesterone medications to support the uterine lining.",
      "Keep diagnostic appointments for uterine scans."
    ],
    questionsToAsk: [
      "How do thawed embryos compare in quality to fresh ones?",
      "What is the survival rate of our frozen embryos?",
      "How is the timing window determined?"
    ],
    limitations: "Not all embryos survive the freezing and thawing process, though modern vitrification achieves over a 95% survival rate.",
    timeline: "Around 3 to 4 weeks from the start of your menstrual cycle to the transfer day.",
    faqs: [
      {
        question: "Is FET less demanding than fresh IVF?",
        answer: "Yes, FET is much simpler. It requires no egg retrieval or sedation, involves fewer injections, and focuses entirely on preparing the womb."
      }
    ],
    related: ["ivf", "egg-freezing"]
  },
  {
    slug: "ovulation-induction",
    name: "Ovulation Induction",
    tagline: "Encouraging Your Body's Natural Cycle",
    shortDescription: "A simple medical therapy using gentle medication to stimulate the ovaries to produce and release healthy eggs, supporting natural conception.",
    definition: "Ovulation Induction is a simple fertility treatment that uses oral or injectable medications to encourage regular ovulation in women who do not ovulate regularly or wish to release more than one egg to aid conception.",
    whoConsiders: [
      "Women with irregular periods or absent ovulation (e.g. PCOS).",
      "Couples trying to optimize the timing of intercourse.",
      "As a preliminary step before moving to IUI."
    ],
    whyRecommended: "It is an easy, non-invasive starting point. Many couples conceive simply by regulating ovulation and timing intercourse without needing advanced laboratory procedures.",
    steps: [
      {
        title: "Medication",
        description: "Gentle pills or injections are started at the beginning of the menstrual cycle to encourage egg growth."
      },
      {
        title: "Monitoring",
        description: "We track follicle growth through a few brief, comfortable ultrasound scans."
      },
      {
        title: "Timed Intercourse",
        description: "When the egg is fully mature, we advise the best days for intercourse or administer a trigger shot."
      }
    ],
    preparation: [
      "Follow medication timing exactly as prescribed.",
      "Attend monitoring scans to prevent multiple egg release risks."
    ],
    questionsToAsk: [
      "What are the chances of having multiples (twins) with this treatment?",
      "How many cycles of induction should we try?",
      "What side effects should we monitor?"
    ],
    limitations: "Success requires healthy fallopian tubes and adequate sperm count. Multiple follicles can develop, requiring careful monitoring to manage risks.",
    timeline: "Typically 12 to 14 days of medication and monitoring per cycle.",
    faqs: [
      {
        question: "What medications are commonly used?",
        answer: "Oral medications like Clomiphene Citrate or Letrozole are most common, as they are gentle and highly effective at regulating cycles."
      }
    ],
    related: ["iui", "fertility-testing"]
  },
  {
    slug: "fertility-testing",
    name: "Fertility Testing & Assessment",
    tagline: "Clear Answers for Your Path Forward",
    shortDescription: "Comprehensive, gentle diagnostic testing for both partners to identify reproductive health factors and design a supportive treatment plan.",
    definition: "Fertility Testing involves a series of diagnostic evaluations for both partners. It aims to identify ovulation patterns, hormonal balance, physical patency of tubes, and sperm health to find the cause of infertility.",
    whoConsiders: [
      "Any couple trying to conceive for over a year (or six months if over 35).",
      "Women with irregular periods or pelvic discomfort.",
      "Men who want a proactive check of their sperm health."
    ],
    whyRecommended: "Testing removes guesswork. By getting accurate answers upfront, we can design the simplest, most effective treatment, saving you time and emotional stress.",
    steps: [
      {
        title: "Consultation",
        description: "We take a detailed history of your health, lifestyle, and past cycles in a comfortable room."
      },
      {
        title: "Female Evaluation",
        description: "Hormone blood tests, pelvic ultrasound scans, and tubal patency checks (e.g. HSG) are scheduled gently."
      },
      {
        title: "Male Evaluation",
        description: "A semen analysis is conducted to check sperm count, shape, and movement in a private collection environment."
      }
    ],
    preparation: [
      "Schedule testing around specific days of your menstrual cycle as advised by our nurse.",
      "Men should maintain a 2-to-5 day abstinence window prior to semen collection."
    ],
    questionsToAsk: [
      "Which tests are absolutely essential for us right now?",
      "How long will it take to get our test results?",
      "Are these diagnostic procedures uncomfortable?"
    ],
    limitations: "Some testing can be mildly uncomfortable (like tubal patency tests), but our staff uses gentle techniques. Some testing yields 'unexplained' results, which we still treat successfully.",
    timeline: "Completed within one menstrual cycle (approx. 2 to 3 weeks).",
    faqs: [
      {
        question: "Is semen analysis done at the clinic?",
        answer: "Yes, we have a private, comfortable collection room. Results are processed in our laboratory with absolute confidentiality."
      }
    ],
    related: ["female-infertility", "male-infertility"]
  },
  {
    slug: "female-infertility",
    name: "Female Infertility Treatment",
    tagline: "Caring for Your Reproductive Health",
    shortDescription: "Specialized, compassionate care addressing ovulation issues, tubal blocks, endometriosis, and uterine conditions that affect conception.",
    definition: "Female Infertility Treatment includes medical therapies, hormone regulation, and minor surgical procedures to correct structural, hormonal, or cycle issues affecting a woman's reproductive health.",
    whoConsiders: [
      "Women diagnosed with PCOS, irregular ovulation, or thyroid imbalances.",
      "Women with blocked fallopian tubes, pelvic adhesions, or endometriosis.",
      "Women experiencing recurrent early pregnancy losses."
    ],
    whyRecommended: "Targeted female fertility treatments address the root cause of reproductive challenges, restoring hormonal balance and physical health to make pregnancy achievable.",
    steps: [
      {
        title: "Diagnosis",
        description: "Detailed scans, blood panels, and ovulation assessments to pinpoint the exact hormonal or physical factor."
      },
      {
        title: "Targeted Treatment",
        description: "Can include oral hormone regulation, lifestyle guidance, or minor corrective surgery (like laparoscopy)."
      },
      {
        title: "Supportive Monitoring",
        description: "Tracking your response to treatments to ensure safety, comfort, and positive progress."
      }
    ],
    preparation: [
      "Keep track of your cycle dates and symptoms.",
      "Talk to our counsellors to manage emotional stress related to diagnosis."
    ],
    questionsToAsk: [
      "How does my diagnosis (e.g. PCOS) affect our long-term fertility plan?",
      "Is medication sufficient, or will I need keyhole surgery?",
      "What supportive lifestyle changes will help my treatment?"
    ],
    limitations: "Treatment response varies. Some conditions (like advanced endometriosis) require a combined approach of medical support and IVF.",
    timeline: "Varies based on diagnosis. Hormonal balancing can take 1 to 3 months before active conception attempts.",
    faqs: [
      {
        question: "Can PCOS be cured for pregnancy?",
        answer: "While PCOS is a long-term condition, its symptoms can be managed effectively with medication and lifestyle support, allowing many women with PCOS to conceive successfully."
      }
    ],
    related: ["fertility-testing", "laparoscopy-hysteroscopy"]
  },
  {
    slug: "male-infertility",
    name: "Male Infertility Treatment",
    tagline: "Dedicated Support for Men's Reproductive Health",
    shortDescription: "Comprehensive solutions addressing low sperm count, motility, morphology issues, and lifestyle factors to improve male fertility.",
    definition: "Male Infertility Treatment covers medical, hormonal, and procedural therapies aimed at improving semen quality, correcting physical blocks, or using advanced selection methods to retrieve healthy sperm.",
    whoConsiders: [
      "Men with semen analysis results showing low sperm counts or poor motility.",
      "Couples who want to optimize fertilization chances during IVF/ICSI.",
      "Men seeking guidance on lifestyle, varicocele, or environmental factors."
    ],
    whyRecommended: "Male factors contribute to nearly 40-50% of fertility journeys. Simple treatments, nutritional support, or advanced laboratory methods (like ICSI) can resolve these concerns.",
    steps: [
      {
        title: "Assessment",
        description: "A detailed semen analysis, hormonal panel, and physical review by our clinical team."
      },
      {
        title: "Medical Support",
        description: "Prescribing custom vitamins, hormone-balancing medications, and lifestyle changes to improve sperm production."
      },
      {
        title: "Advanced Lab Selection",
        description: "Utilizing specialized laboratory wash techniques or ICSI to select the single healthiest sperm for fertilization."
      }
    ],
    preparation: [
      "Avoid smoking, excessive alcohol, and extreme heat (saunas/hot baths).",
      "Adopt a diet rich in antioxidants (leafy greens, nuts, berries) and stay hydrated."
    ],
    questionsToAsk: [
      "Will medication and lifestyle improvements be enough to boost my sperm count?",
      "How long does it take for sperm quality to improve after starting treatment?",
      "Is ICSI necessary for our fertility treatment?"
    ],
    limitations: "Sperm regeneration takes about 74 days; therefore, improvements in semen parameters require at least 2 to 3 months of consistent treatment.",
    timeline: "Usually requires a minimum of 3 months to observe measurable improvements in sperm parameters.",
    faqs: [
      {
        question: "Can stress affect sperm quality?",
        answer: "Yes, chronic stress can influence hormone production and semen quality. We offer relaxation guidelines and counseling to support your general well-being."
      }
    ],
    related: ["fertility-testing", "icsi"]
  },
  {
    slug: "laparoscopy-hysteroscopy",
    name: "Laparoscopy & Hysteroscopy",
    tagline: "Minimally Invasive Diagnostic and Corrective Care",
    shortDescription: "Gentle keyhole procedures to examine and correct physical factors within the uterus and pelvic area, helping to optimize implantation.",
    definition: "Laparoscopy and Hysteroscopy are minimally invasive surgical procedures. Laparoscopy uses a tiny camera inserted near the navel to view the pelvic organs, while Hysteroscopy uses a small scope to examine the inside of the uterus.",
    whoConsiders: [
      "Women with suspected fallopian tube blocks, uterine fibroids, or polyps.",
      "Patients experiencing pelvic pain or severe endometriosis.",
      "Women undergoing evaluation after unexplained failed IVF transfers."
    ],
    whyRecommended: "These keyhole methods allow our doctors to see inside the reproductive system with absolute clarity, and often resolve minor blockages, polyps, or adhesions during the same brief procedure.",
    steps: [
      {
        title: "Preparation",
        description: "Standard pre-operative checks to ensure you are fully healthy and comfortable for the procedure."
      },
      {
        title: "Procedure",
        description: "Done in our clean operating theater under anesthesia. You will feel no pain, and incisions are tiny (band-aid size)."
      },
      {
        title: "Recovery",
        description: "A short resting period in our comfortable recovery room. Most patients go home on the same day."
      }
    ],
    preparation: [
      "Follow fasting instructions (usually nil by mouth for 6-8 hours before).",
      "Arrange for a partner or family member to drive you home after discharge.",
      "Wear comfortable, loose clothing."
    ],
    questionsToAsk: [
      "Are these diagnostic procedures or will corrective surgery be done at the same time?",
      "What is the expected recovery time before we can resume fertility treatments?",
      "Will there be visible scars?"
    ],
    limitations: "While highly safe, these are minor surgical procedures carrying minimal risks of infection or bleeding, which are managed carefully by our surgical team.",
    timeline: "Usually a single-day procedure, with complete physical recovery in 3 to 7 days.",
    faqs: [
      {
        question: "Is hospitalization required?",
        answer: "No, these are standard day-care procedures. You will be admitted in the morning and can return home by afternoon or evening."
      }
    ],
    related: ["female-infertility", "ivf"]
  },
  {
    slug: "infertility-counselling",
    name: "Infertility Counselling",
    tagline: "Compassionate Support for Your Emotional Well-Being",
    shortDescription: "Dedicated, private counselling sessions for couples and individuals to help navigate the emotional ups and downs of the fertility journey.",
    definition: "Infertility Counselling is a supportive psychological service. Our professional counsellors offer a confidential space to discuss feelings, manage anxieties, learn coping techniques, and make informed choices together.",
    whoConsiders: [
      "Couples feeling stressed, anxious, or emotionally drained by fertility challenges.",
      "Individuals navigating complex choices (like donor cycles or egg freezing).",
      "Anyone experiencing the emotional 'two-week wait' during an IVF cycle."
    ],
    whyRecommended: "Fertility care is as much emotional as it is medical. Reducing stress and having a neutral, supportive space to talk helps improve your mental health, strengthen relationships, and build resilience.",
    steps: [
      {
        title: "Introductory Session",
        description: "A comfortable, welcoming conversation to understand your feelings, concerns, and stress points."
      },
      {
        title: "Coping Strategies",
        description: "Learning relaxation methods, cognitive restructuring, and healthy communication tools to navigate treatments together."
      },
      {
        title: "Ongoing Guidance",
        description: "Sessions timed alongside your medical milestones (stimulation, transfer, waiting) to keep you grounded and supported."
      }
    ],
    preparation: [
      "Come with an open mind, either individually or as a couple.",
      "Be prepared to share your questions, anxieties, and emotional needs."
    ],
    questionsToAsk: [
      "Can we attend counselling sessions online or in person?",
      "Are sessions available during the weekend?",
      "How can we support each other better as a couple during IVF?"
    ],
    limitations: "Counselling supports emotional health and stress management, but does not directly cure physical fertility issues.",
    timeline: "Flexible. You can book single sessions or continuous support throughout your medical cycle.",
    faqs: [
      {
        question: "Is everything we discuss kept private?",
        answer: "Yes, absolute confidentiality is guaranteed. Your counselling records are separate and completely private."
      }
    ],
    related: ["ivf", "fertility-testing"]
  }
];
