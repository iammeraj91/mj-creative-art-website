import { useState } from "react";
import { FAQ_ITEMS } from "../data";
import { ChevronDown, HelpCircle, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-white relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="bg-purple-50 text-purple-600 font-semibold text-xs uppercase px-4 py-1.5 rounded-full inline-block mb-3">
            🙋 FAQ Help Center
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-fredoka text-[#2D2D2D] mb-4">
            Commonly Asked Questions
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm">
            Everything you need to know about our digital coloring books, downloading files, home printing, and tablet compatibility.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-[#FCF8F2]/60 rounded-3xl border transition-all duration-300 ${
                  isOpen ? "border-[#FF8A65]/30 bg-[#FCF8F2] shadow-sm" : "border-slate-100 hover:border-slate-200"
                }`}
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-start gap-3.5 pr-4">
                    <HelpCircle className="text-[#FF8A65] shrink-0 mt-0.5" size={18} />
                    <span className="font-fredoka text-slate-800 text-sm md:text-base font-bold leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-500 shrink-0 shadow-2xs"
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                {/* Answer block with clean collapse height animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-orange-50/50 mt-1">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Fun help banner below FAQs */}
        <div className="mt-14 text-center max-w-xl mx-auto bg-slate-50 p-6 rounded-3xl border border-slate-100">
          <p className="text-xs text-slate-500 font-medium">
            Still have a question or need assistance with your files?
          </p>
          <p className="text-[#2D2D2D] font-fredoka font-bold text-sm mt-1">
            We are always here to help! Reach out anytime via our Etsy Shop messaging or email.
          </p>
          <div className="mt-3 flex justify-center items-center gap-1.5 text-xs font-semibold text-[#FF8A65]">
            <Heart size={14} className="fill-[#FF8A65]" />
            <span>Made with love by MJ Creative Art</span>
          </div>
        </div>

      </div>
    </section>
  );
}
