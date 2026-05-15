import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Flame, Shield, Bell, Droplets, Wrench, Siren, PhoneCall, Mail, MapPin, Menu, X,
  CheckCircle2, ArrowRight, Award, Users, Briefcase, Clock, Sparkles, ChevronLeft, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LANGUAGE_EVENT, getStoredLanguage, type LanguageCode } from "@/lib/language";

import logo from "@/assets/vyraaz-logo.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import hydrantImg from "@/assets/product-hydrant.jpg";
import extImg from "@/assets/product-extinguisher.jpg";
import alarmImg from "@/assets/product-alarm.jpg";
import pumpImg from "@/assets/product-pump.jpg";

import p1 from "@/assets/projects/project-1.jpeg";
import p2 from "@/assets/projects/project-2.jpeg";
import p3 from "@/assets/projects/project-3.jpeg";
import p4 from "@/assets/projects/project-4.jpeg";
import p5 from "@/assets/projects/project-5.jpeg";
import p6 from "@/assets/projects/project-6.jpeg";
import p7 from "@/assets/projects/project-7.jpeg";
import p8 from "@/assets/projects/project-8.jpeg";
import p9 from "@/assets/projects/project-9.jpeg";
import p10 from "@/assets/projects/project-10.jpeg";

import clientAlimco from "@/assets/clients/alimco.png";
import clientDavv from "@/assets/clients/davv.png";
import clientHp from "@/assets/clients/hp.png";
import clientNexa from "@/assets/clients/nexa.png";

const reviews = [
  { name: "Rohit Sharma", role: "Facility Manager, Indore", rating: 5, text: "Vyraaz installed our entire hydrant and alarm system on time. Very professional team and great after-sales support." },
  { name: "Priya Verma", role: "Operations Lead, Bhopal", rating: 5, text: "Quick refilling service and honest pricing. Their AMC plan keeps our office completely worry-free." },
  { name: "Anand Patel", role: "Plant Head, Pithampur", rating: 5, text: "Highly skilled engineers. They demonstrated every extinguisher to our staff. Truly a safety-first company." },
  { name: "Kavita Joshi", role: "School Principal, Indore", rating: 5, text: "Trained our staff and students with a live demo. Equipment is top quality and certified." },
  { name: "Sandeep Mehra", role: "Hotel Owner, Ujjain", rating: 5, text: "Smooth installation across 4 floors. Documentation for fire NOC was handled end-to-end. Recommended!" },
  { name: "Neha Gupta", role: "Hospital Admin, Indore", rating: 5, text: "Reliable AMC, prompt response and genuine spares. Vyraaz is now our default fire safety partner." },
  { name: "Vikram Singh", role: "Builder, Dewas", rating: 5, text: "Best pricing in MP for fire pumps and sprinklers. Delivered ahead of schedule." },
  { name: "Aarti Nair", role: "Restaurant Owner, Indore", rating: 4, text: "Friendly team, fast quotation, and the kitchen extinguisher setup is perfect. Will hire again." },
  { name: "Manish Tiwari", role: "Warehouse Manager, Mhow", rating: 5, text: "Saved us during an audit — their team mobilised within hours. Quality work and clean cabling." },
  { name: "Sneha Iyer", role: "HR, IT Park Indore", rating: 5, text: "Professional drills, clear training material and certified extinguishers. Our team feels much safer." },
];

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Vyraaz Firetech | Fire Protection Systems Indore" },
      { name: "description", content: "Vyraaz Firetech Indore — fire hydrant, extinguisher, alarm, sprinkler and pump systems. Sales, installation, refilling and AMC." },
    ],
  }),
});

const features = [
  { icon: Flame, label: "Fire Extinguisher Service" },
  { icon: Droplets, label: "Fire Hydrant & Sprinkler Service" },
  { icon: Bell, label: "Fire Alarm System" },
  { icon: Wrench, label: "AMC of Fire System" },
  { icon: Users, label: "Demonstration Service" },
  { icon: Siren, label: "Extinguisher Supply & Refilling" },
];

const products = [
  { img: hydrantImg, title: "Fire Hydrant", desc: "A complete range of fire fighting equipment — hydrants, hoses, nozzles & landing valves — engineered to combat fires effectively and efficiently." },
  { img: extImg, title: "Fire Extinguisher", desc: "ABC, BC, CO₂, foam, water and K-type extinguishers suitable for every fire class, with sales, installation and on-time refilling." },
  { img: alarmImg, title: "Fire Alarm", desc: "Conventional and addressable fire alarm systems with smoke detectors, MCPs and panels — early detection, faster response." },
];

