export const content = {
  en: {
    nav: {
      about: "About",
      story: "Story",
      certificates: "Certificates",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    personalData: {
      name: "Saad Ahmed Saad Shurrab",
      age: "22 Years Old",
      title: "Computer Science Student & Technical Operations Support",
      bio: "A Computer Science student at Al-Aqsa University. I combine academic passion for software solutions with practical hands-on experience in customer support, administration, and field logistics. Dedicated to efficiency, adaptability, and creating meaningful impact through technology.",
      location: "Gaza, Al-Rimal, Palestine",
      email: "s421078601@gmail.com",
      phone: "+970593612651",
      whatsapp: "+970593612651",
      company: "Pure Vision Optical Supplies Co.",
      role: "Office Assistant & Logistics Representative",
      companyPeriod: "December 2025 – Present",
      university: "Al-Aqsa University",
      degree: "B.Sc. Computer Science (In Progress)",
      cgpa: "86.40%",
      creditsCompleted: "66 Credit Hours Completed",
      preUniversityEducation: {
        title: "General Secondary Certificate (Tawjihi)",
        stream: "Scientific Stream",
        year: "2022",
        percentage: "78.3%"
      },
      github: "https://github.com/saadshurrab",
      linkedin: "https://ps.linkedin.com/in/saad-ahmed-shurrab-99099841b",
      facebook: "https://www.facebook.com/saad.ahmed.shurrab",
      instagram: "https://www.instagram.com/saad__shurrab/?__pwa=1",
      twitter: "https://x.com/SaadAhmedS1",
      readJourney: "Read My Journey",
      downloadCV: "Download CV",
      education: "Education",
      experience: "Professional Experience",
      workHistory: [
        {
          company: "Open to New Opportunities",
          role: "Customer Service | Hospitality | Administrative & Tech Support",
          period: "Present",
          current: true,
          description: "Ready to join dynamic teams in customer operations, administration, or technical support, bringing adaptable communication skills and strong work ethics."
        },
        {
          role: "Office Assistant & Logistics Representative",
          company: "Pure Vision Optical Supplies Co.",
          period: "December 2025 – September 2026",
          current: false,
          description: "Managed physical order dispatch, stock records, and administrative archiving under challenging operational field environments."
        },
        {
          role: "Bakery Worker",
          company: "Abu Diya Bakery",
          period: "1 week",
          current: false,
          description: "Short-term experience in intense daily operations, providing early perspective on adaptability and hard physical work."
        },
        {
          role: "Shipping Point Operator",
          company: "Local Shipping & Logistics Point",
          period: "1 year",
          current: false,
          description: "Handled package intake, categorization, and distribution logistics prior to joining Pure Vision Co."
        },
        {
          role: "Fire Suppression Equipment Technician",
          company: "Al-Ghusein Co. for Monitoring & Fire Extinguishing Systems",
          period: "1 year (during displacement)",
          current: false,
          description: "Gained foundational hands-on technical skills servicing safety and fire suppression systems under challenging conditions."
        }
      ]
    },
    storyData: {
      badge: "A Story of Resilience & Growth",
      title: "Turning Friction into Systems",
      subtitle: "How field challenges shaped a developer's perspective on practical problem-solving.",
      paragraphs: [
        {
          heading: "Facing Challenges and Rebuilding",
          text: "When difficult circumstances led to the loss of my laptop, my academic and programming journey came to a sudden halt. Refusing to give up, I took to the field as an administrative assistant and delivery representative at Pure Vision Optics Company. Long working hours and daily field effort to secure a new device became a true test of patience and determination to succeed."
        },
        {
          heading: "Turning Struggles into Technical Vision",
          text: "While manually tracking orders and operations on paper, I experienced firsthand the inefficiency and delays of traditional systems. This expanded my perspective on programming—it was no longer just about writing code, but a real-world tool to resolve operational bottlenecks. Driven by this realization, I designed an internal management system for the company to eliminate paper logs and fully automate workflow processes."
        },
        {
          heading: "Code is a Tool; Persistence is the Engine",
          text: "This field-driven perspective extended into my academic life. Noticing my classmates struggling to keep track of schedules and coursework, I developed a fully automated Telegram bot to assist them and organize their daily routines. The lesson from my journey is that tools and technologies are always available, but the true difference lies in persistence and a deep understanding of people’s real-world needs."
        }
      ]
    },
    certificatesData: {
      title: "Certifications & Accreditation",
      subtitle: "Verified professional training, technical credentials, and academy completion certificates.",
      clickEnlarge: "Click to enlarge",
      items: [
        {
          title: "International Computer Driving License (ICDL)",
          issuer: "Learn More Institute for Training and Development",
          accreditation: "Canadian Board (Reg No. 56009111acc) & ISO 21001",
          duration: "20 Training Hours (21/12/2025 – 15/01/2026)",
          description: "Comprehensive practical training covering essential computer application skills, digital communication, and office automation tools.",
          badge: "Certified",
          image: "/icdl.jpg"
        },
        {
          title: "Certificate of Attendance – The Bit Course",
          issuer: "Torino Academy (TA)",
          trainer: "Shady Said (International Trainer)",
          type: "Virtual Training",
          description: "Professional training focusing on foundational business strategies and network marketing fundamentals.",
          badge: "Attendance",
          image: "/bit-course.jpg"
        },
        {
          title: "One Million Prompters – Certificate of Completion",
          issuer: "Dubai Future Foundation & Dubai Centre for Artificial Intelligence",
          accreditation: "Dubai Universal Blueprint for Artificial Intelligence",
          description: "Successfully completed the One Million Prompters initiative launched by His Highness Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum, Crown Prince of Dubai, developing prompt engineering skills for AI systems and contributing to building a future-ready workforce.",
          badge: "Completed",
          image: "/prompters-certificate.jpg"
        }
      ]
    },
    projectsData: {
      title: "Technical Projects",
      subtitle: "Systems and software developed from field observations and academic needs.",
      items: [
        {
          title: "Academic Task & Schedule Telegram Bot",
          subtitle: "Independent Project (Early 2026)",
          description: "Designed and implemented a custom Telegram bot to resolve exam schedule tracking, assignment deadline synchronization, and academic notifications for university peers.",
          highlights: [
            "Built custom command handlers and automated notification logic from scratch using Python",
            "Integrated database management to structure task deadlines across multiple course sections",
            "Created a daily automated utility actively serving peer academic needs"
          ],
          tags: ["Python", "Telegram API", "SQL", "Automation", "Scheduling Logic"],
          links: [
            { label: "Open in Telegram", url: "https://t.me/alaqsamoodle_bot", type: "telegram" }
          ]
        },
        {
          title: "Pure Vision Optical Supplies — Internal Management System",
          subtitle: "Internal Business Platform (2025)",
          description: "An internal management platform built for Pure Vision Optical Supplies Co. to handle inventory tracking, order processing, and client records for daily company operations — not a public-facing website.",
          highlights: [
            "Built inventory tracking to replace manual, paper-based stock records",
            "Implemented order management workflows from intake to fulfillment",
            "Structured a client records system for the company's daily operations"
          ],
          tags: ["React", "Node.js", "Database", "Inventory Management", "Internal Tools"],
          links: [
            { label: "Visit Website", url: "https://pure-vision.onrender.com/", type: "external" }
          ]
        },
        {
          title: "Optical Center Management System — The Italian Center",
          subtitle: "Full-Stack Management Platform (2025)",
          description: "An integrated management system for an optical center handling inventory, orders, clients, appointments, and daily operations with a comprehensive dashboard interface.",
          highlights: [
            "Built a complete management dashboard for optical center daily operations",
            "Implemented inventory tracking, client management, and appointment scheduling",
            "Designed normalized database schema for efficient data handling"
          ],
          tags: ["React", "Node.js", "Database", "Full-Stack", "Management System"],
          links: [
            { label: "Visit Website", url: "https://the-italian-center-1.onrender.com/", type: "external" }
          ]
        }
      ]
    },
    skillsData: {
      title: "Core Skills & Capabilities",
      subtitle: "Technical proficiencies, database systems, and field operations expertise.",
      languagesTitle: "Languages",
      categories: [
        {
          category: "Programming & Core CS",
          items: ["C++", "Python", "Data Structures", "Systems Architecture", "Problem Solving", "Algorithm Fundamentals"]
        },
        {
          category: "Database Systems",
          items: ["Oracle APEX", "SQL / Quick SQL", "Relational Database Schema Design", "Query Optimization"]
        },
        {
          category: "Operations & Professional Tools",
          items: ["ICDL Certified", "Customer Service & Hospitality", "Logistics Operations", "Git & GitHub", "Microsoft Office", "Field Coordination"]
        }
      ],
      languages: [
        { name: "Arabic", level: "Native" },
        { name: "English", level: "Intermediate / Technical Proficiency" }
      ]
    },
    contactData: {
      title: "Get In Touch",
      subtitle: "Available for phone calls, direct contact, administrative support roles, and software projects.",
      callDirect: "Direct Call",
      whatsappText: "WhatsApp",
      linkedin: "LinkedIn Profile",
      github: "GitHub Profile",
      facebook: "Facebook Profile",
      instagram: "Instagram Profile",
      twitter: "X (Twitter) Profile"
    },
    notFoundData: {
      code: "404",
      title: "Page Not Found",
      subtitle: "The page you're looking for doesn't exist or may have been moved.",
      backHome: "Back to Home"
    },
    meta: {
      titleSuffix: "Saad Shurrab",
      about: { title: "Saad Shurrab — About", description: "Computer Science student and technical operations assistant." },
      story: { title: "Saad Shurrab — Story", description: "The resilience and systems journey behind Saad Shurrab's technical work." },
      certificates: { title: "Saad Shurrab — Certificates", description: "Verified professional training and technical credentials." },
      projects: { title: "Saad Shurrab — Projects", description: "Systems and software built from field observations and academic needs." },
      skills: { title: "Saad Shurrab — Skills", description: "Programming, database systems, and technical operations expertise." },
      contact: { title: "Saad Shurrab — Contact", description: "Get in touch for academic opportunities and professional collaborations." }
    }
  },
  ar: {
    nav: {
      about: "نبذة عني",
      story: "قصتي",
      certificates: "الشهادات",
      projects: "المشاريع",
      skills: "المهارات",
      contact: "التواصل"
    },
    personalData: {
      name: "سعد أحمد سعد شراب",
      age: "22 عاماً",
      title: "طالب علوم حاسوب وخدمات دعم وإدارة تقنية",
      bio: "طالب علوم حاسوب في السنة الثانية بجامعة الأقصى . أجمع بين الشغف بالأكاديمية والحلول البرمجية، والخبرة الميدانية في خدمة العملاء، الدعم الإداري، والعمل اللوجستي. أتميز بالقدرة على التكيف، التواصل الفعال، وتحويل التحديات الميدانية إلى حلول عملية.",
      location: "غزة، الرمال، فلسطين",
      email: "s421078601@gmail.com",
      phone: "+970593612651",
      whatsapp: "+970593612651",
      company: "شركة الرؤية النقية لمستلزمات مراكز البصريات",
      role: "مساعد إداري ولوجستي ومندوب توصيل",
      companyPeriod: "ديسمبر 2025 – سبتمبر 2026",
      university: "جامعة الأقصى 2022 - الان",
      degree: "بكالوريوس علوم الحاسوب (مستمر)",
      cgpa: "86.40%",
      creditsCompleted: "تم إنجاز 66 ساعة معتمدة",
      preUniversityEducation: {
        title: "الثانوية العامة (التوجيهي)",
        stream: "الفرع العلمي",
        year: "2022",
        percentage: "78.3%"
      },
      github: "https://github.com/saadshurrab",
      linkedin: "https://ps.linkedin.com/in/saad-ahmed-shurrab-99099841b",
      facebook: "https://www.facebook.com/saad.ahmed.shurrab",
      instagram: "https://www.instagram.com/saad__shurrab/?__pwa=1",
      twitter: "https://x.com/SaadAhmedS1",
      readJourney: "اقرأ مسيرتي",
      downloadCV: "تحميل السيرة الذاتية",
      education: "التعليم الأكاديمي",
      experience: "الخبرة المهنية",
      workHistory: [
        {
          company: "متاح لفرص عمل جديدة",
          role: "خدمة العملاء | الضيافة والاستقبال | الدعم الإداري والتقني",
          period: "الآن",
          current: true,
          description: "متاح فوراً للانضمام إلى فرق عمل في مجالات خدمة العملاء، الإدارة، والدعم التقني، مع الجاهزية لتقديم أفضل أداء واستثمار مهارات التواصل والتنظيم."
        },
        {
          role: "مساعد إداري ولوجستي ومندوب توصيل",
          company: "شركة الرؤية النقية لمستلزمات مراكز البصريات",
          period: "ديسمبر 2025 - سبتمبر 2026",
          current: false,
          description: "إدارة التوصيل الميداني، تنظيم سجلات الطلبات، والأرشفة الإدارية للشركة في ظل الظروف التشغيلية الصعبة."
        },
        {
          role: "عامل مخبز",
          company: "مخبز أبو دية",
          period: "أسبوع واحد",
          current: false,
          description: "تجربة عمل ميدانية مكثفة أكسبتني تقدير الانضباط والمرونة في التعامل مع أجواء العمل الشاقة."
        },
        {
          role: "عامل في نقطة شحن",
          company: "نقطة شحن ولوجستيات محلية",
          period: "سنة واحدة",
          current: false,
          description: "تولى استلام وفرز وتنسيق الشحنات بنقطة شحن محلية لمدة سنة قبل الانتقال إلى شركة الرؤية النقية."
        },
        {
          role: "فني تجهيز معدات إطفاء",
          company: "شركة الغصين لأنظمة المراقبة والإطفاء",
          period: "سنة واحدة (خلال فترة النزوح)",
          current: false,
          description: "الخبرة المهنية الأولى، وتضمنت تجهيز وصيانة أجهزة الإطفاء ومعدات السلامة العامة في ظروف استثنائية."
        }
      ]
    },
    storyData: {
      badge: "قصة إصرار وبناء",
      title: "من الصعوبات الميدانية إلى بناء الأنظمة",
      subtitle: "كيف صقلت الظروف والتحديات رؤيتي في حل المشكلات التقنية.",
      paragraphs: [
        {
          heading: "المواجهة وإعادة البناء",
          text: "عندما أدت الظروف الصعبة إلى فقدان جهازي المحمول، توقفت مسيرتي الأكاديمية والبرمجية بشكل مفاجئ. لم أستسلم للواقع، فنَزَلت إلى الميدان للعمل كمساعد إداري ومندوب توصيل في شركة الرؤية النقية كانت ساعات العمل الطويلة والجهد الميداني اليومي لتأمين جهاز جديد بمثابة اختبار حقيقي للصبر الشديد والرغبة الصادقة في النجاح"
        },
        {
          heading: "تحويل المعاناة إلى رؤية تقنية",
          text: "أثناء متابعتي للطلبيات والعمليات يدوياً على الورق، لمست بنفسي حجم البطء وضياع الوقت في الأنظمة التقليدية. هنا اتسعت رؤيتي للبرمجة؛ فلم تعد مجرد كتابة شفرات، بل أداة حقيقية لفك الاختناقات الميدانية. قادني هذا الإدراك لتصميم نظام إدارة داخلي للشركة يلغي السجلات الورقية ويُؤتمت العمليات بالكامل"
        },
        {
          heading: "البرمجة أداة.. والإصرار هو المحرك",
          text: "امتدت هذه الرؤية الميدانية إلى حياتي الأكاديمية؛ فعندما لاحظت تشتت زملائي في متابعة المواعيد والمهام الدراسية، قمت بتطوير بوت تليجرام مؤتمت بالكامل لخدمتهم وتنظيم جدولهم. العبرة من رحلتي هي أن الأدوات والتقنيات متوفرة دائماً، لكن الفارق الحقيقي يكمن في الإصرار، والفهم العميق لاحتياجات الناس الواقعية."
        }
      ]
    },
    certificatesData: {
      title: "الشهادات والاعتمادات",
      subtitle: "شهادات تدريبية معتمدة ومؤهلات تقنية أكاديمية.",
      clickEnlarge: "انقر للتكبير",
      items: [
        {
          title: "الرخصة الدولية لقيادة الحاسوب (ICDL)",
          issuer: "مركز Learn More للتدريب والتطوير",
          accreditation: "البورد الكندي (Reg No. 56009111acc) & ISO 21001",
          duration: "20 ساعة تدريبية (21/12/2025 – 15/01/2026)",
          description: "تدريب عملي شامل يغطي مهارات تطبيقات الحاسوب الأساسية، الاتصالات الرقمية، وأدوات أتمتة المكاتب.",
          badge: "شهادة معتمدة",
          image: "/icdl.jpg"
        },
        {
          title: "شهادة حضور – كورس Bit",
          issuer: "أكاديمية تورينو (TA)",
          trainer: "شادي سعيد (مدرب دولي)",
          type: "تدريب افتراضي",
          description: "تدريب احترافي يركز على أساسيات استراتيجيات الأعمال والتسويق الشبكي.",
          badge: "حضور",
          image: "/bit-course.jpg"
        },
        {
          title: "مليون خبير أوامر — شهادة إتمام",
          issuer: "مؤسسة دبي للمستقبل ومركز دبي للاستخدامات الذكاء الاصطناعي",
          accreditation: "منظومة دبي الشاملة للذكاء الاصطناعي",
          description: "إتمام مبادرة مليون خبير أوامر (1 Million Prompters) التي أطلقها صاحب السمو الشيخ حمدان بن محمد بن راشد آل مكتوم، ولي عهد دبي، لتطوير مهارات هندسة الأوامر (Prompt Engineering) لأنظمة الذكاء الاصطناعي والمساهمة في بناء كوادر جاهزة للمستقبل.",
          badge: "مكتملة",
          image: "/prompters-certificate.jpg"
        }
      ]
    },
    projectsData: {
      title: "المشاريع التقنية",
      subtitle: "أنظمة وبرمجيات تم تطويرها بناءً على الملاحظات الميدانية والاحتياجات الأكاديمية.",
      items: [
        {
          title: "بوت التليجرام للمهام والجدول الأكاديمي",
          subtitle: "مشروع مستقل (بداية 2026)",
          description: "تطوير بوت تليجرام مخصص لحل مشكلة تتبع جدول الامتحانات وتزامن المواعيد النهائية للتكليفات الأكاديمية للطلاب.",
          highlights: [
            "بناء معالجات الأوامر والمنطق التلقائي للتنبيهات من الصفر باستخدام Python",
            "ربط قاعدة بيانات لتنظيم مواعيد المهام عبر المساقات الأكاديمية المختلفة",
            "تطوير أداة يومية تخدم الاحتياجات الأكاديمية للزملاء بشكل فعال"
          ],
          tags: ["Python", "Telegram API", "SQL", "Automation", "Scheduling Logic"],
          links: [
            { label: "فتح في تليجرام", url: "https://t.me/alaqsamoodle_bot", type: "telegram" }
          ]
        },
        {
          title: "نظام إدارة داخلي — شركة الرؤية النقية لمستلزمات البصريات",
          subtitle: "منصة إدارة داخلية للشركة (2025)",
          description: "منصة إدارة داخلية لشركة الرؤية النقية لمستلزمات البصريات، لإدارة المخزون ومعالجة الطلبيات وسجلات العملاء ضمن العمليات اليومية للشركة — وليست موقعًا موجهًا للعملاء.",
          highlights: [
            "بناء نظام تتبع مخزون بديل عن السجلات الورقية اليدوية",
            "تنفيذ سير عمل لإدارة الطلبيات من الاستلام حتى التسليم",
            "تنظيم سجلات عملاء لخدمة العمليات اليومية للشركة"
          ],
          tags: ["React", "Node.js", "قاعدة بيانات", "إدارة المخزون", "أدوات داخلية"],
          links: [
            { label: "زيارة الموقع", url: "https://pure-vision.onrender.com/", type: "external" }
          ]
        },
        {
          title: "نظام الإدارة المتكامل لمركز البصريات",
          subtitle: "منصة إدارة متكاملة (2025)",
          description: "نظام إدارة متكامل لمركز بصريات يتعامل مع المخزون، الطلبيات، العملاء، المواعيد والعمليات اليومية مع لوحة تحكم شاملة.",
          highlights: [
            "بناء لوحة تحكم إدارية شاملة لعمليات المركز اليومية",
            "تنفيذ تتبع المخزون، إدارة العملاء، وجدولة المواعيد",
            "تصميم مخطط قاعدة بيانات منظم لمعالجة البيانات بكفاءة"
          ],
          tags: ["React", "Node.js", "قاعدة بيانات", "Full-Stack", "نظام إدارة"],
          links: [
            { label: "زيارة الموقع", url: "https://the-italian-center-1.onrender.com/", type: "external" }
          ]
        }
      ]
    },
    skillsData: {
      title: "المهارات والقدرات الأساسية",
      subtitle: "الخبرات البرمجية، أنظمة قواعد البيانات، والمهارات اللوجستية الميدانية.",
      languagesTitle: "اللغات",
      categories: [
        {
          category: "البرمجة وأساسيات الحاسوب",
          items: ["C++", "Python", "Data Structures", "Systems Architecture", "Problem Solving", "Algorithm Fundamentals"]
        },
        {
          category: "أنظمة قواعد البيانات",
          items: ["Oracle APEX", "SQL / Quick SQL", "Relational Database Schema Design", "Query Optimization"]
        },
        {
          category: "المهارات والعمليات الإدارية",
          items: ["ICDL Certified", "خدمة العملاء والضيافة", "العمليات اللوجستية", "Git & GitHub", "Microsoft Office", "التنسيق الميداني"]
        }
      ],
      languages: [
        { name: "العربية", level: "اللغة الأم" },
        { name: "الإنجليزية", level: "مستوى متوسط / إتقان تقني" }
      ]
    },
    contactData: {
      title: "تواصل معي",
      subtitle: "مرحب بالاتصال الهاتفي المباشر، والفرص الأكاديمية والمهنية في خدمة العملاء والدعم التقني.",
      callDirect: "الاتصال المباشر",
      whatsappText: "واتساب",
      linkedin: "LinkedIn",
      github: "GitHub",
      facebook: "فيسبوك",
      instagram: "انستغرام",
      twitter: "منصة X (تويتر)"
    },
    notFoundData: {
      code: "404",
      title: "الصفحة غير موجودة",
      subtitle: "الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها.",
      backHome: "العودة للصفحة الرئيسية"
    },
    meta: {
      titleSuffix: "سعد شراب",
      about: { title: "سعد شراب — نبذة عني", description: "طالب علوم حاسوب وخدمات دعم وإدارة." },
      story: { title: "سعد شراب — قصتي", description: "رحلة الصمود وبناء الأنظمة وراء العمل التقني لسعد شراب." },
      certificates: { title: "سعد شراب — الشهادات", description: "شهادات تدريبية معتمدة ومؤهلات تقنية." },
      projects: { title: "سعد شراب — المشاريع", description: "أنظمة وبرمجيات تم تطويرها بناءً على الملاحظات الميدانية والاحتياجات الأكاديمية." },
      skills: { title: "سعد شراب — المهارات", description: "البرمجة، أنظمة قواعد البيانات، والخبرة التقنية والإدارية." },
      contact: { title: "سعد شراب — التواصل", description: "تواصل معي للفرص الأكاديمية والتعاون في العمل والبرمجيات." }
    }
  }
};
