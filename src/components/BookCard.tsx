import React, { useState } from "react";
import { Book } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Eye, Sparkles, X, ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

interface BookCardProps {
  book: Book;
  key?: string | number;
}

// Interactive coloring page samples for each book
const SAMPLES_DATA: Record<string, { title: string; desc: string; icon: string }[]> = {
  "baby-ocean-animals": [
    { title: "Penny the Octopus", desc: "A sweet baby octopus waving with friendly bubbles.", icon: "🐙" },
    { title: "Toby the Sea Turtle", desc: "A cheerful little turtle paddling past smiling corals.", icon: "🐢" },
    { title: "Daisy the Dolphin", desc: "A playful young dolphin leaping through warm ocean waves.", icon: "🐬" }
  ],
  "baby-dinosaur": [
    { title: "Toby the Triceratops", desc: "A cute baby triceratops snacking on a soft prehistoric leaf.", icon: "🦕" },
    { title: "Rexy the Rex", desc: "A friendly baby Tyrannosaurus practicing his loudest mini roar.", icon: "🦖" },
    { title: "Steggy the Stegosaurus", desc: "A chubby stegosaurus with little round plates waving hello.", icon: "🦖" }
  ],
  "the-juicy-alphabet": [
    { title: "A is for Apple", desc: "A delicious smiling red apple wearing a tiny cozy leaf hat.", icon: "🍎" },
    { title: "B is for Berry", desc: "A cheerful bunch of sweet baby blueberries hugging.", icon: "🫐" },
    { title: "W is for Watermelon", desc: "A juicy slice of summer watermelon showing a warm rosy grin.", icon: "🍉" }
  ]
};

