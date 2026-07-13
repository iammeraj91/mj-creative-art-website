/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BookShowcase from "./components/BookShowcase";
import ColoringCanvas from "./components/ColoringCanvas";
import FreebieSection from "./components/FreebieSection";
import FaqSection from "./components/FaqSection";
import HtmlExporter from "./components/HtmlExporter";
import { AnimatePresence } from "motion/react";
import { Sparkles, Heart } from "lucide-react";

export default function App() {
  const [isExporterOpen, setIsExporterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50/30 flex flex-col selection:bg-[#FF8A65]/10 selection:text-[#FF8A65]">
      
      {/* Dynamic Header */}
      <Header onShowExporter={() => setIsExporterOpen(true)} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Playful Hero banner */}
        <Hero />

        {/* Dynamic Books Showcase */}
        <BookShowcase />

        {/* Interactive Coloring Sandbox Station */}
        <ColoringCanvas />

        {/* Free Sample Pack newsletter subscription block */}
        <FreebieSection />

        {/* About MJ Creative Art block */}
        <section className="py-16 px-6 bg-[#FCF8F2]/40 border-t border-b border-orange-50/40">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 rounded-full bg-[#FF8A65]/10 text-[#FF8A65] flex items-center justify-center text-4xl shrink-0 border border-orange-100">
              🎨
            </div>
            <div className="space-y-3">
              <h3 className="font-fredoka text-2xl text-[#2D2D2D] font-bold">
                Behind MJ Creative Art
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We believe that creativity should be accessible, comforting, and absolutely stress-free! MJ Creative Art was founded with a simple goal: craft heartwarming digital drawings that bring a cozy smile to children and adults alike. Every single page is hand-sketched with bold crisp lines, ensuring perfect printing or effortless Procreate coloring. Thank you for supporting our digital studio shop!
              </p>
            </div>
          </div>
        </section>

        {/* Expandable FAQs accordion */}
        <FaqSection />
      </main>

      {/* Footer brand disclaimer */}
      <footer className="bg-[#2D2D2D] text-white/70 py-16 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#FF8A65] text-white flex items-center justify-center text-xs font-bold">
                MJ
              </span>
              <span className="font-fredoka text-white font-bold text-lg">MJ Creative Art</span>
            </div>
            <p className="text-xs max-w-sm text-white/50">
              Crafting cozy digital coloring books & custom vector templates ready for home printing or iPad drawing apps.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-xs">
            <div className="flex items-center gap-1 text-[#FF8A65] font-semibold">
              <Heart size={14} className="fill-[#FF8A65]" />
              <span>Personal Use License Only</span>
            </div>
            <p className="text-[10px] text-white/30">
              © 2026 MJ Creative Art. All rights reserved. Built with love & pixels.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Exporter Modal overlay */}
      <AnimatePresence>
        {isExporterOpen && (
          <HtmlExporter onClose={() => setIsExporterOpen(false)} />
        )}
      </AnimatePresence>

    </div>
  );
}

