export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-blue-600">MY.DEV</div>
        <ul className="flex gap-10 text-sm font-bold text-slate-600 items-center">
          {/* HREF harus sama dengan ID di App.jsx */}
          <li><a href="#home" className="hover:text-blue-600 transition">HOME</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition">WORK</a></li>
          <li><a href="#contact" className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
}