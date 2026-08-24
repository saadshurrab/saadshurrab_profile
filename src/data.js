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
      title: "Computer Science Student & Technical Operations Assistant",
      bio: "Second-year Computer Science student at Al-Aqsa University with an 86.40% CGPA. Driven by system architectural principles, database optimization, software development, and practical automation.",
      location: "Gaza, Palestine",
      email: "s421078601@gmail.com",
      phone: "+970 593612651",
      dob: "26/10/2004",
      company: "Pure Vision Optical Supplies Co.",
      role: "Office Assistant & Delivery Representative",
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
      viewProjects: "View Projects",
      downloadCV: "Download CV",
      education: "Education",
      experience: "Professional Experience",
      expDesc: "Coordinated field delivery logistics, order record management, and administrative archiving for optical equipment and supplies at Pure Vision Co. under complex operational conditions.",
      workHistory: [
        {
          role: "Available immediately for new roles in Customer Service, Hospitality, and Administrative Support, eager to deliver an exceptional experience and leverage my communication and organizational skills.",
  company: "Seeking New Opportunities: ",
  period: " Present ",
  current: true,
},
        {
          role: "Office Assistant & Delivery Representative",
          company: "Pure Vision Optical Supplies Co.",
          period: "December 2025 – Present",
          current: false,
          description: "Coordinated field delivery logistics, order record management, and administrative archiving for optical equipment and supplies under complex operational conditions."
        },
        {
          role: "Bakery Worker",
          company: "Abu Diya Bakery",
          period: "1 week",
          current: false,
          description: "Short-term production role. Did not continue due to demanding work conditions and high heat exposure."
        },
        {
          role: "Shipping Point Operator",
          company: "Local Shipping & Logistics Point",
          period: "1 year",
          current: false,
          description: "Handled shipment intake, sorting, and coordination at a local shipping point for one year before transitioning to Pure Vision Optical Supplies Co."
        },
        {
          role: "Fire Suppression Equipment Technician",
          company: "Al-Ghusein Co. for Monitoring & Fire Extinguishing Systems",
          period: "1 year (during displacement)",
          current: false,
          description: "First professional role, carried out during displacement. Prepared and serviced fire extinguishing equipment, gaining hands-on technical experience with safety systems under demanding circumstances."
        }
      ]
    },
    storyData: {
      badge: "Motivation & Challenge Story",
      title: "The Resilience & Systems Journey",
      subtitle: "From field logistics under disruption to software architecture and automated systems.",
      paragraphs: [
        {
          heading: "Overcoming Disruption & Rebuilding My Tools",
          text: "During challenging circumstances, losing my primary device meant losing my direct gateway to coding and academic progress. Refusing to let my education halt, I worked in field operations as an Office Assistant and Delivery Representative at Pure Vision Optical Supplies Co. Working full days managing deliveries under failing infrastructure allowed me to secure my tools and resume self-directed computer science coursework."
        },
        {
          heading: "Engineering Insight From Field Operations",
          text: "Tracking order deliveries and inventory manually on paper at Pure Vision revealed how inefficient non-digital systems truly are. Experiencing these operational bottlenecks firsthand, I designed and built an internal management platform for the company — handling inventory tracking, order processing, and client records — replacing the paper-based workflow with a structured database system."
        },
        {
          heading: "Building Practical Solutions",
          text: "Noticing classmates missing crucial academic updates across scattered channels, I designed and coded an automated Academic Telegram Bot using Python and SQL from scratch—managing notification triggers, task tracking, and schedule data across course sections."
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
      subtitle: "Technical proficiencies, database systems, and field logistics expertise.",
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
          category: "Operations & Technical Tools",
          items: ["ICDL Certified", "Logistics Operations", "Git & GitHub", "Microsoft Office", "Field Coordination"]
        }
      ],
      languages: [
        { name: "Arabic", level: "Native" },
        { name: "English", level: "Intermediate / Technical Proficiency" }
      ]
    },
    contactData: {
      title: "Get In Touch",
      subtitle: "Open to academic opportunities, software engineering collaborations, and technical discussions.",
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
      about: { title: "Saad Shurrab — About", description: "Computer Science student and technical operations assistant. Systems architecture, databases, and automation." },
      story: { title: "Saad Shurrab — Story", description: "The resilience and systems journey behind Saad Shurrab's technical work." },
      certificates: { title: "Saad Shurrab — Certificates", description: "Verified professional training and technical credentials." },
      projects: { title: "Saad Shurrab — Projects", description: "Systems and software built from field observations and academic needs." },
      skills: { title: "Saad Shurrab — Skills", description: "Programming, database systems, and technical operations expertise." },
      contact: { title: "Saad Shurrab — Contact", description: "Get in touch for academic opportunities and software engineering collaborations." }
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
      title: "طالب علوم حاسوب ومساعد عمليات تقنية",
      bio: "طالب علوم حاسوب في السنة الثانية بجامعة الأقصى بمعدل تراكمي 86.40%. شغوف بهندسة الأنظمة، تحسين قواعد البيانات، تطوير البرمجيات، والحلول البرمجية المؤتمتة.",
      location: "غزة، فلسطين",
      email: "s421078601@gmail.com",
      phone: "+970 593612651",
      dob: "26/10/2004",
      company: "شركة الرؤية النقية لمستلزمات مراكز البصريات",
      role: "مساعد إداري ولوجستي ومندوب توصيل",
      companyPeriod: "ديسمبر 2025 – الحالي",
      university: "جامعة الأقصى",
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
      viewProjects: "عرض المشاريع",
      downloadCV: "تحميل السيرة الذاتية",
      education: "التعليم الأكاديمي",
      experience: "الخبرة المهنية",
      expDesc: "تنسيق لوجستيات التوصيل الميداني، إدارة سجلات الطلبيات، والأرشفة الإدارية للمعدات والمستلزمات البصرية في شركة الرؤية النقية لمستلزمات مراكز البصريات في ظل ظروف تشغيلية معقدة.",
      workHistory: [
        {
          role: "متاح فوراً للانضمام إلى فريق عمل جديد في مجالات خدمة العملاء والضيافة والأدوار الإدارية، متطلعاً لتقديم تجربة تميز واستثمار مهاراتي في التواصل والتنظيم",
        company: "البحث عن فرص جديدة : ",
          period: " الأن ... ",
           current: true,
          },
        {
          role: "مساعد إداري ولوجستي ومندوب توصيل",
          company: "شركة الرؤية النقية لمستلزمات مراكز البصريات",
          period: "ديسمبر 2025 -  سبتمبر 2026",
          current: false,
          description: "تنسيق لوجستيات التوصيل الميداني، إدارة سجلات الطلبيات، والأرشفة الإدارية للمعدات والمستلزمات البصرية في ظل ظروف تشغيلية معقدة."
        },
        {
          role: "عامل مخبز",
          company: "مخبز أبو دية",
          period: "أسبوع واحد",
          current: false,
          description: "عمل قصير المدة بقسم الإنتاج. لم يستمر بسبب أجواء العمل الصعبة والتعرض العالي للحرارة."
        },
        {
          role: "عامل في نقطة شحن",
          company: "نقطة شحن ولوجستيات محلية",
          period: "سنة واحدة",
          current: false,
          description: "تولى استلام وفرز وتنسيق الشحنات بنقطة شحن محلية لمدة سنة، قبل الانتقال للعمل في شركة الرؤية النقية لمستلزمات البصريات."
        },
        {
          role: "فني تجهيز معدات إطفاء",
          company: "شركة الغصين لأنظمة المراقبة والإطفاء",
          period: "سنة واحدة (خلال فترة النزوح)",
          current: false,
          description: "أول عمل مهني، تم خلال فترة النزوح. تجهيز وصيانة أجهزة الإطفاء، واكتساب خبرة عملية بمعدات السلامة في ظل ظروف صعبة."
        }
      ]
    },
    storyData: {
      badge: "قصة التحدي والإصرار",
      title: "رحلة الصمود وبناء الأنظمة",
      subtitle: "من اللوجستيات الميدانية إلى هندسة البرمجيات والأنظمة المؤتمتة.",
      paragraphs: [
        {
          heading: "تجاوز العقبات وإعادة بناء الأدوات",
          text: "خلال الظروف الصعبة، كان فقدان جهازي المحمول يعني فقدان وسيلتي المباشرة للبرمجة والمتابعة الأكاديمية. ورفضاً لتوقف مسيرتي، عملت في العمليات الميدانية كمساعد إداري ومندوب توصيل في شركة الرؤية النقية لمستلزمات مراكز البصريات. أتاح لي العمل اليومي لتأمين أداة عمل جديدة واستئناف دراسة علوم الحاسوب ذاتياً."
        },
        {
          heading: "رؤية هندسية من واقع العمل الميداني",
          text: "كشف لي تتبع طلبيات التوصيل والمخزون يدوياً على الورق في شركة الرؤية النقية عن مدى ضعف الأنظمة غير الرقمية. من خلال معايشة هذه الاختناقات الميدانية عن قرب، صممت وبنيت منصة إدارة داخلية للشركة — تتولى تتبع المخزون ومعالجة الطلبيات وسجلات العملاء — لتحل محل العمل الورقي اليدوي بنظام قاعدة بيانات منظم."
        },
        {
          heading: "بناء حلول برمجية عملية",
          text: "لاحظت تشتت زملائي في متابعة المواعيد الأكاديمية عبر القنوات المختلفة، فقمت بتصميم وبناء بوت تليجرام أكاديمي باستخدام Python و SQL من الصفر لإدارة التنبيهات، تتبع المهام، وجدول الاختبارات."
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
          duration: "ساعة تدريبية 20 (21/12/2025 – 15/01/2026) ",
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
          category: "العمليات والأدوات التقنية",
          items: ["ICDL Certified", "Logistics Operations", "Git & GitHub", "Microsoft Office", "Field Coordination"]
        }
      ],
      languages: [
        { name: "العربية", level: "اللغة الأم" },
        { name: "الإنجليزية", level: "مستوى متوسط / إتقان تقني" }
      ]
    },
    contactData: {
      title: "تواصل معي",
      subtitle: "مرحبا بالفرص الأكاديمية، التعاون في هندسة البرمجيات، والمناقشات التقنية.",
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
      about: { title: "سعد شراب — نبذة عني", description: "طالب علوم حاسوب ومساعد عمليات تقنية. هندسة الأنظمة، قواعد البيانات، والأتمتة." },
      story: { title: "سعد شراب — قصتي", description: "رحلة الصمود وبناء الأنظمة وراء العمل التقني لسعد شراب." },
      certificates: { title: "سعد شراب — الشهادات", description: "شهادات تدريبية معتمدة ومؤهلات تقنية." },
      projects: { title: "سعد شراب — المشاريع", description: "أنظمة وبرمجيات تم تطويرها بناءً على الملاحظات الميدانية والاحتياجات الأكاديمية." },
      skills: { title: "سعد شراب — المهارات", description: "البرمجة، أنظمة قواعد البيانات، والخبرة التقنية." },
      contact: { title: "سعد شراب — التواصل", description: "تواصل معي للفرص الأكاديمية والتعاون في هندسة البرمجيات." }
    }
  }
};