export default function BookCard({ book }: BookCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const samples = SAMPLES_DATA[book.id] || [];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % samples.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + samples.length) % samples.length);
  };

  // Select cover emoji based on book ID
  const getCoverEmoji = (id: string) => {
    switch (id) {
      case "baby-ocean-animals":
        return "🐙";
      case "baby-dinosaur":
        return "🦕";
      case "the-juicy-alphabet":
        return "🍉";
      default:
        return "🎨";
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -8, transition: { duration: 0.2 } }}
        className="bg-white rounded-[2.5rem] border-2 border-slate-100 hover:border-[#FF8A65]/20 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full relative"
      >
        <div>
          {/* Cover Mockup - High Fidelity Placeholder Image Slot */}
          <div
            className="w-full aspect-[3/4] rounded-3xl relative overflow-hidden mb-6 flex flex-col justify-between p-6 shadow-xs group cursor-pointer border border-slate-200/50 transition-all duration-300 hover:shadow-md select-none"
            style={{ backgroundColor: book.bgColor }}
            onClick={() => setIsPreviewOpen(true)}
          >
            {/* Soft book spine shadow simulation on the left */}
            <div className="absolute top-0 left-0 bottom-0 w-3.5 bg-gradient-to-r from-black/8 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-3.5 bottom-0 w-px bg-white/20 pointer-events-none" />

            {/* Header branding */}
            <div className="flex justify-between items-center z-10">
              <span className="text-[10px] font-bold tracking-wider uppercase text-slate-500/80 bg-white/75 px-2.5 py-1 rounded-full shadow-2xs">
                ✨ MJ Creative Art
              </span>
              <span className="text-xs">📖</span>
            </div>

            {/* Interactive Cover Art character in the center */}
            <div className="my-auto flex flex-col items-center justify-center text-center z-10 py-4">
              <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <span className="text-7xl filter drop-shadow-md select-none block leading-none">
                  {getCoverEmoji(book.id)}
                </span>
              </div>
              
              {/* Playful Book Title inside the cover placeholder */}
              <h4 className="mt-4 font-fredoka text-xl font-extrabold text-[#2D2D2D] max-w-[180px] leading-tight">
                {book.title}
              </h4>
              <span className="text-[10px] font-fredoka font-medium text-slate-500 mt-1 bg-white/40 px-2 py-0.5 rounded-full">
                {book.pagesCount} coloring pages
              </span>
            </div>

            {/* Bottom look inside trigger badge */}
            <div className="flex justify-center z-10">
              <div className="text-[11px] font-semibold text-slate-600 bg-white/90 group-hover:bg-white px-3.5 py-1.5 rounded-full flex items-center gap-1 shadow-2xs transition-colors duration-200">
                <Eye size={12} className="text-[#FF8A65]" />
                <span>Look Inside Preview</span>
              </div>
            </div>

            {/* Accent ribbon */}
            <div
              className="absolute top-4 -right-12 w-44 text-center py-1 text-[9px] uppercase font-bold text-white tracking-widest rotate-45 shadow-sm"
              style={{ backgroundColor: book.accentColor }}
            >
              Printable PDF
            </div>
          </div>

          {/* Book Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold text-gray-500 bg-slate-50 px-2.5 py-1 rounded-full uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Book Title */}
          <h3 className="font-fredoka text-xl text-[#2D2D2D] font-bold mb-1 leading-snug">
            {book.title}
          </h3>

          {/* One-Line Description */}
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            {book.description}
          </p>

          {/* Key specs details */}
          <div className="bg-slate-50/60 border border-slate-100 rounded-2xl p-4 space-y-2 mb-6 text-xs text-slate-600">
            <div className="flex justify-between items-center">
              <span className="font-medium text-slate-400">Perfect For:</span>
              <span className="font-bold text-slate-700">{book.ageRecommendation}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-slate-400">Pages Count:</span>
              <span className="font-bold text-slate-700">{book.pagesCount} sheets</span>
            </div>
          </div>
        </div>

        {/* Pricing & View & Buy CTA Button */}
        <div>
          <div className="flex items-center justify-between border-t border-dashed border-slate-100 pt-4 mb-4">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Etsy Direct</p>
              <p className="text-lg font-bold font-fredoka text-[#F16521]">{book.priceEtsy}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Gumroad Direct</p>
              <p className="text-lg font-bold font-fredoka text-[#FF90E8]">{book.priceGumroad}</p>
            </div>
          </div>

          {/* View & Buy Button linking out */}
          <a
            href="#"
            onClick={(e) => {
              // Smoothly anchor or perform standard transition
            }}
            className="w-full py-3.5 bg-gradient-to-r from-[#FF8A65] to-amber-500 hover:from-[#ff774e] hover:to-amber-600 text-white font-fredoka font-bold rounded-2xl text-center text-sm transition-all duration-300 shadow-xs hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingBag size={16} />
            <span>View & Buy</span>
          </a>
        </div>
      </motion.div>

      {/* Look Inside Modal Flipbook Previewer */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Background Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPreviewOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            />

            {/* Beautiful Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 360 }}
              className="bg-white rounded-[2.5rem] p-6 md:p-8 max-w-md w-full shadow-2xl border border-slate-100 z-10 relative overflow-hidden"
            >
              {/* Close Icon button */}
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-50 border border-slate-100 hover:bg-slate-100 text-slate-500 flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <X size={16} />
              </button>

              <div className="text-center mb-6">
                <span className="text-[10px] font-bold text-[#FF8A65] uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full">
                  👀 Sample Flipbook Preview
                </span>
                <h4 className="font-fredoka text-2xl text-[#2D2D2D] font-bold mt-2">
                  {book.title}
                </h4>
                <p className="text-gray-400 text-xs mt-1">
                  Sample page {currentSlide + 1} of {samples.length} inside sheets
                </p>
              </div>

              {/* Mock Drawing Coloring Sheet Container */}
              <div className="relative bg-slate-50/80 border border-slate-100 rounded-3xl p-6 aspect-square max-w-[260px] mx-auto flex flex-col justify-between items-center shadow-inner overflow-hidden mb-6">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-60 pointer-events-none" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.18 }}
                    className="flex flex-col items-center justify-center h-full w-full z-10"
                  >
                    {/* Big Sketch Emoji Character */}
                    <div className="text-8xl filter drop-shadow-md select-none transform hover:scale-105 transition-transform duration-300 my-auto">
                      {samples[currentSlide]?.icon}
                    </div>

                    <div className="text-center mt-3">
                      <h5 className="font-fredoka font-bold text-[#2D2D2D] text-sm leading-snug">
                        {samples[currentSlide]?.title}
                      </h5>
                      <p className="text-[11px] text-slate-500 max-w-[200px] mx-auto mt-0.5 leading-relaxed">
                        {samples[currentSlide]?.desc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrow buttons */}
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-xs hover:bg-slate-50 text-slate-600 flex items-center justify-center border border-slate-100 cursor-pointer"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-xs hover:bg-slate-50 text-slate-600 flex items-center justify-center border border-slate-100 cursor-pointer"
                >
                  <ChevronRight size={14} />
                </button>
              </div>

              {/* Crisp print-at-home advantages */}
              <div className="space-y-2 max-w-xs mx-auto mb-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-4.5 h-4.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[9px] font-bold">✓</span>
                  <span>Crystal clear, high-resolution coloring contours</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4.5 h-4.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[9px] font-bold">✓</span>
                  <span>Prints beautifully on A4 or Letter sizes</span>
                </div>
              </div>

              {/* Primary Buy CTA inside Preview */}
              <div className="flex gap-2.5">
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="w-1/3 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-fredoka rounded-xl text-xs font-semibold transition-all duration-200"
                >
                  Close
                </button>
                <a
                  href="#"
                  className="w-2/3 py-3 bg-gradient-to-r from-[#FF8A65] to-amber-500 hover:from-[#ff774e] hover:to-amber-600 text-white font-fredoka rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1 shadow-xs transition-all duration-200"
                >
                  <span>🛒</span> Buy Pack Now
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
