import { useState, useMemo } from "react";
import { COLORING_BOOKS } from "../data";
import BookCard from "./BookCard";
import { Search, Sparkles, Filter, Grid } from "lucide-react";

export default function BookShowcase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  // Dynamically extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    COLORING_BOOKS.forEach(book => book.tags.forEach(t => tags.add(t)));
    return ["all", ...Array.from(tags)];
  }, []);

  // Filter books based on search & tag selections
  const filteredBooks = useMemo(() => {
    return COLORING_BOOKS.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            book.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            book.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTag = selectedTag === "all" || book.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <section id="coloring-books" className="py-20 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-orange-50 text-[#FF8A65] font-semibold text-xs uppercase px-4 py-1.5 rounded-full mb-3 shadow-2xs">
            <Sparkles size={12} className="animate-pulse" />
            <span>Premium Collections</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-fredoka text-[#2D2D2D] mb-4">
            Our Digital Coloring Books
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
            Lovingly hand-drawn high-resolution collections. Download instantly, print at home as many times as you like, or import into Procreate!
          </p>
        </div>

        {/* Filter bar and search panel */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-[#FCF8F2] p-4 rounded-3xl border border-orange-50">
          
          {/* Tag Selectors */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mr-2 ml-1">
              <Filter size={13} className="text-[#FF8A65]" />
              <span>Filter:</span>
            </div>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-xs font-fredoka uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedTag === tag
                    ? "bg-[#FF8A65] text-white shadow-sm"
                    : "bg-white hover:bg-slate-100 text-slate-600 border border-slate-100"
                }`}
              >
                {tag === "all" ? "🌈 Show All" : tag}
              </button>
            ))}
          </div>

          {/* Search Input bar */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search coloring books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-2xl outline-hidden focus:border-[#FF8A65] focus:ring-2 focus:ring-orange-100 transition-all duration-200 text-slate-700"
            />
          </div>

        </div>

        {/* Dynamic Showcase Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50/50 rounded-3xl border-2 border-dashed border-slate-200">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="font-fredoka text-xl font-bold text-[#2D2D2D] mb-1">No Coloring Books Found</h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              We couldn't find any books matching "{searchQuery}". Try selecting a different category tag or search term!
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTag("all");
              }}
              className="mt-4 px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl font-fredoka text-xs font-bold transition-colors duration-200 cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Feature list benefits footer */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-slate-100 pt-12">
          <div className="text-center sm:text-left flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-xl shrink-0 mx-auto sm:mx-0">
              ⚡
            </div>
            <div>
              <h4 className="font-fredoka font-bold text-[#2D2D2D] text-sm md:text-base">Instant Delivery</h4>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                No shipping wait. Buy today and color within seconds! High-quality print-ready PDFs delivered instantly to your inbox.
              </p>
            </div>
          </div>
          <div className="text-center sm:text-left flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EDF6F9] text-teal-500 flex items-center justify-center text-xl shrink-0 mx-auto sm:mx-0">
              ♾️
            </div>
            <div>
              <h4 className="font-fredoka font-bold text-[#2D2D2D] text-sm md:text-base">Print Infinite Times</h4>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                Made a mistake or want to try different markers? Just print the page again! Ideal for siblings or stress-testing palettes.
              </p>
            </div>
          </div>
          <div className="text-center sm:text-left flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F3F0FF] text-purple-500 flex items-center justify-center text-xl shrink-0 mx-auto sm:mx-0">
              ✏️
            </div>
            <div>
              <h4 className="font-fredoka font-bold text-[#2D2D2D] text-sm md:text-base">Procreate & iPad Friendly</h4>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                Transparent high-res files included. Import directly into drawing programs to color on your digital drawing tablets!
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
