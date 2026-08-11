{/* Hero Section */}
        <section id="about" className="space-y-6 pt-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            
            {/* الصورة الشخصية */}
            <div className="relative group shrink-0">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <img 
                src="/profile.jpg" 
                alt={personalData.name} 
                className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-2 border-slate-800 shadow-2xl"
              />
            </div>

            {/* تفاصيل النص والبيانات */}
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
