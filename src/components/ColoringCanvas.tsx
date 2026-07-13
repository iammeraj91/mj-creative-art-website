import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Paintbrush, RotateCcw, Download, Sparkles, Smile, ArrowRight, Heart } from "lucide-react";

interface PathConfig {
  id: string;
  d: string;
  name: string;
}

interface ColoringPage {
  id: string;
  name: string;
  character: string;
  description: string;
  paths: PathConfig[];
  viewBox: string;
}

const COLORING_PAGES: ColoringPage[] = [
  {
    id: "fox",
    name: "Felix the Woodland Fox",
    character: "Felix",
    description: "Color in Felix as he sits snugly under his favorite forest tree wearing a cozy hand-knit winter scarf!",
    viewBox: "0 0 400 400",
    paths: [
      // Background Sky
      { id: "sky", d: "M 0 0 L 400 0 L 400 320 Q 200 340 0 320 Z", name: "Sky Background" },
      // Forest Ground
      { id: "ground", d: "M 0 320 Q 200 340 400 320 L 400 400 L 0 400 Z", name: "Grassy Ground" },
      // Large Tree Trunk
      { id: "trunk", d: "M 60 120 Q 80 200 70 340 L 95 340 Q 100 220 110 120 Z", name: "Tree Trunk" },
      // Large Tree Canopy Background
      { id: "canopy-back", d: "M 30 130 C 10 90, 40 40, 90 50 C 120 30, 160 50, 150 90 C 170 120, 130 160, 90 150 C 60 160, 20 150, 30 130 Z", name: "Tree Foliage" },
      // Cute Little Cloud
      { id: "cloud-1", d: "M 310 80 C 295 80, 290 95, 305 105 C 295 115, 325 125, 335 115 C 350 115, 350 95, 335 85 C 335 75, 315 70, 310 80 Z", name: "Cloud" },
      // Fox Tail Outer
      { id: "fox-tail-main", d: "M 220 340 Q 270 350 290 300 Q 300 260 270 230 Q 250 240 230 280 Z", name: "Fox Tail Body" },
      // Fox Tail Tip
      { id: "fox-tail-tip", d: "M 270 230 Q 285 245 290 265 Q 280 255 270 230 Z", name: "Fox Tail Tip" },
      // Fox Body Back
      { id: "fox-body", d: "M 150 280 Q 140 340 180 340 Q 220 340 210 280 Q 200 240 160 240 Z", name: "Fox Body" },
      // Fox Head Outline (Base)
      { id: "fox-head", d: "M 120 180 Q 180 140 240 180 Q 250 220 180 230 Q 110 220 120 180 Z", name: "Fox Face" },
      // Fox Left Cheek Inner
      { id: "fox-cheek-left", d: "M 120 180 Q 140 195 150 210 Q 130 205 120 180 Z", name: "Left Cheek" },
      // Fox Right Cheek Inner
      { id: "fox-cheek-right", d: "M 240 180 Q 220 195 210 210 Q 230 205 240 180 Z", name: "Right Cheek" },
      // Fox Left Ear
      { id: "fox-ear-left", d: "M 130 170 Q 120 110 150 130 Q 155 150 145 165 Z", name: "Left Ear" },
      // Fox Left Ear Inner
      { id: "fox-ear-left-inner", d: "M 135 160 Q 130 125 145 138 Q 148 150 140 160 Z", name: "Left Ear Pink" },
      // Fox Right Ear
      { id: "fox-ear-right", d: "M 230 170 Q 240 110 210 130 Q 205 150 215 165 Z", name: "Right Ear" },
      // Fox Right Ear Inner
      { id: "fox-ear-right-inner", d: "M 225 160 Q 230 125 215 138 Q 212 150 220 160 Z", name: "Right Ear Pink" },
      // Scarf Neck Loop
      { id: "scarf-loop", d: "M 148 226 Q 180 245 212 226 Q 215 240 180 245 Q 145 240 148 226 Z", name: "Scarf Neck" },
      // Scarf Hanging Tail
      { id: "scarf-tail", d: "M 185 242 Q 205 285 195 315 L 175 310 Q 180 275 170 242 Z", name: "Scarf Hanging Tail" },
      // Fox Left Eye
      { id: "fox-eye-left", d: "A 8 8 0 1 1 158 185", name: "Left Eye" },
      // Fox Right Eye
      { id: "fox-eye-right", d: "A 8 8 0 1 1 202 185", name: "Right Eye" },
      // Fox Cute Heart Decor (On ground)
      { id: "heart-ground", d: "M 320 350 C 315 340, 295 340, 310 365 C 320 375, 330 365, 335 355 C 335 340, 325 340, 320 350 Z", name: "Little Heart" }
    ]
  },
  {
    id: "turtle",
    name: "Pip the Oceanic Turtle",
    character: "Pip",
    description: "Follow Pip the baby sea turtle as he swims around colorful corals and playful rising bubbles!",
    viewBox: "0 0 400 400",
    paths: [
      // Ocean background water
      { id: "ocean-sky", d: "M 0 0 L 400 0 L 400 400 L 0 400 Z", name: "Ocean Deep" },
      // Coral left branch
      { id: "coral-left", d: "M 10 400 Q 20 320 40 310 Q 60 300 45 270 Q 25 280 25 330 Q 10 340 0 350 Z", name: "Coral Branch A" },
      // Coral left branch B
      { id: "coral-left-b", d: "M 45 270 Q 65 240 85 260 Q 75 280 55 285 Z", name: "Coral Branch B" },
      // Coral right reef
      { id: "coral-right", d: "M 340 400 Q 330 300 370 240 L 390 260 Q 360 320 380 400 Z", name: "Coral Reef Right" },
      // Sea bubble large
      { id: "bubble-1", d: "M 80 100 A 15 15 0 1 1 80 130 A 15 15 0 1 1 80 100 Z", name: "Big Bubble" },
      // Sea bubble medium
      { id: "bubble-2", d: "M 300 160 A 10 10 0 1 1 300 180 A 10 10 0 1 1 300 160 Z", name: "Medium Bubble" },
      // Sea bubble small
      { id: "bubble-3", d: "M 250 80 A 6 6 0 1 1 250 92 A 6 6 0 1 1 250 80 Z", name: "Small Bubble" },
      // Turtle Shell Outer Rim
      { id: "shell-rim", d: "M 150 170 Q 200 130 250 170 Q 280 220 250 270 Q 200 310 150 270 Q 120 220 150 170 Z", name: "Turtle Shell Edge" },
      // Shell Plate Center
      { id: "shell-plate-mid", d: "M 180 200 L 220 200 L 230 230 L 200 250 L 170 230 Z", name: "Shell Center Pattern" },
      // Shell Plate Top
      { id: "shell-plate-top", d: "M 180 200 Q 200 160 220 200 L 200 180 Z", name: "Shell Top Pattern" },
      // Shell Plate Left
      { id: "shell-plate-left", d: "M 180 200 L 170 230 Q 140 210 180 200 Z", name: "Shell Left Pattern" },
      // Shell Plate Right
      { id: "shell-plate-right", d: "M 220 200 L 230 230 Q 260 210 220 200 Z", name: "Shell Right Pattern" },
      // Shell Plate Bottom
      { id: "shell-plate-bot", d: "M 200 250 L 170 230 Q 190 270 200 250 Z", name: "Shell Lower Pattern" },
      // Turtle Flipping Head
      { id: "turtle-head", d: "M 180 150 Q 200 100 220 150 Q 210 170 190 170 Z", name: "Turtle Head" },
      // Turtle Front Left Flipper
      { id: "flipper-front-l", d: "M 140 180 Q 70 160 110 220 Q 130 220 150 200 Z", name: "Left Front Flipper" },
      // Turtle Front Right Flipper
      { id: "flipper-front-r", d: "M 260 180 Q 330 160 290 220 Q 270 220 250 200 Z", name: "Right Front Flipper" },
      // Turtle Back Left Leg
      { id: "flipper-back-l", d: "M 155 265 Q 120 300 140 320 Q 165 300 165 275 Z", name: "Left Back Leg" },
      // Turtle Back Right Leg
      { id: "flipper-back-r", d: "M 245 265 Q 280 300 260 320 Q 235 300 235 275 Z", name: "Right Back Leg" },
      // Turtle Cute Little Tail
      { id: "turtle-tail", d: "M 195 285 L 200 310 L 205 285 Z", name: "Little Tail" },
      // Turtle Eye Left
      { id: "turtle-eye-l", d: "M 193 133 A 2 2 0 1 1 193 137", name: "Eye Highlight" },
      // Turtle Eye Right
      { id: "turtle-eye-r", d: "M 207 133 A 2 2 0 1 1 207 137", name: "Eye Highlight 2" }
    ]
  },
  {
    id: "space-cat",
    name: "Cosmo the Galactic Kitten",
    character: "Cosmo",
    description: "Blast off with Cosmo! Color this brave space kitten as she floats next to custom stars and a cartoon Saturn!",
    viewBox: "0 0 400 400",
    paths: [
      // Sky/Space deep background
      { id: "space-deep", d: "M 0 0 L 400 0 L 400 400 L 0 400 Z", name: "Deep Space" },
      // Big planet Saturn base
      { id: "saturn-globe", d: "M 280 100 Q 310 70 340 100 Q 370 130 340 160 Q 310 190 280 160 Q 250 130 280 100 Z", name: "Saturn Planet" },
      // Saturn Ring Front
      { id: "saturn-ring", d: "M 250 140 C 270 110, 350 110, 370 140 C 350 160, 270 160, 250 140 Z", name: "Saturn Ring" },
      // Little Star Left Top
      { id: "star-1", d: "M 50 40 L 55 52 L 67 55 L 57 63 L 60 75 L 50 67 L 40 75 L 43 63 L 33 55 L 45 52 Z", name: "Shooting Star" },
      // Little Star Right Bottom
      { id: "star-2", d: "M 90 310 L 93 318 L 102 320 L 95 326 L 97 335 L 90 329 L 83 335 L 85 326 L 78 320 L 87 318 Z", name: "Cosmic Star" },
      // Space Rocket Tail Flame
      { id: "rocket-flame", d: "M 100 280 Q 60 320 85 300 Q 60 350 110 310 Z", name: "Rocket Fire Boost" },
      // Space Rocket Pod Base
      { id: "rocket-body", d: "M 120 200 L 180 260 L 150 290 L 90 230 Z", name: "Rocket Pod" },
      // Rocket Tail Fin Left
      { id: "rocket-fin-l", d: "M 90 230 L 70 250 L 105 260 Z", name: "Rocket Fin Left" },
      // Rocket Tail Fin Right
      { id: "rocket-fin-r", d: "M 150 290 L 160 320 L 135 305 Z", name: "Rocket Fin Right" },
      // Round Space Helmet Bubble
      { id: "helmet-glass", d: "M 160 150 A 50 50 0 1 1 260 150 A 50 50 0 1 1 160 150 Z", name: "Glass Space Helmet" },
      // Cute Kitten Head
      { id: "cat-head", d: "M 180 150 Q 210 130 240 150 Q 255 180 210 195 Q 165 180 180 150 Z", name: "Kitten Face" },
      // Kitten Ear Left
      { id: "cat-ear-l", d: "M 185 145 L 175 115 L 200 135 Z", name: "Kitten Left Ear" },
      // Kitten Ear Right
      { id: "cat-ear-r", d: "M 235 145 L 245 115 L 220 135 Z", name: "Kitten Right Ear" },
      // Kitten Cute Nose
      { id: "cat-nose", d: "M 207 165 L 213 165 L 210 169 Z", name: "Cute Kitten Nose" },
      // Space Suit Collar Connector
      { id: "suit-collar", d: "M 190 194 L 230 194 L 225 210 L 195 210 Z", name: "Space Suit Collar" },
      // Space Suit Chest Plate
      { id: "suit-chest", d: "M 180 210 L 240 210 Q 250 260 210 260 Q 170 260 180 210 Z", name: "Spacesuit Body" },
      // Little Space Chest Button
      { id: "suit-button", d: "M 205 230 A 5 5 0 1 1 215 230 A 5 5 0 1 1 205 230 Z", name: "Control Button" }
    ]
  }
];

