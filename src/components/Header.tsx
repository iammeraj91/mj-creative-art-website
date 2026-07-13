import { Sparkles, Palette, Download } from "lucide-react";

interface HeaderProps {
  onShowExporter?: () => void;
}

export default function Header({ onShowExporter }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-orange-50/50 py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-[#FF8A65] text-white flex items-center justify-center font-fredoka font-bold text-xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            MJ
          </div>
          <div>
            <h1 className="font-fredoka text-lg md:text-xl font-bold text-[#2D2D2D] tracking-tight flex items-center gap-1">
              MJ Creative Art
              <span className="text-[#FF8A65] text-xs">✨</span>
            </h1>
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider -mt-1">
              Digital Coloring Books
            </p>
          </div>
        </a>

        {/* Navigation Menu Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-fredoka text-slate-600">
          <a href="#coloring-books" className="hover:text-[#FF8A65] transition-colors duration-200 font-semibold">
            Coloring Books
          </a>
          <a href="#coloring-station" className="hover:text-[#FF8A65] transition-colors duration-200 font-semibold flex items-center gap-1">
            <Palette size={14} className="text-[#FF8A65]" />
            Coloring Station
          </a>
          <a href="#freebie" className="hover:text-[#FF8A65] transition-colors duration-200 font-semibold">
            Free Pages
          </a>
          <a href="#faq" className="hover:text-[#FF8A65] transition-colors duration-200 font-semibold">
            FAQs
          </a>
        </nav>

        {/* Action Button - Exporter & Download link */}
        <div className="flex items-center gap-2">
          {onShowExporter && (
            <button
              onClick={onShowExporter}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-fredoka text-xs md:text-sm font-bold rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              <Download size={15} />
              Save Offline HTML
            </button>
          )}
          <a
            href="#coloring-books"
            className="px-4 py-2 border-2 border-[#FF8A65]/20 hover:border-[#FF8A65] text-[#FF8A65] font-fredoka text-xs md:text-sm font-bold rounded-2xl transition-all duration-300"
          >
            Shop Now
          </a>
        </div>

      </div>
    </header>
  );
}
