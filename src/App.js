import React from 'react';
import { 
  Code2, 
  Database, 
  Cpu, 
  Terminal, 
  Mail, 
  Phone, 
  MapPin, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';
import { personalData, projectsData, skillsData } from './data';

function App() {
  // تجهيز رقم الهاتف لصيغة رابط الواتساب (بدون مسافات أو إشارة +)
  const whatsappNumber = personalData.phone.replace(/[^0-9]/g, '');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Background Decorative Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-cyan-400 font-semibold text-lg">
            <Terminal className="w-5 h-5" />
            <span>saad_shurrab.dev</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-400 font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24 relative z-10">

        {/* Hero Section */}
        <section id="about" className="space-y-6 pt-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            
            {/* Profile Image */}
            <div className="relative group shrink-0">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <img 
                src="/profile.jpg" 
                alt={personalData.name} 
                className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-2 border-slate-800 shadow-2xl"
              />
            </div>

            {/* Details */}
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                {personalData.title}
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-50">
                {personalData.name}
              </h1>
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                {personalData.bio}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm text-slate-400 font-mono pt-1">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> {personalData.location}</span>
                <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-cyan-400" /> CGPA: {personalData.cgpa} ({personalData.university})</span>
              </div>
              <div className="pt-2 flex flex-wrap justify-center md:justify-start items-center gap-4">
                <a href="#projects" className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-lg shadow-cyan-500/20 text-sm">
                  View Systems & Projects
                </a>
                <a href="#contact" className="px-5 py-2.5 rounded-lg border border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-slate-300 font-medium transition-all text-sm">
                  Get in Touch
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
              <Code2 className="w-6 h-6 text-cyan-400" /> Featured Systems & Projects
            </h2>
            <p className="text-slate-400 text-sm">Engineering solutions designed to solve real operational and academic bottlenecks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">{project.title}</h3>
                    <p className="text-xs font-mono text-cyan-400">{project.subtitle}</p>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>
                  <ul className="space-y-1.5 pt-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Capabilities */}
        <section id="skills" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-cyan-400" /> Technical Capabilities
            </h2>
            <p className="text-slate-400 text-sm">Core fundamentals and technical toolkit.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillsData.map((group, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/60 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-800/50 text-cyan-400">
                    {idx === 0 ? <Code2 className="w-5 h-5" /> : idx === 1 ? <Database className="w-5 h-5" /> : <Cpu className="w-5 h-5" />}
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
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8 pt-8 border-t border-slate-800/80">
          <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-100">Get In Touch</h2>
              <p className="text-slate-400 text-sm">Open to academic opportunities, software engineering collaborations, and technical discussions.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-sm">
              {/* رابط البريد الإلكتروني (يفتح تطبيق الجيميل / الإيميل مباشرة) */}
              <a 
                href={`mailto:${personalData.email}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 transition-all flex items-center gap-3 group"
              >
                <Mail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">{personalData.email}</span>
              </a>

              {/* رابط الواتساب (يفتح المحادثة في تطبيق الواتساب مباشرة) */}
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 transition-all flex items-center gap-3 group"
              >
                <Phone className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">{personalData.phone}</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-800/60 py-6 text-center text-xs font-mono text-slate-500">
        © {new Date().getFullYear()} {personalData.name}. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
