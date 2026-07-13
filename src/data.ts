export interface Book {
  id: string;
  title: string;
  tagline: string;
  description: string;
  pagesCount: number;
  ageRecommendation: string;
  format: string;
  priceEtsy: string;
  priceGumroad: string;
  etsyUrl: string;
  gumroadUrl: string;
  accentColor: string;
  bgColor: string;
  tags: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const COLORING_BOOKS: Book[] = [
  {
    id: "baby-ocean-animals",
    title: "Baby Ocean Animals",
    tagline: "Cute little sea creatures for tiny hands",
    description: "Dive deep into adorable coloring pages with friendly baby octopuses, smiling turtles, and cute sea stars!",
    pagesCount: 35,
    ageRecommendation: "Ages 2 to 6",
    format: "High-Res PDF, printable A4",
    priceEtsy: "$4.99",
    priceGumroad: "$4.50",
    etsyUrl: "#",
    gumroadUrl: "#",
    accentColor: "#83C5BE",
    bgColor: "#EDF6F9",
    tags: ["Ocean", "Animals", "Baby", "Cute"]
  },
  {
    id: "baby-dinosaur",
    title: "Baby Dinosaur",
    tagline: "Charming prehistoric baby dinos",
    description: "Friendly baby triceratops, tiny long-necks, and happy little raptors exploring cute volcanic valleys!",
    pagesCount: 30,
    ageRecommendation: "Ages 3 to 8",
    format: "High-Res PDF, printable Letter",
    priceEtsy: "$4.99",
    priceGumroad: "$4.50",
    etsyUrl: "#",
    gumroadUrl: "#",
    accentColor: "#E29578",
    bgColor: "#FFF3EF",
    tags: ["Dinosaur", "Prehistoric", "Baby", "Adventure"]
  },
  {
    id: "the-juicy-alphabet",
    title: "The Juicy Alphabet",
    tagline: "A delicious path to learning the ABCs",
    description: "Learn the alphabet with smiling apples, joyful berries, and friendly snack characters for every letter!",
    pagesCount: 26,
    ageRecommendation: "Ages 3 to 7",
    format: "High-Res PDF, print-at-home ready",
    priceEtsy: "$5.49",
    priceGumroad: "$4.99",
    etsyUrl: "#",
    gumroadUrl: "#",
    accentColor: "#DDA15E",
    bgColor: "#FEFAE0",
    tags: ["Alphabet", "Fruits", "Educational", "Cute"]
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How do I receive the coloring books after purchase?",
    answer: "Since these are 100% digital products, your files will be available for instant download immediately after purchase! You'll receive a link from Etsy or Gumroad to download your high-quality, print-ready PDF files and PNG packs."
  },
  {
    question: "Can I color these on my iPad or tablet?",
    answer: "Absolutely! We include high-resolution transparent PNG files for books like 'Whimsical Forest Animals' and 'Cozy Autumn Hygge' which can be easily imported into Procreate, Sketchbook, or any digital coloring app of your choice."
  },
  {
    question: "What is the best way to print the coloring pages?",
    answer: "We recommend printing on standard Letter size (8.5x11 inches) or A4 paper. For the best coloring experience (especially when using markers, watercolors, or colored pencils), we highly suggest using high-weight cardstock or heavy drawing paper (110lb or 200gsm)."
  },
  {
    question: "Can I print a coloring page more than once?",
    answer: "Yes, that's the wonderful advantage of digital coloring books! Once purchased, you can print your favorite pages as many times as you like for personal use. It's perfect for testing out different color palettes or sharing with siblings and friends!"
  },
  {
    question: "Do you offer commercial licenses for schools or libraries?",
    answer: "All purchases are strictly for personal use only. If you are a teacher, librarian, or therapist looking to print pages for a classroom or clinic, please reach out to us via Etsy messages and we will gladly arrange a custom group license for you!"
  }
];
