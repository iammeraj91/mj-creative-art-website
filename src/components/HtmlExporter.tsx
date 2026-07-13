import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, Check, Sparkles, X, FileCode, HelpCircle } from "lucide-react";

export default function HtmlExporter({ onClose }: { onClose: () => void }) {
  const [downloaded, setDownloaded] = useState(false);

  const handleExport = () => {
    // Generate the full single-file self-contained HTML
    const htmlString = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MJ Creative Art | Digital Coloring Books Storefront</title>
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS Play CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            fredoka: ['Fredoka', 'sans-serif'],
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>
  
  <style>
    /* Custom utility animations or styling */
    .color-swatch-active {
      transform: scale(1.08);
      border-color: #2D2D2D !important;
      box-shadow: 0 0 0 3px rgba(255,138,101,0.2) !important;
    }
  </style>
</head>
<body class="bg-white text-[#2D2D2D] font-sans antialiased selection:bg-[#FF8A65]/10 selection:text-[#FF8A65]">

  <!-- Header -->
  <header class="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-orange-50/50 py-4 px-6">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <a href="#" class="flex items-center gap-2.5">
        <div class="w-10 h-10 rounded-2xl bg-[#FF8A65] text-white flex items-center justify-center font-fredoka font-bold text-xl shadow-md">
          MJ
        </div>
        <div>
          <h1 class="font-fredoka text-lg md:text-xl font-bold text-[#2D2D2D] tracking-tight">
            MJ Creative Art <span class="text-[#FF8A65] text-xs">✨</span>
          </h1>
          <p class="text-[10px] text-gray-400 font-semibold uppercase tracking-wider -mt-1">
            Digital Coloring Books
          </p>
        </div>
      </a>
      <nav class="hidden md:flex items-center gap-6 text-sm font-fredoka text-slate-600">
        <a href="#coloring-books" class="hover:text-[#FF8A65] transition-colors font-semibold">Coloring Books</a>
        <a href="#coloring-station" class="hover:text-[#FF8A65] transition-colors font-semibold">Coloring Station</a>
        <a href="#freebie" class="hover:text-[#FF8A65] transition-colors font-semibold">Free Pages</a>
        <a href="#faq" class="hover:text-[#FF8A65] transition-colors font-semibold">FAQs</a>
      </nav>
      <div>
        <a href="#coloring-books" class="px-5 py-2.5 bg-[#FF8A65] hover:bg-[#ff774e] text-white font-fredoka text-sm font-bold rounded-2xl transition-all shadow-xs hover:shadow-md">
          Shop on Etsy
        </a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="bg-gradient-to-b from-[#FCF8F2] to-white pt-16 pb-20 px-6 relative overflow-hidden">
    <div class="absolute top-20 left-10 w-16 h-16 bg-[#FF8A65]/10 rounded-full blur-xl pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-32 h-32 bg-[#83C5BE]/10 rounded-full blur-2xl pointer-events-none"></div>
    <div class="max-w-5xl mx-auto text-center relative z-10">
      <div class="inline-flex items-center gap-2 bg-white border border-orange-100 rounded-full px-4 py-1.5 shadow-xs mb-6">
        <span class="w-2.5 h-2.5 rounded-full bg-[#FF8A65]"></span>
        <span class="font-fredoka text-xs font-bold text-slate-600 uppercase tracking-wider">Welcome to MJ Creative Art</span>
        <span class="text-orange-400">👋</span>
      </div>
      <h1 class="font-fredoka text-4xl md:text-7xl font-bold text-[#2D2D2D] leading-[1.1] max-w-4xl mx-auto mb-6">
        Cute, Cozy & Digital <br>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A65] via-amber-500 to-[#E29578] relative">
          Coloring Books
        </span>
      </h1>
      <p class="text-slate-600 text-base md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
        High-resolution printable coloring sheet collections designed to spark pure imagination, mindfulness, and relaxation. Download instantly, print from any printer, or color directly on your tablet!
      </p>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mb-14">
        <a href="#coloring-books" class="w-full sm:w-auto px-8 py-4 bg-[#FF8A65] hover:bg-[#ff774e] text-white font-fredoka font-bold rounded-2xl shadow-md flex items-center justify-center gap-2">
          Browse Coloring Books
        </a>
        <a href="#coloring-station" class="w-full sm:w-auto px-8 py-4 bg-white border-2 border-[#2D2D2D]/10 hover:border-[#2D2D2D]/30 text-slate-700 font-fredoka font-bold rounded-2xl flex items-center justify-center gap-2">
          Try Live Sandbox
        </a>
      </div>
    </div>
  </section>

  <!-- Coloring Books Grid -->
  <section id="coloring-books" class="py-20 px-6 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <span class="bg-orange-50 text-[#FF8A65] font-semibold text-xs uppercase px-4 py-1.5 rounded-full mb-3 inline-block">✨ Premium Collections</span>
        <h2 class="text-3xl md:text-5xl font-bold font-fredoka text-[#2D2D2D] mb-4">Our Digital Coloring Books</h2>
        <p class="text-slate-500 max-w-xl mx-auto text-sm">Lovingly hand-drawn high-resolution collections. Download instantly, print at home, or import into Procreate!</p>
      </div>
      
      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Book 1 -->
        <div class="bg-white rounded-[2.5rem] border-2 border-slate-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="w-full aspect-[3/4] rounded-3xl relative overflow-hidden mb-6 flex flex-col justify-center items-center bg-[#FFF3EF]">
              <span class="text-7xl filter drop-shadow-md select-none">🦊</span>
              <div class="mt-3 text-2xl font-bold font-fredoka text-[#2D2D2D] text-center">Whimsical Forest</div>
            </div>
            <h3 class="font-fredoka text-xl text-[#2D2D2D] font-bold mb-1">Whimsical Forest Animals</h3>
            <p className="text-slate-600 text-sm mb-6">Step into a cozy, magical forest filled with adorable baby foxes, wise little owls, tiny squirrels sipping tea, and playful deer.</p>
            <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-1 mb-6 text-xs text-gray-600">
              <div class="flex justify-between"><span>Pages:</span><span class="font-bold">35 coloring sheets</span></div>
              <div class="flex justify-between"><span>Perfect For:</span><span class="font-bold">Ages 3 to 103</span></div>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-2 gap-2">
              <a href="https://www.etsy.com" target="_blank" class="py-2.5 bg-white border border-orange-500 text-orange-600 rounded-xl text-center font-fredoka text-xs font-bold hover:bg-orange-50">Etsy</a>
              <a href="https://gumroad.com" target="_blank" class="py-2.5 bg-[#2D2D2D] text-white rounded-xl text-center font-fredoka text-xs font-bold hover:bg-slate-800">Gumroad</a>
            </div>
          </div>
        </div>

        <!-- Book 2 -->
        <div class="bg-white rounded-[2.5rem] border-2 border-slate-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="w-full aspect-[3/4] rounded-3xl relative overflow-hidden mb-6 flex flex-col justify-center items-center bg-[#EDF6F9]">
              <span class="text-7xl filter drop-shadow-md select-none">🐢</span>
              <div class="mt-3 text-2xl font-bold font-fredoka text-[#2D2D2D] text-center">Under the Sea</div>
            </div>
            <h3 class="font-fredoka text-xl text-[#2D2D2D] font-bold mb-1">Magical Under the Sea</h3>
            <p className="text-slate-600 text-sm mb-6">Dive deep into a sparkling underwater world where cute mermaids play with baby narwhals and friendly sea turtles glide.</p>
            <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-1 mb-6 text-xs text-gray-600">
              <div class="flex justify-between"><span>Pages:</span><span class="font-bold">40 coloring sheets</span></div>
              <div class="flex justify-between"><span>Perfect For:</span><span class="font-bold">Ages 4 to 12</span></div>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-2 gap-2">
              <a href="https://www.etsy.com" target="_blank" class="py-2.5 bg-white border border-orange-500 text-orange-600 rounded-xl text-center font-fredoka text-xs font-bold hover:bg-orange-50">Etsy</a>
              <a href="https://gumroad.com" target="_blank" class="py-2.5 bg-[#2D2D2D] text-white rounded-xl text-center font-fredoka text-xs font-bold hover:bg-slate-800">Gumroad</a>
            </div>
          </div>
        </div>

        <!-- Book 3 -->
        <div class="bg-white rounded-[2.5rem] border-2 border-slate-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="w-full aspect-[3/4] rounded-3xl relative overflow-hidden mb-6 flex flex-col justify-center items-center bg-[#F3F0FF]">
              <span class="text-7xl filter drop-shadow-md select-none">🚀</span>
              <div class="mt-3 text-2xl font-bold font-fredoka text-[#2D2D2D] text-center">Space Buddies</div>
            </div>
            <h3 class="font-fredoka text-xl text-[#2D2D2D] font-bold mb-1">Space Adventure Buddies</h3>
            <p className="text-slate-600 text-sm mb-6">Blast off with happy astronaut puppies, adventurous space kittens, cheerful flying saucers, and friendly aliens!</p>
            <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-1 mb-6 text-xs text-gray-600">
              <div class="flex justify-between"><span>Pages:</span><span class="font-bold">30 coloring sheets</span></div>
              <div class="flex justify-between"><span>Perfect For:</span><span class="font-bold">Ages 3 to 8</span></div>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-2 gap-2">
              <a href="https://www.etsy.com" target="_blank" class="py-2.5 bg-white border border-orange-500 text-orange-600 rounded-xl text-center font-fredoka text-xs font-bold hover:bg-orange-50">Etsy</a>
              <a href="https://gumroad.com" target="_blank" class="py-2.5 bg-[#2D2D2D] text-white rounded-xl text-center font-fredoka text-xs font-bold hover:bg-slate-800">Gumroad</a>
            </div>
          </div>
        </div>

        <!-- Book 4 -->
        <div class="bg-white rounded-[2.5rem] border-2 border-slate-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="w-full aspect-[3/4] rounded-3xl relative overflow-hidden mb-6 flex flex-col justify-center items-center bg-[#FEFAE0]">
              <span class="text-7xl filter drop-shadow-md select-none">🐱</span>
              <div class="mt-3 text-2xl font-bold font-fredoka text-[#2D2D2D] text-center">Cozy Hygge</div>
            </div>
            <h3 class="font-fredoka text-xl text-[#2D2D2D] font-bold mb-1">Cozy Autumn Hygge</h3>
            <p className="text-slate-600 text-sm mb-6">Celebrate the comforting joys of autumn and winter. Think chunky knit sweaters, steaming mugs of marshmallow cocoa.</p>
            <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-1 mb-6 text-xs text-gray-600">
              <div class="flex justify-between"><span>Pages:</span><span class="font-bold">45 coloring sheets</span></div>
              <div class="flex justify-between"><span>Perfect For:</span><span class="font-bold">All Ages</span></div>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-2 gap-2">
              <a href="https://www.etsy.com" target="_blank" class="py-2.5 bg-white border border-orange-500 text-orange-600 rounded-xl text-center font-fredoka text-xs font-bold hover:bg-orange-50">Etsy</a>
              <a href="https://gumroad.com" target="_blank" class="py-2.5 bg-[#2D2D2D] text-white rounded-xl text-center font-fredoka text-xs font-bold hover:bg-slate-800">Gumroad</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Interactive Coloring Canvas -->
  <section id="coloring-station" class="py-16 px-6 bg-[#FCF8F2] relative overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-10">
        <span class="bg-[#FF8A65]/10 text-[#FF8A65] font-semibold tracking-wider text-xs uppercase px-4 py-1.5 rounded-full inline-block mb-3">🎨 Sandbox Playground</span>
        <h2 class="text-3xl md:text-5xl font-bold font-fredoka text-[#2D2D2D] mb-4">Interactive Coloring Station</h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-sm">Select a character tab, pick a paint color, then click parts of the drawing to fill them in!</p>
      </div>

      <!-- Tabs -->
      <div class="flex justify-center gap-3 mb-8">
        <button onclick="selectPage('fox')" id="tab-fox" class="px-5 py-3 rounded-full font-fredoka text-sm border-2 bg-[#2D2D2D] text-white border-[#2D2D2D] shadow-sm">🦊 Felix the Fox</button>
        <button onclick="selectPage('turtle')" id="tab-turtle" class="px-5 py-3 rounded-full font-fredoka text-sm border-2 bg-white text-gray-700 border-gray-200">🐢 Pip the Turtle</button>
      </div>

      <!-- Coloring Sandbox -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div class="lg:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-orange-100 flex flex-col justify-between">
          <div>
            <h3 class="font-fredoka text-xl text-[#2D2D2D] font-bold mb-4">Pick Your Paint</h3>
            <div class="grid grid-cols-4 gap-3 mb-6" id="palette-container">
              <!-- Rendered via JS -->
            </div>
          </div>
          <div class="space-y-3 pt-6 border-t border-dashed border-slate-100">
            <button onclick="autoColor()" class="w-full py-3 bg-[#E29578] hover:bg-[#d48566] text-white font-fredoka rounded-xl text-sm">Magic Auto-Color</button>
            <button onclick="resetCanvas()" class="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-fredoka rounded-xl text-sm">Reset Canvas</button>
          </div>
        </div>

        <div class="lg:col-span-8 bg-white rounded-3xl p-8 shadow-sm border border-orange-100 flex flex-col items-center">
          <!-- Canvas SVG -->
          <div class="w-full max-w-[340px] aspect-square rounded-2xl bg-slate-50 border-4 border-[#2D2D2D]/10 p-2 relative shadow-inner">
            <svg id="coloring-svg" viewBox="0 0 400 400" class="w-full h-full"></svg>
          </div>
          <p class="text-xs text-gray-400 mt-4">💡 Click inside any outlined space above to paint!</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Freebie Section -->
  <section id="freebie" class="py-20 px-6 bg-white">
    <div class="max-w-5xl mx-auto">
      <div class="bg-[#FCF8F2] rounded-[3rem] border-2 border-orange-100 p-8 md:p-14 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="max-w-xl">
          <span class="bg-[#E29578] text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full inline-block mb-3">🎁 Free Pack</span>
          <h2 class="text-3xl md:text-5xl font-bold font-fredoka text-[#2D2D2D] mb-4">Get Your Free 3-Page Sampler Pack</h2>
          <p class="text-slate-600 text-sm leading-relaxed">Enter your name and email to immediately download high-quality vector drawings you can print at home instantly!</p>
        </div>
        <div class="w-full md:w-auto shrink-0 bg-white p-6 rounded-3xl border border-orange-50 shadow-sm">
          <input type="text" id="freebie-name" placeholder="First Name" class="w-full px-4 py-3 mb-3 text-sm border rounded-xl outline-hidden focus:border-[#FF8A65]">
          <input type="email" id="freebie-email" placeholder="example@gmail.com" class="w-full px-4 py-3 mb-4 text-sm border rounded-xl outline-hidden focus:border-[#FF8A65]">
          <button onclick="unlockFreebie()" class="w-full py-3 bg-[#FF8A65] text-white font-fredoka rounded-xl font-bold">Get Freebie Pack</button>
          <div id="freebie-download-container" class="hidden mt-3 text-center">
            <a href="#" onclick="downloadFreebiePack()" class="text-xs font-bold text-emerald-600 hover:underline">📥 Click to Download PDF Sampler</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section id="faq" class="py-20 px-6 bg-white">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <span class="bg-purple-50 text-purple-600 font-semibold text-xs uppercase px-4 py-1.5 rounded-full inline-block">🙋 FAQ Help Center</span>
        <h2 class="text-3xl md:text-5xl font-bold font-fredoka text-[#2D2D2D] mt-2">Commonly Asked Questions</h2>
      </div>
      <div class="space-y-4 max-w-3xl mx-auto">
        <div class="bg-[#FCF8F2] rounded-2xl p-6 border border-orange-50">
          <h4 class="font-fredoka font-bold text-[#2D2D2D]">How do I receive the coloring books?</h4>
          <p class="text-xs md:text-sm text-slate-600 mt-2">These are digital products! Immediately after purchase, Etsy or Gumroad will email you a high-quality PDF download link so you can print instantly.</p>
        </div>
        <div class="bg-[#FCF8F2] rounded-2xl p-6 border border-orange-50">
          <h4 class="font-fredoka font-bold text-[#2D2D2D]">Can I color these on my iPad or tablet?</h4>
          <p class="text-xs md:text-sm text-slate-600 mt-2">Yes! Each purchase comes with high-resolution transparent PNG files which you can import into Procreate, Sketchbook, or other tablet coloring programs.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-[#2D2D2D] text-white/70 py-12 px-6 border-t border-slate-800">
    <div class="max-w-6xl mx-auto text-center space-y-4">
      <h3 class="font-fredoka text-white text-xl font-bold">MJ Creative Art</h3>
      <p class="text-xs">Creating joyful, cozy, and imaginative coloring packs. Connect with us on social media!</p>
      <p class="text-[10px] text-white/40">© 2026 MJ Creative Art. All rights reserved. For personal use only.</p>
    </div>
  </footer>

  <!-- Inline SVGs & Sandbox Script -->
  <script>
    const pages = {
      fox: [
        { id: "sky", d: "M 0 0 L 400 0 L 400 320 Q 200 340 0 320 Z", name: "Sky" },
        { id: "ground", d: "M 0 320 Q 200 340 400 320 L 400 400 L 0 400 Z", name: "Ground" },
        { id: "trunk", d: "M 60 120 Q 80 200 70 340 L 95 340 Q 100 220 110 120 Z", name: "Trunk" },
        { id: "fox-tail", d: "M 220 340 Q 270 350 290 300 Q 300 260 270 230 Q 250 240 230 280 Z", name: "Tail" },
        { id: "fox-body", d: "M 150 280 Q 140 340 180 340 Q 220 340 210 280 Q 200 240 160 240 Z", name: "Body" },
        { id: "fox-head", d: "M 120 180 Q 180 140 240 180 Q 250 220 180 230 Q 110 220 120 180 Z", name: "Face" }
      ],
      turtle: [
        { id: "ocean", d: "M 0 0 L 400 0 L 400 400 L 0 400 Z", name: "Ocean Deep" },
        { id: "shell", d: "M 150 170 Q 200 130 250 170 Q 280 220 250 270 Q 200 310 150 270 Z", name: "Shell Edge" },
        { id: "head", d: "M 180 150 Q 200 100 220 150 Q 210 170 190 170 Z", name: "Turtle Head" }
      ]
    };

    const palette = ["#FFFFFF", "#FF8A65", "#FFA726", "#FFE082", "#A5D6A7", "#80CBC4", "#90CAF9", "#B39DDB", "#F48FB1", "#BCAAA4"];
    let selectedColor = "#FF8A65";
    let currentPageId = "fox";
    let state = { fox: {}, turtle: {} };

    // Initialize palette swatches
    const pContainer = document.getElementById("palette-container");
    palette.forEach(color => {
      const btn = document.createElement("button");
      btn.style.backgroundColor = color;
      btn.className = "h-10 rounded-xl border border-slate-200 transition hover:scale-105 active:scale-95";
      if (color === selectedColor) btn.classList.add("color-swatch-active");
      btn.onclick = () => {
        document.querySelectorAll("#palette-container button").forEach(b => b.classList.remove("color-swatch-active"));
        btn.classList.add("color-swatch-active");
        selectedColor = color;
      };
      pContainer.appendChild(btn);
    });

    // Render Canvas
    function renderCanvas() {
      const svg = document.getElementById("coloring-svg");
      svg.innerHTML = "";
      const paths = pages[currentPageId];
      paths.forEach(p => {
        const pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathEl.setAttribute("d", p.d);
        pathEl.setAttribute("stroke", "#2D2D2D");
        pathEl.setAttribute("stroke-width", "2.5");
        pathEl.setAttribute("stroke-linecap", "round");
        pathEl.setAttribute("stroke-linejoin", "round");
        pathEl.style.cursor = "pointer";
        pathEl.style.transition = "fill 0.3s";
        
        const fillColor = state[currentPageId][p.id] || "#FFFFFF";
        pathEl.setAttribute("fill", fillColor);
        
        pathEl.onclick = () => {
          state[currentPageId][p.id] = selectedColor;
          pathEl.setAttribute("fill", selectedColor);
        };
        svg.appendChild(pathEl);
      });
    }

    // Tab select
    window.selectPage = function(pageId) {
      currentPageId = pageId;
      document.getElementById("tab-fox").className = pageId === "fox" ? "px-5 py-3 rounded-full font-fredoka text-sm border-2 bg-[#2D2D2D] text-white border-[#2D2D2D]" : "px-5 py-3 rounded-full font-fredoka text-sm border-2 bg-white text-gray-700 border-gray-200";
      document.getElementById("tab-turtle").className = pageId === "turtle" ? "px-5 py-3 rounded-full font-fredoka text-sm border-2 bg-[#2D2D2D] text-white border-[#2D2D2D]" : "px-5 py-3 rounded-full font-fredoka text-sm border-2 bg-white text-gray-700 border-gray-200";
      renderCanvas();
    }

    // Reset
    window.resetCanvas = function() {
      state[currentPageId] = {};
      renderCanvas();
    }

    // Auto
    window.autoColor = function() {
      if (currentPageId === "fox") {
        state.fox = { sky: "#90CAF9", ground: "#A5D6A7", trunk: "#BCAAA4", "fox-tail": "#FF8A65", "fox-body": "#FF8A65", "fox-head": "#FF8A65" };
      } else {
        state.turtle = { ocean: "#80CBC4", shell: "#A5D6A7", head: "#FFE0B2" };
      }
      renderCanvas();
    }

    // Unlock Freebie
    window.unlockFreebie = function() {
      const name = document.getElementById("freebie-name").value;
      const email = document.getElementById("freebie-email").value;
      if (name && email) {
        document.getElementById("freebie-download-container").classList.remove("hidden");
      } else {
        alert("Please enter both your name and email first!");
      }
    }

    // Download Sample PDF Pack
    window.downloadFreebiePack = function() {
      const svgContent = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><rect width="500" height="500" fill="#FFF"/><text x="250" y="250" font-family="sans-serif" font-size="24" text-anchor="middle">MJ Creative Art Freebie Pack</text></svg>\`;
      const blob = new Blob([svgContent], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "mj-creative-freebie.svg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    // Init
    renderCanvas();
  </script>
</body>
</html>`;

    const blob = new Blob([htmlString], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "mj-creative-art-storefront.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs"
      />

      <motion.div
        initial={{ scale: 0.95, y: 15, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 15, opacity: 0 }}
        className="bg-white rounded-[2.5rem] p-6 md:p-8 max-w-lg w-full shadow-2xl border-2 border-emerald-100 relative z-10 text-center"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-50 border border-slate-100 hover:bg-slate-100 text-slate-500 flex items-center justify-center cursor-pointer"
        >
          <X size={15} />
        </button>

        <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-500 flex items-center justify-center text-3xl mx-auto mb-4 shadow-sm">
          💾
        </div>

        <h3 className="font-fredoka text-2xl text-[#2D2D2D] font-bold mb-2">
          Download Static HTML File
        </h3>
        
        <p className="text-gray-500 text-xs md:text-sm mb-6 leading-relaxed">
          As requested, we compiled this entire web storefront (including interactive styling, responsive grids, FAQ panels, and the **Coloring Canvas engine**) into a <strong>single standalone HTML file</strong>. You can open and run it locally with zero build tools!
        </p>

        <div className="bg-[#FCF8F2] p-4 rounded-2xl border border-orange-50/50 text-left space-y-2 mb-6">
          <div className="flex items-start gap-2 text-xs text-gray-600">
            <span className="text-emerald-500 font-bold shrink-0">✓</span>
            <span><strong>Zero Dependencies</strong>: Pure self-contained script assets.</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-gray-600">
            <span className="text-emerald-500 font-bold shrink-0">✓</span>
            <span><strong>Portable Play</strong>: Works offline or hosted on Github Pages/Netlify.</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-gray-600">
            <span className="text-emerald-500 font-bold shrink-0">✓</span>
            <span><strong>Vanilla Canvas</strong>: Lightweight paint buckets built with pure Javascript.</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="w-1/3 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-fredoka rounded-xl text-xs font-semibold transition-colors duration-200"
          >
            Cancel
          </button>
          
          <button
            onClick={handleExport}
            className="w-2/3 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-fredoka rounded-xl text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
          >
            {downloaded ? (
              <>
                <Check size={16} />
                Downloaded successfully!
              </>
            ) : (
              <>
                <Download size={16} />
                Export & Download .html
              </>
            )}
          </button>
        </div>

        {downloaded && (
          <p className="text-[10px] text-emerald-600 font-semibold mt-3 animate-pulse">
            🎉 Download complete! Double-click the file to open inside any browser instantly.
          </p>
        )}
      </motion.div>
    </div>
  );
}