const PASTEL_PALETTE = [
  { hex: "#FFFFFF", name: "Paper White" },
  { hex: "#FF8A65", name: "Sunset Coral" },
  { hex: "#FFA726", name: "Honey Butter" },
  { hex: "#FFE082", name: "Soft Dandelion" },
  { hex: "#A5D6A7", name: "Mint Leaf" },
  { hex: "#80CBC4", name: "Sweet Turquoise" },
  { hex: "#90CAF9", name: "Sky Pastel" },
  { hex: "#B39DDB", name: "Lavender Dream" },
  { hex: "#F48FB1", name: "Dusty Rose" },
  { hex: "#BCAAA4", name: "Warm Oak" },
  { hex: "#FFE0B2", name: "Creamy Apricot" },
  { hex: "#455A64", name: "Midnight Grey" }
];

export default function ColoringCanvas() {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("#FF8A65");
  // Multi-dimensional states for colored paths: e.g. { 'fox': { 'sky': '#90CAF9' } }
  const [coloredState, setColoredState] = useState<Record<string, Record<string, string>>>({
    fox: {},
    turtle: {},
    "space-cat": {}
  });
  const [showSparkles, setShowSparkles] = useState(false);
  const [lastColoredPart, setLastColoredPart] = useState("");

  const activePage = COLORING_PAGES[activePageIndex];
  const activePageColors = coloredState[activePage.id] || {};

  const handlePathClick = (pathId: string, partName: string) => {
    setColoredState(prev => ({
      ...prev,
      [activePage.id]: {
        ...prev[activePage.id],
        [pathId]: selectedColor
      }
    }));
    setLastColoredPart(partName);
    setShowSparkles(true);
    setTimeout(() => {
      setShowSparkles(false);
    }, 1200);
  };

  const handleReset = () => {
    setColoredState(prev => ({
      ...prev,
      [activePage.id]: {}
    }));
    setLastColoredPart("");
  };

  const handleAutoColor = () => {
    // Fun preset color helper to fill everything automatically in beautiful harmonized pastels
    const presets: Record<string, Record<string, string>> = {
      fox: {
        sky: "#90CAF9",
        ground: "#A5D6A7",
        trunk: "#BCAAA4",
        "canopy-back": "#80CBC4",
        "cloud-1": "#FFFFFF",
        "fox-tail-main": "#FF8A65",
        "fox-tail-tip": "#FFE0B2",
        "fox-body": "#FF8A65",
        "fox-head": "#FF8A65",
        "fox-cheek-left": "#FFFFFF",
        "fox-cheek-right": "#FFFFFF",
        "fox-ear-left": "#FF8A65",
        "fox-ear-left-inner": "#F48FB1",
        "fox-ear-right": "#FF8A65",
        "fox-ear-right-inner": "#F48FB1",
        "scarf-loop": "#B39DDB",
        "scarf-tail": "#B39DDB",
        "heart-ground": "#F48FB1"
      },
      turtle: {
        "ocean-sky": "#80CBC4",
        "coral-left": "#F48FB1",
        "coral-left-b": "#FF8A65",
        "coral-right": "#FFA726",
        "bubble-1": "#FFFFFF",
        "bubble-2": "#FFFFFF",
        "bubble-3": "#FFFFFF",
        "shell-rim": "#BCAAA4",
        "shell-plate-mid": "#FFE082",
        "shell-plate-top": "#A5D6A7",
        "shell-plate-left": "#A5D6A7",
        "shell-plate-right": "#A5D6A7",
        "shell-plate-bot": "#A5D6A7",
        "turtle-head": "#FFE0B2",
        "flipper-front-l": "#FFE0B2",
        "flipper-front-r": "#FFE0B2",
        "flipper-back-l": "#FFE0B2",
        "flipper-back-r": "#FFE0B2",
        "turtle-tail": "#FFE0B2"
      },
      "space-cat": {
        "space-deep": "#455A64",
        "saturn-globe": "#FFA726",
        "saturn-ring": "#FFE082",
        "star-1": "#FFE082",
        "star-2": "#FFE082",
        "rocket-flame": "#FF8A65",
        "rocket-body": "#90CAF9",
        "rocket-fin-l": "#B39DDB",
        "rocket-fin-r": "#B39DDB",
        "helmet-glass": "#FFFFFF",
        "cat-head": "#FFE0B2",
        "cat-ear-l": "#FFE0B2",
        "cat-ear-r": "#FFE0B2",
        "cat-nose": "#F48FB1",
        "suit-collar": "#B39DDB",
        "suit-chest": "#FFFFFF",
        "suit-button": "#FF8A65"
      }
    };

    setColoredState(prev => ({
      ...prev,
      [activePage.id]: presets[activePage.id] || {}
    }));
    setLastColoredPart("Magic Palette");
    setShowSparkles(true);
    setTimeout(() => {
      setShowSparkles(false);
    }, 1500);
  };

  const handleDownloadSVG = () => {
    // Generate SVG string and download it
    const svgElement = document.getElementById(`interactive-svg-${activePage.id}`);
    if (!svgElement) return;

    const svgString = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `mj-creative-${activePage.id}-artwork.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="coloring-station" className="py-16 px-6 bg-[#FCF8F2] relative overflow-hidden">
      {/* Decorative cute clouds or blobs */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#FFF3EF] rounded-full blur-2xl opacity-80 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-36 h-36 bg-[#EDF6F9] rounded-full blur-3xl opacity-80 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="bg-[#FF8A65]/10 text-[#FF8A65] font-semibold tracking-wider text-xs uppercase px-4 py-1.5 rounded-full inline-block mb-3">
            🎨 Sandbox Playground
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-fredoka text-[#2D2D2D] mb-4">
            Interactive Coloring Station
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Try before you buy! Tap any color bubble below, then click on the different spaces of the drawings to design your digital masterpiece.
          </p>
        </div>

        {/* Character Selector tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {COLORING_PAGES.map((page, index) => (
            <button
              key={page.id}
              onClick={() => {
                setActivePageIndex(index);
                setLastColoredPart("");
              }}
              className={`px-5 py-3 rounded-full font-fredoka text-sm md:text-base flex items-center gap-2 border-2 transition-all duration-300 ${
                activePageIndex === index
                  ? "bg-[#2D2D2D] text-white border-[#2D2D2D] shadow-md scale-105"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:bg-gray-50"
              }`}
            >
              <span>{page.character === "Felix" ? "🦊" : page.character === "Pip" ? "🐢" : "🐱"}</span>
              {page.name}
            </button>
          ))}
        </div>

        {/* Main Work Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls and Color Swatches (left panel) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-orange-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Paintbrush className="text-[#FF8A65]" size={22} />
                <h3 className="font-fredoka text-xl text-[#2D2D2D] font-bold">Pick Your Paint</h3>
              </div>

              {/* Palette swatches */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                {PASTEL_PALETTE.map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => setSelectedColor(color.hex)}
                    title={color.name}
                    style={{ backgroundColor: color.hex }}
                    className={`h-11 rounded-2xl relative transition-all duration-200 shadow-sm hover:scale-110 active:scale-95 border-2 ${
                      selectedColor === color.hex ? "border-[#2D2D2D] scale-105 ring-2 ring-orange-200" : "border-slate-100"
                    } ${color.hex === "#FFFFFF" ? "border-slate-300" : ""}`}
                  >
                    {selectedColor === color.hex && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className={`w-2.5 h-2.5 rounded-full ${color.hex === "#FFFFFF" ? "bg-slate-700" : "bg-white"} shadow-xs`} />
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Brush description */}
              <div className="bg-[#FCF8F2] p-4 rounded-2xl border border-orange-50 mb-6 text-center">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">
                  Active Palette Brush
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full border border-gray-300 shadow-xs"
                    style={{ backgroundColor: selectedColor }}
                  />
                  <span className="font-fredoka font-semibold text-gray-700">
                    {PASTEL_PALETTE.find((c) => c.hex === selectedColor)?.name || selectedColor}
                  </span>
                </div>
              </div>

              {/* Status and Feedback */}
              <AnimatePresence mode="wait">
                {lastColoredPart ? (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-center py-2 px-3 bg-[#EDF6F9] rounded-xl text-teal-700 font-medium text-xs flex items-center justify-center gap-2 mb-4"
                  >
                    <Sparkles className="text-teal-500 animate-spin" size={14} />
                    <span>Painted <strong>{lastColoredPart}</strong>! Beautiful!</span>
                  </motion.div>
                ) : (
                  <div className="h-8 mb-4" />
                )}
              </AnimatePresence>
            </div>

            {/* Utility buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAutoColor}
                className="w-full py-3 bg-[#E29578] hover:bg-[#d48566] text-white font-fredoka rounded-2xl transition-all duration-300 shadow-xs hover:shadow-md flex items-center justify-center gap-2 text-sm"
              >
                <Sparkles size={16} />
                Magic Auto-Harmonize
              </button>

              <button
                onClick={handleReset}
                className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-fredoka rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <RotateCcw size={16} />
                Reset Canvas Blank
              </button>

              <button
                onClick={handleDownloadSVG}
                className="w-full py-3 border-2 border-[#2D2D2D]/10 hover:border-[#2D2D2D]/30 text-[#2D2D2D] font-fredoka rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <Download size={16} />
                Save vector (SVG)
              </button>
            </div>
          </div>

          {/* Canvas display (right panel) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-orange-100 flex flex-col justify-center items-center relative min-h-[400px]">
            {/* Celebrate Floating Badge */}
            {showSparkles && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1.1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="absolute top-10 z-10 bg-white text-[#FF8A65] border-2 border-[#FF8A65] px-4 py-2 rounded-full font-fredoka text-sm shadow-lg flex items-center gap-1.5"
              >
                <Smile size={16} className="text-orange-400" />
                <span>Splash! Coloring Magic</span>
              </motion.div>
            )}

            {/* Interactive SVG Wrapper */}
            <div className="w-full max-w-[380px] aspect-square rounded-2xl bg-slate-50 border-4 border-[#2D2D2D]/10 p-2 overflow-hidden shadow-xs relative">
              <svg
                id={`interactive-svg-${activePage.id}`}
                viewBox={activePage.viewBox}
                className="w-full h-full select-none"
              >
                {/* Paint pages dynamically */}
                {activePage.paths.map((path) => {
                  const isEye = path.id.includes("eye");
                  // If it is the eye, color is always dark grey for cute cartoony pupils unless background is dark
                  const fillVal = activePageColors[path.id] || "#FFFFFF";
                  return (
                    <path
                      key={path.id}
                      id={path.id}
                      d={path.d}
                      onClick={() => handlePathClick(path.id, path.name)}
                      className={`transition-colors duration-300 cursor-pointer ${
                        isEye ? "stroke-[#2D2D2D] fill-[#2D2D2D]" : "stroke-[#2D2D2D] hover:opacity-90 hover:stroke-amber-500 hover:stroke-[3px]"
                      }`}
                      style={{
                        fill: isEye ? "#2D2D2D" : fillVal,
                        strokeLinejoin: "round",
                        strokeLinecap: "round",
                        strokeWidth: isEye ? "1.5" : "2.5"
                      }}
                    />
                  );
                })}
              </svg>
            </div>

            <p className="text-center text-xs text-gray-400 font-medium mt-4 flex items-center gap-1">
              💡 <span>Click any white region above to paint it with your active color!</span>
            </p>

            <div className="mt-6 text-center">
              <h4 className="font-fredoka font-bold text-[#2D2D2D] text-lg mb-1">{activePage.name}</h4>
              <p className="text-gray-500 text-sm max-w-md">{activePage.description}</p>
            </div>
          </div>
        </div>

        {/* Fun promo card to buy books */}
        <div className="mt-12 bg-gradient-to-r from-orange-50 to-[#FCF8F2] border border-orange-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#FF8A65]/10 rounded-2xl flex items-center justify-center text-[#FF8A65] text-3xl shrink-0">
              🎁
            </div>
            <div>
              <h4 className="font-fredoka text-xl text-[#2D2D2D] font-bold">Love coloring these friendly buddies?</h4>
              <p className="text-gray-600 text-sm md:text-base mt-1">
                Get full 30+ page collections ready for instant high-quality home printing or tablet coloring!
              </p>
            </div>
          </div>
          <a
            href="#coloring-books"
            className="px-6 py-3.5 bg-[#FF8A65] hover:bg-[#ff774e] text-white font-fredoka rounded-2xl transition-all duration-300 flex items-center gap-2 text-sm font-semibold shrink-0"
          >
            Explore Coloring Books
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
