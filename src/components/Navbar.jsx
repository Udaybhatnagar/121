import { Globe, Phone, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0c10]/80 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-2 font-black text-xl">
          <div className="w-9 h-9 bg-cyan-500 rounded-xl flex items-center justify-center text-black">
            <Globe size={20} />
          </div>
          121DEVELOPER
        </div>

        <div className="hidden lg:flex gap-8 text-xs uppercase tracking-widest font-bold text-gray-400">
          {["Home", "Services", "Blog", "About", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 text-sm">
            <User size={16} /> Login
          </button>
          <a href="tel:+918882499942" className="px-5 py-2.5 rounded-full border border-white/10 flex items-center gap-2">
            <Phone size={14} className="text-cyan-400" />
            <span className="hidden md:block text-cyan-400">+91 8882499942</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