const projects = [p1, p2, p3, p4, p5, p6, p7, p8, p9];

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const homeLabels: Record<LanguageCode, {
  nav: string[];
  ctaExplore: string;
  ctaQuote: string;
  trustBadge: string;
  marquee: string[];
  stats: [string, string][];
}> = {
  en: {
    nav: ["Home", "About", "Products", "Projects", "Contact"],
    ctaExplore: "Explore Products",
    ctaQuote: "Request a Quote",
    trustBadge: "Indore's Trusted Fire Safety Partner",
    marquee: ["Fire Alarm System", "Fire Fighting Pumps", "Fire Hydrant System", "Fire Extinguishers", "Sprinkler Systems"],
    stats: [["10+", "Years"], ["100+", "Projects"], ["24/7", "Support"]],
  },
  hi: {
    nav: ["होम", "हमारे बारे में", "उत्पाद", "प्रोजेक्ट्स", "संपर्क"],
    ctaExplore: "उत्पाद देखें",
    ctaQuote: "कोटेशन लें",
    trustBadge: "इंदौर का भरोसेमंद फायर सेफ्टी पार्टनर",
    marquee: ["फायर अलार्म सिस्टम", "फायर फाइटिंग पंप", "फायर हाइड्रेंट सिस्टम", "फायर एक्सटिंग्विशर", "स्प्रिंकलर सिस्टम"],
    stats: [["10+", "साल"], ["100+", "प्रोजेक्ट्स"], ["24/7", "सपोर्ट"]],
  },
  mr: {
    nav: ["मुख्यपृष्ठ", "आमच्याबद्दल", "उत्पादने", "प्रकल्प", "संपर्क"],
    ctaExplore: "उत्पादने पाहा",
    ctaQuote: "कोटेशन मागवा",
    trustBadge: "इंदौरमधील विश्वासार्ह फायर सेफ्टी पार्टनर",
    marquee: ["फायर अलार्म सिस्टम", "फायर फाइटिंग पंप", "फायर हायड्रंट सिस्टम", "फायर एक्स्टिंग्विशर", "स्प्रिंकलर सिस्टम"],
    stats: [["10+", "वर्षे"], ["100+", "प्रकल्प"], ["24/7", "सपोर्ट"]],
  },
  ta: {
    nav: ["முகப்பு", "எங்களை பற்றி", "தயாரிப்புகள்", "திட்டங்கள்", "தொடர்பு"],
    ctaExplore: "தயாரிப்புகளை பார்க்க",
    ctaQuote: "விலை கேட்டறிய",
    trustBadge: "இந்தூரின் நம்பகமான தீ பாதுகாப்பு கூட்டாளி",
    marquee: ["தீ அலாரம் அமைப்பு", "தீ அணைப்பு பம்புகள்", "தீ ஹைட்ரண்ட் அமைப்பு", "தீ அணைப்பான்", "ஸ்பிரிங்க்ளர் அமைப்பு"],
    stats: [["10+", "ஆண்டுகள்"], ["100+", "திட்டங்கள்"], ["24/7", "ஆதரம்"]],
  },
  kn: {
    nav: ["ಮುಖಪುಟ", "ನಮ್ಮ ಬಗ್ಗೆ", "ಉತ್ಪನ್ನಗಳು", "ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು", "ಸಂಪರ್ಕ"],
    ctaExplore: "ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ",
    ctaQuote: "ದರ ಕೇಳಿ",
    trustBadge: "ಇಂದೋರ್‌ನ ವಿಶ್ವಾಸಾರ್ಹ ಫೈರ್ ಸೇಫ್ಟಿ ಪಾಲುದಾರ",
    marquee: ["ಫೈರ್ ಅಲಾರ್ಮ್ ಸಿಸ್ಟಂ", "ಫೈರ್ ಫೈಟಿಂಗ್ ಪಂಪ್ಸ್", "ಫೈರ್ ಹೈಡ್ರಂಟ್ ಸಿಸ್ಟಂ", "ಫೈರ್ ಎಕ್ಸ್ಟಿಂಗ್ವಿಷರ್", "ಸ್ಪ್ರಿಂಕ್ಲರ್ ಸಿಸ್ಟಂ"],
    stats: [["10+", "ವರ್ಷಗಳು"], ["100+", "ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು"], ["24/7", "ಸಹಾಯ"]],
  },
  te: {
    nav: ["హోమ్", "మా గురించి", "ఉత్పత్తులు", "ప్రాజెక్టులు", "సంప్రదించండి"],
    ctaExplore: "ఉత్పత్తులు చూడండి",
    ctaQuote: "కొటేషన్ పొందండి",
    trustBadge: "ఇందోర్‌లో నమ్మకమైన ఫైర్ సేఫ్టీ భాగస్వామి",
    marquee: ["ఫైర్ అలారం సిస్టమ్", "ఫైర్ ఫైటింగ్ పంపులు", "ఫైర్ హైడ్రెంట్ సిస్టమ్", "ఫైర్ ఎక్స్‌టింగ్విషర్", "స్ప్రింక్లర్ సిస్టమ్"],
    stats: [["10+", "సంవత్సరాలు"], ["100+", "ప్రాజెక్టులు"], ["24/7", "సపోర్ట్"]],
  },
  gu: {
    nav: ["હોમ", "અમારા વિશે", "ઉત્પાદનો", "પ્રોજેક્ટ્સ", "સંપર્ક"],
    ctaExplore: "ઉત્પાદનો જુઓ",
    ctaQuote: "ક્વોટેશન મેળવો",
    trustBadge: "ઇન્દોરનો વિશ્વસનીય ફાયર સેફ્ટી ભાગીદાર",
    marquee: ["ફાયર એલાર્મ સિસ્ટમ", "ફાયર ફાઇટિંગ પમ્પ્સ", "ફાયર હાઇડ્રન્ટ સિસ્ટમ", "ફાયર એક્સ્ટિંગ્વિશર", "સ્પ્રિંકલર સિસ્ટમ"],
    stats: [["10+", "વર્ષ"], ["100+", "પ્રોજેક્ટ્સ"], ["24/7", "સપોર્ટ"]],
  },
  bn: {
    nav: ["হোম", "আমাদের সম্পর্কে", "পণ্য", "প্রজেক্ট", "যোগাযোগ"],
    ctaExplore: "পণ্য দেখুন",
    ctaQuote: "কোটেশন নিন",
    trustBadge: "ইন্দোরের বিশ্বস্ত ফায়ার সেফটি পার্টনার",
    marquee: ["ফায়ার অ্যালার্ম সিস্টেম", "ফায়ার ফাইটিং পাম্প", "ফায়ার হাইড্র্যান্ট সিস্টেম", "ফায়ার এক্সটিংগুইশার", "স্প্রিংকলার সিস্টেম"],
    stats: [["10+", "বছর"], ["100+", "প্রজেক্ট"], ["24/7", "সাপোর্ট"]],
  },
};

