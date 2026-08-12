import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Cpu, 
  Terminal, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Briefcase, 
  Building2, 
  GraduationCap, 
  Award, 
  Globe, 
  Calendar, 
  Compass, 
  Sparkles, 
  Flame, 
  BadgeCheck, 
  Maximize2, 
  X,
  Languages,
  Download
} from 'lucide-react';
import { content } from './data';

const pageVariants = {
  initial: { opacity: 0, y: 15, scale: 0.99 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] } },
  exit: { opacity: 0, y: -15, scale: 0.99, transition: { duration: 0.2, ease: 'easeInOut' } }
};

// --- About Page ---
function AboutPage({ t }) {
  const p = t.personalData;
  return (
    <motion.section variants={pageVariants} initial="initial" animate="animate" exit="exit" className="space-y-8 pt-2">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <motion.div 
          whileHover={{ scale: 1.04, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="relative group shrink-0"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-50 group-hover:opacity-80 transition duration-300"></div>
          <img 
            src="/profile.jpg" 
            alt={p.name} 
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-2 border-slate-800 shadow-2xl"
          />
        </motion.div>

        <div className="space-y-4 text-center md:text-left rtl:md:text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            {p.title}
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-50">
            {p.name}
          </h1>

          <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
            {p.bio}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start rtl:md:justify-start items-center gap-4 text-xs font-mono text-slate-400 pt-1">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> {p.location}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-400" /> {p.dob}</span>
          </div>

          <div className="pt-3 flex flex-wrap justify-center md:justify-start rtl:md:justify-start items-center gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/story" className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-colors shadow-lg shadow-cyan-500/20 text-sm inline-flex items-center gap-2">
                <Flame className="w-4 h-4" /> {p.readJourney}
              </Link>
            </motion.div>

            {/* زر تنزيل السيرة الذاتية PDF */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a 
                href="/cv.pdf" 
                download="Saad_Shurrab_CV.pdf"
                className="px-5 py-2.5 rounded-lg bg-slate-900 border border-cyan-500/40 hover:border-cyan-400 hover:bg-slate-800 text-cyan-400 font-medium transition-colors text-sm inline-flex items-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4 animate-bounce" /> {p.downloadCV || (t.nav.about === 'نبذة عني' ? 'تحميل السيرة الذاتية' : 'Download CV')}
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/projects" className="px-5 py-2.5 rounded-lg border border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-slate-300 font-medium transition-colors text-sm inline-block">
                {p.viewProjects}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="pt-6 border-t border-slate-800/80 space-y-4">
        <div className="flex items-center gap-3">
          <GraduationCap className="w-6 h-6 text-cyan-400" />
          <h2 className="text-xl font-bold text-slate-100">{p.education}</h2>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h3 className="font-bold text-slate-100 text-base">{p.degree}</h3>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-800/50 px-2.5 py-1 rounded-md w-fit">
              2023 – Present
            </span>
          </div>
          <p className="text-xs font-mono text-slate-300">{p.university} — CGPA: <span className="text-cyan-400 font-bold">{p.cgpa}</span></p>
          <p className="text-xs text-slate-400">{p.creditsCompleted}</p>
        </div>
      </div>

      {/* Experience */}
      <div className="pt-6 border-t border-slate-800/80 space-y-4">
        <div className="flex items-center gap-3">
          <Briefcase className="w-6 h-6 text-cyan-400" />
          <h2 className="text-xl font-bold text-slate-100">{p.experience}</h2>
        </div>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <Building2 className="w-5 h-5 text-cyan-400 shrink-0" />
              <h3 className="font-bold text-slate-100 text-base">{p.company}</h3>
            </div>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-800/50 px-2.5 py-1 rounded-md w-fit">
              {p.companyPeriod}
            </span>
          </div>
          <p className="text-xs font-mono text-slate-300">{p.role}</p>
          <p className="text-xs text-slate-400 leading-relaxed">
            {p.expDesc}
          </p>
        </div>
      </div>
    </motion.section>
  );
}

// --- Story Page ---
function StoryPage({ t }) {
  const s = t.storyData;
  return (
    <motion.section variants={pageVariants} initial="initial" animate="animate" exit="exit" className="space-y-8">
      <div className="space-y-2 border-b border-slate-800/80 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-2">
          <Sparkles className="w-3.5 h-3.5" /> {s.badge}
        </div>
        <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
          <Compass className="w-7 h-7 text-cyan-400" /> {s.title}
        </h2>
        <p className="text-slate-400 text-sm">{s.subtitle}</p>
      </div>

      <div className="space-y-6">
        {s.paragraphs.map((p, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-3 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 rtl:left-auto rtl:right-0 w-1 h-full bg-cyan-500 group-hover:bg-cyan-400 transition-colors" />
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">0{idx + 1}.</span> {p.heading}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed pl-2 rtl:pl-0 rtl:pr-2">
              {p.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// --- Certificates Page ---
function CertificatesPage({ t }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const c = t.certificatesData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <motion.section variants={pageVariants} initial="initial" animate="animate" exit="exit" className="space-y-8">
      <div className="space-y-2 border-b border-slate-800/80 pb-4">
        <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
          <Award className="w-7 h-7 text-cyan-400" /> {c.title}
        </h2>
        <p className="text-slate-400 text-sm">{c.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {c.items.map((cert, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col justify-between p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-4 hover:border-cyan-500/40 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <BadgeCheck className="w-6 h-6 text-cyan-400 shrink-0" />
                  <h3 className="text-base font-bold text-slate-100 leading-snug">{cert.title}</h3>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-800/50 px-2.5 py-1 rounded-md shrink-0">
                  {cert.badge}
                </span>
              </div>

              {cert.image && (
                <div 
                  onClick={() => setSelectedImage(cert.image)}
                  className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-colors my-3"
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-cyan-400 text-xs font-mono">
                    <Maximize2 className="w-4 h-4" /> {c.clickEnlarge}
                  </div>
                </div>
              )}

              <div className="space-y-1 text-xs font-mono text-slate-300">
                <p><strong className="text-slate-200">Issuer:</strong> {cert.issuer}</p>
                {cert.accreditation && <p className="text-cyan-400/90"><strong className="text-slate-200">Accreditation:</strong> {cert.accreditation}</p>}
                {cert.duration && <p><strong className="text-slate-200">Duration:</strong> {cert.duration}</p>}
                {cert.trainer && <p><strong className="text-slate-200">Trainer:</strong> {cert.trainer}</p>}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed pt-1">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center cursor-default" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 rtl:right-auto rtl:left-0 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={selectedImage} 
                alt="Certificate Full View" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg border border-slate-800 shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

// --- Projects Page ---
function ProjectsPage({ t }) {
  const pr = t.projectsData;
  return (
    <motion.section variants={pageVariants} initial="initial" animate="animate" exit="exit" className="space-y-8">
      <div className="space-y-2 border-b border-slate-800/80 pb-4">
        <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
          <Code2 className="w-7 h-7 text-cyan-400" /> {pr.title}
        </h2>
        <p className="text-slate-400 text-sm">{pr.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {pr.items.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="text-lg font-bold text-slate-100">{project.title}</h3>
              <span className="text-xs font-mono text-cyan-400">{project.subtitle}</span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>

            <ul className="space-y-2 pt-1">
              {project.highlights.map((h, i) => (
                <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// --- Skills Page ---
function SkillsPage({ t }) {
  const sk = t.skillsData;
  return (
    <motion.section variants={pageVariants} initial="initial" animate="animate" exit="exit" className="space-y-8">
      <div className="space-y-2 border-b border-slate-800/80 pb-4">
        <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
          <Cpu className="w-7 h-7 text-cyan-400" /> {sk.title}
        </h2>
        <p className="text-slate-400 text-sm">{sk.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sk.categories.map((group, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/60 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-800/50 text-cyan-400">
                {idx === 0 ? <Code2 className="w-5 h-5" /> : idx === 1 ? <Database className="w-5 h-5" /> : <Award className="w-5 h-5" />}
              </div>
              <h3 className="font-semibold text-slate-200 text-sm">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, iIdx) => (
                <span key={iIdx} className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/50 text-xs font-mono text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-6 border-t border-slate-800/80 space-y-4">
        <div className="flex items-center gap-3">
          <Globe className="w-6 h-6 text-cyan-400" />
          <h2 className="text-xl font-bold text-slate-100">{sk.languagesTitle}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sk.languages.map((lang, lIdx) => (
            <div key={lIdx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-center justify-between">
              <span className="font-semibold text-slate-200 text-sm">{lang.name}</span>
              <span className="text-xs font-mono text-cyan-400">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// --- Contact Page ---
function ContactPage({ t }) {
  const p = t.personalData;
  const ct = t.contactData;
  const whatsappNumber = p.phone.replace(/[^0-9]/g, '');
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(p.email)}`;

  return (
    <motion.section variants={pageVariants} initial="initial" animate="animate" exit="exit" className="space-y-8">
      <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800 space-y-6 shadow-xl">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-slate-100">{ct.title}</h2>
          <p className="text-slate-400 text-sm">{ct.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-sm">
          <a href={gmailWebUrl} target="_blank" rel="noopener noreferrer" className="p-5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 transition-colors flex items-center gap-3 group">
            <Mail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="text-slate-300 group-hover:text-cyan-400 transition-colors text-xs sm:text-sm truncate">{p.email}</span>
          </a>

          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="p-5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 transition-colors flex items-center gap-3 group">
            <Phone className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="text-slate-300 group-hover:text-cyan-400 transition-colors text-xs sm:text-sm">{p.phone}</span>
          </a>

          <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="p-5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 transition-colors flex items-center gap-3 group">
            <Linkedin className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="text-slate-300 group-hover:text-cyan-400 transition-colors text-xs sm:text-sm">{ct.linkedin}</span>
          </a>

          <a href={p.github} target="_blank" rel="noopener noreferrer" className="p-5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 transition-colors flex items-center gap-3 group">
            <Github className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="text-slate-300 group-hover:text-cyan-400 transition-colors text-xs sm:text-sm">{ct.github}</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}

function App() {
  const location = useLocation();
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = content[lang];

  const navLinks = [
    { name: t.nav.about, path: '/' },
    { name: t.nav.story, path: '/story' },
    { name: t.nav.certificates, path: '/certificates' },
    { name: t.nav.projects, path: '/projects' },
    { name: t.nav.skills, path: '/skills' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950 flex flex-col justify-between overflow-x-hidden ${lang === 'ar' ? 'rtl' : 'ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
          <Link to="/" className="flex items-center gap-2 font-mono group py-1 shrink-0">
            <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="text-base sm:text-lg font-bold tracking-wider text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.7)] group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,1)] transition-all duration-300">
              Saad Shurrab<span className="text-blue-500 font-extrabold animate-pulse">.dev</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 overflow-hidden">
            <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium overflow-x-auto no-scrollbar py-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                      isActive ? 'text-cyan-400 font-semibold' : 'text-slate-400 hover:text-cyan-300'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute inset-0 bg-cyan-950/60 border border-cyan-800/50 rounded-md -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-md bg-slate-900 border border-slate-700/60 text-cyan-400 hover:bg-slate-800 hover:border-cyan-500/50 transition-colors text-xs font-mono flex items-center gap-1.5 shrink-0"
              title="Switch Language"
            >
              <Languages className="w-4 h-4" />
              <span>{lang === 'en' ? 'عربي' : 'EN'}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10 my-auto">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AboutPage t={t} />} />
            <Route path="/story" element={<StoryPage t={t} />} />
            <Route path="/certificates" element={<CertificatesPage t={t} />} />
            <Route path="/projects" element={<ProjectsPage t={t} />} />
            <Route path="/skills" element={<SkillsPage t={t} />} />
            <Route path="/contact" element={<ContactPage t={t} />} />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="border-t border-slate-800/60 py-6 text-center text-xs font-mono text-slate-500 relative z-10">
        © {new Date().getFullYear()} {t.personalData.name}. Built with React & Framer Motion.
      </footer>
    </div>
  );
}

export default App;
