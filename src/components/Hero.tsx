import React, { useState } from "react";
import { Sparkles, ShoppingBag, Edit3, Check, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Hero() {
  const [headline, setHeadline] = useState(
    "MJ Creative Art — Coloring Books for Curious Minds"
  );
  const [isEditing, setIsEditing] = useState(false);
  const [tempHeadline, setTempHeadline] = useState(headline);

  const handleSave = () => {
    if (tempHeadline.trim() !== "") {
      setHeadline(tempHeadline.trim());
    }
    setIsEditing(false);
  };

  const handleReset = () => {
    setHeadline("MJ Creative Art — Coloring Books for Curious Minds");
    setTempHeadline("MJ Creative Art — Coloring Books for Curious Minds");
  };

  return (
    <section className="bg-gradient-to-tr from-[#FFF4F2] via-[#F4F9F9] to-[#F2F5FF] pt-20 pb-24 px-6 relative overflow-hidden">
      
      {/* Playful Floating Decorative Pastel Blobs */}
      <div className="absolute top-12 left-10 w-24 h-24 bg-[#FFD166]/20 rounded-full blur-2xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-16 right-16 w-36 h-36 bg-[#06D6A0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#EF476F]/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Whimsical Floating Coloring Accents */}
      <div className="absolute top-1/4 right-[12%] text-4xl opacity-30 animate-bounce select-none pointer-events-none duration-1000">✨</div>
      <div className="absolute bottom-1/4 left-[8%] text-4xl opacity-20 rotate-12 select-none pointer-events-none">🎨</div>
      <div className="absolute top-1/3 left-[15%] text-3xl opacity-15 -rotate-6 select-none pointer-events-none">🖍️</div>
      <div className="absolute bottom-1/3 right-[10%] text-3xl opacity-20 rotate-45 select-none pointer-events-none">🌸</div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Adorable Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xs border border-orange-100 rounded-full px-4 py-1.5 shadow-xs mb-8 hover:scale-105 transition-all duration-300">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A65] animate-ping" />
          <span className="font-fredoka text-xs font-bold text-slate-600 uppercase tracking-wider">
            Explore Cozy Coloring
          </span>
          <span className="text-orange-400">✨</span>
        </div>

        {/* Playful Editable Headline Area */}
        <div className="max-w-4xl mx-auto mb-6 group relative">
          <AnimatePresence mode="wait">
            {!isEditing ? (
              <motion.div
                key="display"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="relative inline-block"
              >
                <h1 className="font-fredoka text-4xl md:text-6xl lg:text-7xl font-bold text-[#2D2D2D] leading-[1.15] px-4">
                  {headline}
                </h1>
                
                {/* Edit Button overlay on hover */}
                <div className="mt-4 flex justify-center gap-2">
                  <button
                    onClick={() => {
                      setTempHeadline(headline);
                      setIsEditing(true);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#FF8A65] bg-white hover:bg-orange-50 border border-slate-200 hover:border-orange-200 px-3 py-1.5 rounded-full transition-all duration-200 shadow-2xs cursor-pointer"
                    title="Edit custom headline"
                  >
                    <Edit3 size={12} />
                    <span>Edit Headline</span>
                  </button>

                  {headline !== "MJ Creative Art — Coloring Books for Curious Minds" && (
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-slate-600 bg-white hover:bg-slate-100 border border-slate-200 px-2.5 py-1.5 rounded-full transition-all duration-200 shadow-2xs cursor-pointer"
                      title="Reset to placeholder"
                    >
                      <RefreshCw size={11} />
                      <span>Reset</span>
                    </button>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="edit"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white/95 backdrop-blur-md p-6 rounded-3xl border-2 border-[#FF8A65]/30 shadow-lg max-w-2xl mx-auto"
              >
                <label className="block text-slate-600 font-fredoka font-bold text-sm mb-2 text-left">
                  Customize Playful Headline:
                </label>
                <input
                  type="text"
                  value={tempHeadline}
                  onChange={(e) => setTempHeadline(e.target.value)}
                  maxLength={100}
                  className="w-full px-4 py-3 border-2 border-slate-100 rounded-2xl font-fredoka text-lg focus:outline-hidden focus:border-[#FF8A65] text-slate-800"
                  placeholder="Enter headline..."
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSave();
                    if (e.key === "Escape") setIsEditing(false);
                  }}
                />
                <div className="mt-4 flex justify-end gap-2">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border border-slate-200 hover:bg-slate-50 rounded-xl font-fredoka text-sm font-semibold text-slate-500 transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-5 py-2 bg-[#FF8A65] hover:bg-[#ff774e] text-white rounded-xl font-fredoka text-sm font-bold flex items-center gap-1 shadow-xs transition-all cursor-pointer"
                  >
                    <Check size={14} />
                    Apply Changes
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Cozy Subtext about Digital Printable Coloring Books */}
        <p className="text-slate-600 text-base md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          Premium digital printable coloring books designed instantly to spark cozy relaxation, mindfulness, and endless artistic joy.
        </p>

        {/* Etsy and Gumroad CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-14">
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-4 bg-[#F16521] hover:bg-[#d95213] text-white font-fredoka font-bold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={18} />
            <span>Shop on Etsy</span>
          </a>
          
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-4 bg-[#FF90E8] hover:bg-[#ff7be2] text-slate-900 font-fredoka font-bold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Sparkles size={18} className="text-slate-900" />
            <span>Shop on Gumroad</span>
          </a>
        </div>

        {/* Soft Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto bg-white/60 backdrop-blur-xs border border-slate-100 p-6 rounded-[2.5rem] shadow-xs">
          
          <div className="flex flex-col items-center p-3 text-center">
            <div className="w-10 h-10 rounded-full bg-orange-50 text-[#FF8A65] flex items-center justify-center text-lg mb-2">
              📥
            </div>
            <h3 className="font-fredoka font-bold text-slate-700 text-sm">Instant Download</h3>
            <p className="text-slate-400 text-xs mt-0.5">Start coloring in seconds</p>
          </div>

          <div className="flex flex-col items-center p-3 text-center">
            <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-500 flex items-center justify-center text-lg mb-2">
              🖨️
            </div>
            <h3 className="font-fredoka font-bold text-slate-700 text-sm">Easy Home Printing</h3>
            <p className="text-slate-400 text-xs mt-0.5">Print unlimited crisp copies</p>
          </div>

          <div className="flex flex-col items-center p-3 text-center">
            <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center text-lg mb-2">
              📱
            </div>
            <h3 className="font-fredoka font-bold text-slate-700 text-sm">Procreate Ready</h3>
            <p className="text-slate-400 text-xs mt-0.5">Color digitally on iPad</p>
          </div>

          <div className="flex flex-col items-center p-3 text-center">
            <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center text-lg mb-2">
              💖
            </div>
            <h3 className="font-fredoka font-bold text-slate-700 text-sm">Mindful & Calm</h3>
            <p className="text-slate-400 text-xs mt-0.5">Perfect for kids & adults</p>
          </div>

        </div>

      </div>

    </section>
  );
}