function FireDivider() {
  return (
    <div aria-hidden className="relative w-full py-10 md:py-16 overflow-hidden">
      {/* hazard tape strip */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-6 md:h-8 opacity-[0.08] hazard-tape" />
      {/* glowing ember bar */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-fire to-transparent" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-12 bg-gradient-to-r from-transparent via-fire/20 to-transparent blur-2xl" />

      <div className="relative max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* left flames */}
        <div className="flex items-end gap-3 md:gap-5 opacity-80">
          <Flame className="w-3 h-3 md:w-4 md:h-4 text-fire/50 animate-flicker" style={{ animationDelay: "0.2s" }} strokeWidth={2.4} />
          <Flame className="w-4 h-4 md:w-6 md:h-6 text-ember animate-flicker" style={{ animationDelay: "0.6s" }} strokeWidth={2.2} />
          <Flame className="w-3 h-3 md:w-5 md:h-5 text-fire/70 animate-flicker" style={{ animationDelay: "0.4s" }} strokeWidth={2.2} />
        </div>

        {/* center medallion */}
        <div className="relative grid place-items-center">
          <span className="absolute -inset-3 rounded-full bg-fire/30 blur-2xl animate-pulse" />
          <span className="absolute inset-0 rounded-full border border-fire/30 animate-ping" />
          <span className="relative grid place-items-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-fire via-ember to-fire/80 shadow-fire border border-white/20">
            <Flame className="w-6 h-6 md:w-7 md:h-7 text-white drop-shadow animate-flicker" fill="currentColor" strokeWidth={1.5} />
          </span>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-fire/80 font-bold whitespace-nowrap">
            Vyraaz
          </span>
        </div>

        {/* right flames */}
        <div className="flex items-end gap-3 md:gap-5 opacity-80">
          <Flame className="w-3 h-3 md:w-5 md:h-5 text-fire/70 animate-flicker" style={{ animationDelay: "0.5s" }} strokeWidth={2.2} />
          <Flame className="w-4 h-4 md:w-6 md:h-6 text-ember animate-flicker" style={{ animationDelay: "0.3s" }} strokeWidth={2.2} />
          <Flame className="w-3 h-3 md:w-4 md:h-4 text-fire/50 animate-flicker" style={{ animationDelay: "0.7s" }} strokeWidth={2.4} />
        </div>
      </div>
    </div>
  );
}

function ClientReviews() {
  const row1 = reviews.slice(0, 5);
  const row2 = reviews.slice(5);
  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-card/30 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Voices of Trust</div>
        <h2 className="font-display text-3xl md:text-5xl uppercase">
          What Our <span className="text-fire">Clients Say</span>
        </h2>
        <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
          Real stories from facilities, hotels, hospitals and industries we protect across Madhya Pradesh.
        </p>
      </div>

      <div className="space-y-5 md:space-y-6">
        <ReviewMarquee items={row1} />
        <ReviewMarquee items={row2} reverse />
      </div>
    </section>
  );
}

function ReviewMarquee({ items, reverse = false }: { items: typeof reviews; reverse?: boolean }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);

  // Seamless infinite auto-scroll: triple the list, jump back to middle when crossing a third.
  const tripled = [...items, ...items, ...items];

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    // Start at the middle copy so we can scroll either direction infinitely.
    const setStart = () => {
      el.scrollLeft = el.scrollWidth / 3;
    };
    setStart();
    const onResize = () => setStart();
    window.addEventListener("resize", onResize);

    let raf = 0;
    let last = performance.now();
    const speed = 30; // px/sec
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!pausedRef.current && el) {
        el.scrollLeft += (reverse ? -1 : 1) * speed * dt;
        const third = el.scrollWidth / 3;
        if (el.scrollLeft >= third * 2) el.scrollLeft -= third;
        else if (el.scrollLeft <= 0) el.scrollLeft += third;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [reverse, items.length]);

  const step = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const cardWidth = card ? (card as HTMLElement).offsetWidth + 16 : 220;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onTouchStart={() => (pausedRef.current = true)}
      onTouchEnd={() => {
        // resume after a short delay so user momentum scroll isn't fought
        setTimeout(() => (pausedRef.current = false), 1500);
      }}
    >
      <div
        ref={scrollerRef}
        className="overflow-x-auto no-scrollbar [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex w-max gap-4 md:gap-6">
          {tripled.map((r, i) => (
            <article
              key={`${r.name}-${i}`}
              className="shrink-0 w-[calc((100vw-3rem-1rem)/2)] md:w-[22rem] rounded-2xl border border-border bg-background p-5 md:p-6 shadow-sm flex flex-col gap-3"
            >
              <div className="flex items-center gap-1 text-fire">
                {Array.from({ length: 5 }).map((_, k) => (
                  <svg key={k} width="14" height="14" viewBox="0 0 24 24" fill={k < r.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-sm md:text-[0.95rem] text-foreground/90 leading-relaxed line-clamp-5">
                "{r.text}"
              </p>
              <div className="mt-auto pt-3 border-t border-border/60">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-fire/15 text-fire grid place-items-center font-semibold text-sm">
                    {r.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold truncate">{r.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{r.role}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        type="button"
        aria-label="Previous reviews"
        onClick={() => step(-1)}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full bg-background/90 backdrop-blur border border-border shadow-md grid place-items-center hover:bg-fire hover:text-white hover:border-fire transition"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        aria-label="Next reviews"
        onClick={() => step(1)}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full bg-background/90 backdrop-blur border border-border shadow-md grid place-items-center hover:bg-fire hover:text-white hover:border-fire transition"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<LanguageCode>("en");
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  useEffect(() => {
    setLanguage(getStoredLanguage());

    const syncLanguage = (event: Event) => {
      const code = (event as CustomEvent<LanguageCode>).detail;
      if (code) {
        setLanguage(code);
      }
    };

    window.addEventListener(LANGUAGE_EVENT, syncLanguage);
    return () => window.removeEventListener(LANGUAGE_EVENT, syncLanguage);
  }, []);

  const copy = homeLabels[language] ?? homeLabels.en;
  const navTargets = ["top", "about", "products", "projects", "contact"] as const;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center group">
            <img src={logo} alt="Vyraaz Firetech" className="h-10 md:h-12 w-auto object-contain" />
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {copy.nav.map((label, index) => (
              <a key={navTargets[index]} href={`#${navTargets[index]}`} className="relative group text-foreground/80 hover:text-foreground transition">
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fire group-hover:w-full transition-all" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <a href="tel:+918103498409" className="hidden sm:block">
              <Button className="bg-fire text-white hover:opacity-90 shadow-glow">
                <PhoneCall className="w-4 h-4 mr-2" /> 8103 498 409
              </Button>
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden w-11 h-11 grid place-items-center rounded-lg border border-border bg-card hover:bg-muted transition"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="px-6 py-4 flex flex-col gap-1">
              {copy.nav.map((label, index) => (
                <a
                  key={navTargets[index]}
                  href={`#${navTargets[index]}`}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition"
                >
                  {label}
                </a>
              ))}
              <a href="tel:+918103498409" className="sm:hidden mt-2">
                <Button className="w-full bg-fire text-white shadow-glow">
                  <PhoneCall className="w-4 h-4 mr-2" /> 8103 498 409
                </Button>
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="top" ref={heroRef} className="relative pt-28 pb-16 overflow-hidden bg-background">
        <div className="relative w-full max-w-7xl mx-auto px-6 text-left">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.15 } } }} className="max-w-3xl">
            <motion.h1
              variants={fadeUp}
              className="font-display uppercase leading-[0.85] tracking-tight text-6xl sm:text-7xl md:text-8xl"
            >
              <span className="block bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
                Vyraaz
              </span>
              <span
                className="block bg-gradient-to-br from-fire via-ember to-fire bg-clip-text text-transparent"
                style={{ filter: "drop-shadow(0 0 30px rgba(239,68,68,0.5))" }}
              >
                Firetech
              </span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-black"
          >
            <video
              src="/hero-bg.mp4"
              poster="/hero-poster.jpg"
              controls
              preload="metadata"
              playsInline
              className="w-full h-auto block"
            />
          </motion.div>

          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.15 } } }} className="max-w-3xl">
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <a href="#products">
                <Button size="lg" className="bg-fire text-white h-14 px-8 text-base shadow-fire hover:opacity-90 group">
                  {copy.ctaExplore}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base border-border bg-background/40 backdrop-blur hover:bg-card">
                  {copy.ctaQuote}
                </Button>
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fire/50 bg-fire/10 backdrop-blur-sm text-foreground text-[10px] md:text-xs uppercase tracking-[0.3em] shadow-fire">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fire opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-fire" />
              </span>
              {copy.trustBadge}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-14 grid grid-cols-3 max-w-md gap-6">
              {copy.stats.map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-4xl md:text-5xl text-fire">{n}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative py-4 md:py-6 border-y border-border bg-card/40 overflow-hidden">
        <div className="flex marquee-track-fast gap-8 md:gap-16 whitespace-nowrap font-display text-xl md:text-5xl uppercase">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex gap-8 md:gap-16 items-center">
              {[...copy.marquee.flatMap((item) => [item, "•"])].map((t, j) => (
                <span key={j} className={t === "•" ? "text-brand" : "text-foreground/40 hover:text-foreground transition"}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <FireDivider />
      {/* ABOUT */}
      <section id="about" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative">
            <div className="absolute -inset-4 bg-fire opacity-20 blur-3xl rounded-full" />
            <img src={pumpImg} alt="Fire fighting pump" loading="lazy" width={1024} height={1024} className="relative rounded-2xl border border-border shadow-2xl" />
            <div className="absolute -bottom-8 -right-4 md:-right-12 bg-fire text-white p-6 rounded-2xl shadow-fire max-w-[220px]">
              <div className="font-display text-5xl">10+</div>
              <div className="text-xs uppercase tracking-[0.2em] mt-1 opacity-90">Years of experience in this field</div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-ember mb-4">Welcome to</motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-5xl md:text-6xl uppercase leading-[1] mb-6">
              Vyraaz <span className="text-fire">Firetech</span><br/>System
            </motion.h2>
            <motion.p variants={fadeUp} className="text-foreground/75 leading-relaxed mb-8">
              Vyraaz Firetech — Your Trusted Partner in Safety. We are a well-established seller, distributor, supplier and trader of high-quality fire fighting equipment and a wide range of safety products. With years of experience in the industry, we have earned the trust of countless customers by providing top-notch products and services that ensure the safety and security of people and property.
            </motion.p>
            <motion.ul variants={fadeUp} className="space-y-4">
              {[
                ["Quality Assurance", "We supply only the highest quality products that meet or exceed industry standards, including ISI marking for fire hydrant accessories."],
                ["Expertise", "Years of experience giving us deep knowledge of fire safety and security products, enabling expert advice and solutions."],
                ["Customer-Centric Approach", "We prioritize our customers' needs and satisfaction with personalized solutions and excellent support."],
                ["Reliability", "Our products are known for reliability and durability, performing effectively when you need them most."],
                ["Competitive Pricing", "Competitive pricing without compromising on product quality — making safety affordable for all."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4 group">
                  <CheckCircle2 className="w-6 h-6 text-brand shrink-0 mt-0.5 group-hover:scale-110 transition" />
                  <div>
                    <div className="font-semibold text-foreground">{t}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{d}</div>
                  </div>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      <FireDivider />
      {/* FEATURES */}
      <section className="relative py-24 bg-linear-to-b from-background via-card/40 to-background border-y border-border overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-fire opacity-20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-ember opacity-20 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12 md:mb-16">
            <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-ember mb-3">Some Features & Benefits</div>
            <h2 className="font-display text-3xl md:text-6xl uppercase">What We <span className="text-fire">Cover</span></h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-fire" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className={`group relative aspect-square rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-500 ${
                  i % 2 === 0
                    ? "bg-fire text-white shadow-fire md:translate-y-3"
                    : "bg-background/70 backdrop-blur border border-border hover:border-brand hover:shadow-glow"
                }`}
              >
                {/* Shine sweep */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                {/* Glow blob */}
                <div className={`pointer-events-none absolute -inset-6 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${i % 2 === 0 ? "bg-white/20" : "bg-fire opacity-0 group-hover:opacity-30"}`} />

                <div
                  className={`relative w-10 h-10 md:w-14 md:h-14 rounded-xl grid place-items-center mb-2 md:mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${
                    i % 2 === 0
                      ? "bg-white/15 ring-1 ring-white/30 text-white"
                      : "bg-fire text-white shadow-fire"
                  }`}
                >
                  <f.icon
                    className="w-5 h-5 md:w-7 md:h-7"
                    {...(i % 2 === 0
                      ? { fill: "#ffffff", stroke: "#000000", strokeWidth: 1.75 }
                      : {})}
                  />
                </div>
                <div className="relative font-display text-sm md:text-xl uppercase tracking-wider leading-tight">{f.label}</div>
                <div className={`relative mt-1 md:mt-2 h-0.5 w-0 group-hover:w-8 transition-all duration-500 ${i % 2 === 0 ? "bg-white" : "bg-fire"}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FireDivider />
      {/* PRODUCTS */}
      <section id="products" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Illuminating Protection</div>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
              Our <span className="text-fire">Products</span>
            </h2>
            <p className="mt-6 text-foreground/70 text-lg">
              Your beacon of safety in fire prevention and control — a curated range of certified equipment, engineered for performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-brand transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-background">
                  <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-2xl uppercase tracking-wide">{p.title}</h3>
                    <div className="w-10 h-10 rounded-full border border-border grid place-items-center group-hover:bg-fire group-hover:border-transparent transition">
                      <ArrowRight className="w-4 h-4 group-hover:text-white transition" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  {p.title === "Fire Hydrant" && (
                    <Link to="/products/fire-hydrant" className="absolute inset-0" aria-label="View Fire Hydrant products" />
                  )}
                  {p.title === "Fire Extinguisher" && (
                    <Link to="/products/fire-extinguisher" className="absolute inset-0" aria-label="View Fire Extinguisher products" />
                  )}
                  {p.title === "Fire Alarm" && (
                    <Link to="/products/fire-alarm" className="absolute inset-0" aria-label="View Fire Alarm products" />
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <FireDivider />
      {/* PROJECTS */}
      <section id="projects" className="relative py-32 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Site Installations</div>
              <h2 className="font-display text-5xl md:text-7xl uppercase">Our <span className="text-fire">Projects</span></h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              A glimpse of fire safety installations our team has executed across Indore and Madhya Pradesh.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {projects.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="relative group overflow-hidden rounded-xl border border-border aspect-square"
              >
                <img src={src} alt={`Vyraaz Firetech project ${i + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition" />
                <div className="absolute bottom-0 left-0 p-5 translate-y-2 group-hover:translate-y-0 transition">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-ember">Project / 0{i + 1}</div>
                  <div className="font-display text-xl uppercase">Site Installation</div>
                </div>
              </motion.div>
            ))}
            {/* Mobile-only extra project */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="md:hidden relative group overflow-hidden rounded-xl border border-border aspect-square"
            >
              <img src={p10} alt="Vyraaz Firetech fire extinguisher installation" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition" />
              <div className="absolute bottom-0 left-0 p-5 translate-y-2 group-hover:translate-y-0 transition">
                <div className="text-[10px] uppercase tracking-[0.3em] text-ember">Project / 10</div>
                <div className="font-display text-xl uppercase">Fire Extinguisher</div>
              </div>
            </motion.div>
          </div>

          {/* Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-24">
            {[
              { n: "100+", l: "Total Projects", icon: Briefcase, filled: false },
              { n: "1200+", l: "Happy Customers", icon: Users, filled: true },
              { n: "50+", l: "Our Team", icon: Award, filled: true },
              { n: "10+", l: "Years Experience", icon: Clock, filled: false },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden p-6 md:p-8 rounded-2xl border transition-all duration-500 ${
                  s.filled
                    ? "bg-fire border-transparent text-white shadow-fire md:translate-y-6 hover:shadow-glow"
                    : "bg-background/60 border-border backdrop-blur hover:border-brand hover:shadow-fire"
                }`}
              >
                {/* glow blob */}
                <div
                  className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl transition-opacity duration-500 ${
                    s.filled
                      ? "bg-white/20 opacity-40 group-hover:opacity-70"
                      : "bg-fire opacity-0 group-hover:opacity-25"
                  }`}
                />
                <div className="relative flex flex-col items-center text-center">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-xl grid place-items-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${
                      s.filled
                        ? "bg-white/15 text-white ring-1 ring-white/30"
                        : "bg-fire text-white shadow-fire"
                    }`}
                  >
                    <s.icon className="w-6 h-6" />
                  </div>
                  <div
                    className={`font-display text-4xl md:text-6xl leading-none ${
                      s.filled ? "text-white" : "text-fire"
                    }`}
                  >
                    {s.n}
                  </div>
                  <div
                    className={`text-[10px] md:text-xs uppercase tracking-[0.25em] mt-3 ${
                      s.filled ? "text-white/80" : "text-muted-foreground"
                    }`}
                  >
                    {s.l}
                  </div>
                  <div
                    className={`mt-4 h-0.5 w-8 transition-all duration-500 group-hover:w-16 ${
                      s.filled ? "bg-white/70" : "bg-fire"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FireDivider />
      {/* WHY CHOOSE */}
      <section className="relative py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Why Choose Vyraaz</div>
            <h2 className="font-display text-5xl md:text-7xl uppercase">Safety You Can <span className="text-fire">Count On</span></h2>
          </motion.div>
          <div className="grid grid-cols-3 gap-3 md:gap-6">
            {[
              { icon: Shield, t: "Certified Equipment", d: "ISI-marked, tested to Indian fire safety standards." },
              { icon: Wrench, t: "Expert Installation", d: "Trained engineers ensure code-compliant setup." },
              { icon: PhoneCall, t: "24/7 Emergency Support", d: "Fast response across Indore, anytime." },
            ].map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative p-4 md:p-10 rounded-2xl md:rounded-3xl border border-border bg-card/50 backdrop-blur hover:border-brand transition-all overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-fire opacity-0 group-hover:opacity-20 blur-3xl rounded-full transition" />
                <div className="relative">
                  <div className="w-9 h-9 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-fire grid place-items-center text-white mb-3 md:mb-6 shadow-fire">
                    <f.icon className="w-4 h-4 md:w-7 md:h-7" />
                  </div>
                  <h3 className="font-display text-sm md:text-2xl uppercase mb-1.5 md:mb-3 leading-tight">{f.t}</h3>
                  <p className="text-[11px] md:text-base text-muted-foreground leading-snug md:leading-relaxed">{f.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FireDivider />
      {/* OUR CLIENTS */}
      <section className="relative py-16 md:py-28 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Our Clients</div>
            <h2 className="font-display text-5xl md:text-7xl uppercase">Trusted by <span className="text-fire">Industry Leaders</span></h2>
            <p className="text-foreground/70 mt-4 md:mt-6 text-sm md:text-base">
              From government enterprises to leading automotive and energy brands, organisations across India rely on Vyraaz Firetech for their fire safety needs.
            </p>
          </motion.div>

          <ClientsCarousel />
        </div>
      </section>

      <FireDivider />
      {/* CONTACT */}
      <section id="contact" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-brand-dark/30 to-background" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Get in Touch</div>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] mb-6">
              Need a fire safety <span className="text-fire">audit?</span>
            </h2>
            <p className="text-foreground/75 text-lg mb-12">
              Talk to our experts today. We provide free site surveys and customized quotations across Indore and Madhya Pradesh.
            </p>
            <div className="space-y-6">
              {[
                { icon: PhoneCall, label: "Call Us", value: "+91 8103 498 409", href: "tel:+918103498409" },
                { icon: Mail, label: "Email Us", value: "vyraazfiretech@gmail.com", href: "mailto:vyraazfiretech@gmail.com" },
                { icon: MapPin, label: "Visit Us", value: "46, Shop, Sch. No. 356, Mechanic Nagar Main Rd, near Tower Square, Bhanwar Kuwa, Indore, MP 452001" },
              ].map((c) => (
                <a key={c.label} href={c.href} className="flex items-start gap-5 group">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-fire grid place-items-center text-white shrink-0 pulse-ring">
                      <c.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.label}</div>
                    <div className="font-medium text-lg group-hover:text-ember transition">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget as HTMLFormElement;
              const data = new FormData(f);
              const name = String(data.get("name") || "").trim().slice(0, 100);
              const phone = String(data.get("phone") || "").trim().slice(0, 20);
              const email = String(data.get("email") || "").trim().slice(0, 100);
              const message = String(data.get("message") || "").trim().slice(0, 1000);
              if (!name || !phone || !email || !message) {
                alert("Please fill in all fields before submitting.");
                return;
              }
              const text =
                `*New Enquiry — Vyraaz Firetech*%0A%0A` +
                `*Name:* ${encodeURIComponent(name)}%0A` +
                `*Phone:* ${encodeURIComponent(phone)}%0A` +
                `*Email:* ${encodeURIComponent(email)}%0A` +
                `*Requirement:* ${encodeURIComponent(message)}`;
              window.open(`https://wa.me/918103498409?text=${text}`, "_blank");
              f.reset();
            }}
            className="bg-card/70 backdrop-blur-xl border border-border rounded-3xl p-8 md:p-10 space-y-5 shadow-2xl"
          >
            <h3 className="font-display text-3xl uppercase mb-2">Request a Quote</h3>
            <p className="text-sm text-muted-foreground mb-6">Fill the form and send your enquiry directly to us on WhatsApp.</p>
            {[
              { ph: "Your Name", type: "text", name: "name", maxLength: 100 },
              { ph: "Phone Number", type: "tel", name: "phone", maxLength: 20 },
              { ph: "Email Address", type: "email", name: "email", maxLength: 100 },
            ].map((f) => (
              <input
                key={f.ph}
                type={f.type}
                name={f.name}
                maxLength={f.maxLength}
                required
                placeholder={f.ph}
                className="w-full bg-background/60 border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition"
              />
            ))}
            <textarea
              name="message"
              maxLength={1000}
              required
              rows={4}
              placeholder="Tell us about your requirement"
              className="w-full bg-background/60 border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition resize-none"
            />
            <Button type="submit" className="w-full h-14 text-base bg-fire text-white shadow-fire hover:opacity-90 group">
              Send via WhatsApp
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
            </Button>
          </motion.form>
        </div>
      </section>

      {/* MAP */}
      <section className="relative border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Visit Us</div>
            <h2 className="font-display text-3xl md:text-5xl uppercase">Find <span className="text-fire">Vyraaz Firetech</span></h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-glow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.758671043677!2d75.85857257516048!3d22.694984028473943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdb5d2bbfc9f%3A0x1fbecc6b0917ef2d!2sVyraaz%20FireTech!5e1!3m2!1sen!2sin!4v1778676696770!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vyraaz Firetech location"
              className="w-full block"
            />
          </div>
        </div>
      </section>

      {/* CLIENT REVIEWS */}
      <ClientReviews />

      {/* PRE-FOOTER VIDEO */}
      <section className="relative bg-background py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden bg-black"
          >
            <video
              src="/videos/bg-real-3.mp4"
              poster="/hero-poster.jpg"
              controls
              preload="metadata"
              playsInline
              className="w-full h-auto block"
            />
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border bg-card/40">
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Vyraaz Firetech" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Vyraaz Firetech is an Indore-based fire safety company providing sales, installation, refilling and AMC of fire protection systems across Madhya Pradesh.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://wa.me/918103498409" aria-label="WhatsApp" className="w-9 h-9 grid place-items-center rounded-md border border-border hover:bg-muted transition">
                <PhoneCall className="w-4 h-4" />
              </a>
              <a href="mailto:info@vyraazfiretech.com" aria-label="Email" className="w-9 h-9 grid place-items-center rounded-md border border-border hover:bg-muted transition">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://maps.google.com/?q=Vyraaz+FireTech+Indore" target="_blank" rel="noreferrer" aria-label="Location" className="w-9 h-9 grid place-items-center rounded-md border border-border hover:bg-muted transition">
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-[0.2em] text-ember mb-4">Company</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-foreground transition">Home</a></li>
              <li><a href="#about" className="hover:text-foreground transition">About</a></li>
              <li><a href="#projects" className="hover:text-foreground transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-foreground transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-ember mb-4">Our Services</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Fire Extinguisher Service</li>
              <li>Fire Hydrant &amp; Sprinkler</li>
              <li>Fire Alarm System</li>
              <li>AMC of Fire System</li>
              <li>Demonstration Service</li>
              <li>Extinguisher Refilling</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-ember mb-4">Get in Touch</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-fire" />
                <span>Indore, Madhya Pradesh, India</span>
              </li>
              <li className="flex gap-3">
                <PhoneCall className="w-4 h-4 mt-0.5 shrink-0 text-fire" />
                <a href="tel:+918103498409" className="hover:text-foreground transition">+91 81034 98409</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-fire" />
                <a href="mailto:info@vyraazfiretech.com" className="hover:text-foreground transition break-all">info@vyraazfiretech.com</a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-fire" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM<br/>24/7 Emergency Support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} Vyraaz Firetech. All rights reserved.</div>
            <div className="flex gap-5">
              <Link to="/privacy" className="hover:text-foreground transition">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-foreground transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ClientsCarousel() {
  const clients = [
    { src: clientAlimco, name: "ALIMCO" },
    { src: clientDavv, name: "Devi Ahilya Vishwavidyalaya" },
    { src: clientHp, name: "Hindustan Petroleum" },
    { src: clientNexa, name: "NEXA" },
  ];
  return (
    <div className="relative group">
      <div
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
      >
        <div className="flex w-max gap-4 md:gap-6 marquee-track group-hover:[animation-play-state:paused]">
          {[...clients, ...clients, ...clients, ...clients].map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="shrink-0 w-[calc((100vw-3rem-2rem)/3)] md:w-[calc((min(80rem,100vw)-3rem-3rem)/3)] aspect-[4/3] rounded-2xl border border-border bg-white grid place-items-center p-6 md:p-10"
            >
              <img
                src={c.src}
                alt={`${c.name} — Vyraaz Firetech client`}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
