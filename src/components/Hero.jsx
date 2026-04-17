export default function Hero() {
  const techs = ["React", "Tailwind", "Node.js", "Vite", "JavaScript"];

  return (
    <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold text-blue-700 bg-blue-50 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            TERSEDIA UNTUK PROYEK BARU
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] text-slate-900 tracking-tighter">
            Membangun <span className="text-blue-600">Masa Depan</span> Digital.
          </h1>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-lg">
            Halo! Saya seorang developer yang berfokus pada pembuatan antarmuka web yang bersih, cepat, dan modern.
          </p>
          <div className="mt-10 flex gap-4">
            <a href="#projects" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition shadow-xl shadow-blue-200">
              Lihat Projek
            </a>
          </div>
          
          <div className="mt-16">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">TECH STACK UTAMA</p>
            <div className="flex flex-wrap gap-4 font-bold text-slate-800">
              {techs.map(t => <span key={t} className="px-3 py-1 border border-slate-100 rounded-lg text-sm bg-slate-50">{t}</span>)}
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-[400px] aspect-square bg-blue-600 rounded-[3rem] animate-float overflow-hidden rotate-3 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" 
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}