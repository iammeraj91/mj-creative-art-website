import React, { useState, useEffect } from "react";
import { Download, Sparkles, Check, Send, Heart, Printer } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FreebieSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Check if they already unlocked it in a previous session
  useEffect(() => {
    const unlocked = localStorage.getItem("mj_freebie_unlocked");
    if (unlocked === "true") {
      setIsUnlocked(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg("Please enter your name!");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address!");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    // Mock API call to simulate saving subscriber
    setTimeout(() => {
      setIsSubmitting(false);
      setIsUnlocked(true);
      localStorage.setItem("mj_freebie_unlocked", "true");
      localStorage.setItem("mj_subscriber_name", name);
      localStorage.setItem("mj_subscriber_email", email);
    }, 1200);
  };

  const handleDownloadPDF = () => {
    // Generate an automatic simple text/SVG bundle and download it as an SVG representing coloring page
    const content = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595 842" width="100%" height="100%">
      <rect width="595" height="842" fill="#FFFFFF"/>
      <g stroke="#2D2D2D" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <!-- Title -->
        <text x="297" y="80" font-family="'Fredoka', sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="#2D2D2D" stroke="none">MJ Creative Art</text>
        <text x="297" y="115" font-family="'Fredoka', sans-serif" font-size="16" text-anchor="middle" fill="#666" stroke="none">Free Coloring Sheet Pack - Thank you, ${name}!</text>
        
        <!-- Fox sketch -->
        <path d="M 297 320 Q 350 280 410 320 Q 420 360 350 370 Q 280 360 290 320 Z"/>
        <path d="M 307 310 L 297 255 L 322 275 Z"/>
        <path d="M 397 310 L 407 255 L 382 275 Z"/>
        <circle cx="330" cy="325" r="5" fill="#2D2D2D"/>
        <circle cx="370" cy="325" r="5" fill="#2D2D2D"/>
        <path d="M 345 345 Q 350 350 355 345"/>
        
        <!-- Scarf -->
        <path d="M 325 365 Q 350 380 375 365 Q 380 410 370 440 L 350 435 Q 355 400 345 365 Z"/>
        
        <!-- Bubble lines -->
        <circle cx="120" cy="220" r="20"/>
        <circle cx="150" cy="500" r="15"/>
        <circle cx="480" cy="450" r="30"/>
        
        <!-- Outer border -->
        <rect x="40" y="40" width="515" height="762" rx="20"/>
      </g>
    </svg>`;

    const blob = new Blob([content], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `mj-creative-freebie-sampler.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="freebie" className="py-20 px-6 bg-[#FCF8F2] relative overflow-hidden">
      {/* Playful blobs */}
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute top-10 right-0 w-44 h-44 bg-teal-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-[3rem] border-2 border-orange-100 p-8 md:p-14 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
          
          {/* Badge */}
          <div className="absolute top-6 left-6 bg-[#E29578] text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full shadow-xs">
            🎁 100% Free Gift
          </div>

          {/* Left panel text */}
          <div className="lg:col-span-7 space-y-6 pt-6 lg:pt-0">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl font-bold font-fredoka text-[#2D2D2D] leading-tight">
                Get Your Free 3-Page Sampler Pack!
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Join our newsletter club to instantly unlock and print three beautiful sample coloring sheets (PDF format). Perfect for testing your pencils, cozying up on a rainy day, or sharing with kids!
              </p>
            </div>

            {/* Check marks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-orange-100 text-[#FF8A65] flex items-center justify-center">
                  <Check size={12} />
                </div>
                <span>3 high-res print-ready sheets</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-orange-100 text-[#FF8A65] flex items-center justify-center">
                  <Check size={12} />
                </div>
                <span>Perfect for pencils & iPad coloring</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-orange-100 text-[#FF8A65] flex items-center justify-center">
                  <Check size={12} />
                </div>
                <span>No purchase required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-orange-100 text-[#FF8A65] flex items-center justify-center">
                  <Check size={12} />
                </div>
                <span>Monthly free coloring pages in future</span>
              </div>
            </div>

            {/* Interactive Form/Unlock states */}
            <AnimatePresence mode="wait">
              {!isUnlocked ? (
                <motion.form
                  key="optin-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5 tracking-wider ml-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your friendly name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 text-sm border border-slate-200 rounded-2xl outline-hidden focus:border-[#FF8A65] focus:ring-2 focus:ring-orange-100 transition-all duration-200 text-slate-700"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1.5 tracking-wider ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 text-sm border border-slate-200 rounded-2xl outline-hidden focus:border-[#FF8A65] focus:ring-2 focus:ring-orange-100 transition-all duration-200 text-slate-700"
                        required
                      />
                    </div>
                  </div>

                  {errorMsg && (
                    <p className="text-rose-500 text-xs font-semibold">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#2D2D2D] hover:bg-slate-800 disabled:bg-slate-400 text-white font-fredoka font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Unlocking Free Gift...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Get Free Pack Now
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="download-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50/70 border border-emerald-100 p-5 rounded-2xl space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg font-bold">
                      🎉
                    </div>
                    <div>
                      <h4 className="font-fredoka font-bold text-emerald-800 text-sm">Welcome to the Coloring Club!</h4>
                      <p className="text-xs text-emerald-600">Your free files are ready for download below.</p>
                    </div>
                  </div>

                  <button
                    onClick={handleDownloadPDF}
                    className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-fredoka font-bold rounded-xl shadow-xs transition-colors duration-200 flex items-center justify-center gap-2 text-sm cursor-pointer"
                  >
                    <Download size={16} />
                    Download Free Sampler Pack (Printable vector)
                  </button>
                  
                  <p className="text-[10px] text-center text-slate-400 italic">
                    We also sent a backup download copy to your email! Don't forget to check your spam folder.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right panel graphic mockup */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-3xl p-6 relative aspect-[4/5] max-w-[280px] mx-auto flex flex-col justify-between items-center shadow-inner overflow-hidden select-none">
            <div className="absolute inset-0 bg-[radial-gradient(#ddd_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

            <div className="text-center w-full">
              <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 bg-white border border-slate-100 px-2.5 py-1 rounded-full">
                Preview Sheet
              </span>
            </div>

            {/* Mock drawing sheet symbol */}
            <div className="my-auto transform rotate-6 scale-110 filter drop-shadow-md">
              <span className="text-8xl block">🦊</span>
            </div>

            <div className="w-full text-center space-y-1">
              <h4 className="font-fredoka text-sm text-[#2D2D2D] font-bold">Felix & Friendly Helpers</h4>
              <p className="text-slate-400 text-[10px]">Print-at-Home PDF • 3 Pages Included</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
