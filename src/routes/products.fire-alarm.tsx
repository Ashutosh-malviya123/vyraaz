import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Flame, Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import heatImg from "@/assets/alarm-products/heat-detector.jpg";
import smokeImg from "@/assets/alarm-products/smoke-detector.jpg";
import sounderImg from "@/assets/alarm-products/sounder-strobe.jpg";
import mcpImg from "@/assets/alarm-products/manual-call-point.jpg";
import zoneImg from "@/assets/alarm-products/zone-panel.jpg";
import facpImg from "@/assets/alarm-products/control-panel.jpg";
import heroImg from "@/assets/alarm-products/hero.jpg";

export const Route = createFileRoute("/products/fire-alarm")({
  component: FireAlarmPage,
  head: () => ({
    meta: [
      { title: "Fire Alarm Systems — Detectors, MCP, Sounders & Panels | Vyraaz Firetech" },
      { name: "description", content: "Conventional and addressable fire alarm systems — heat & smoke detectors, manual call points, sounder-strobes and 2/4-zone & addressable control panels." },
      { property: "og:title", content: "Fire Alarm Systems | Vyraaz Firetech" },
      { property: "og:description", content: "Early detection, faster response. Heat detectors, smoke detectors, MCPs, sounder-strobes and control panels." },
    ],
  }),
});

type Product = { id: string; img: string; title: string; intro: string };

const products: Product[] = [
  {
    id: "heat-detector",
    img: heatImg,
    title: "Heat Detector",
    intro: "Ceiling-mounted thermal detector that triggers on rate-of-rise or fixed-temperature thresholds — ideal for kitchens, parking and dusty areas where smoke detectors may false-alarm.",
  },
  {
    id: "smoke-detector",
    img: smokeImg,
    title: "Smoke Detector",
    intro: "Photoelectric smoke detector for early detection of smouldering fires. Suited to offices, corridors, hotels and residences for the earliest possible warning.",
  },
  {
    id: "sounder-strobe",
    img: sounderImg,
    title: "Sounder cum Strobe",
    intro: "Combined audible-visual alarm device — high-output siren paired with a bright xenon/LED strobe to alert occupants in noisy or large spaces.",
  },
  {
    id: "manual-call-point",
    img: mcpImg,
    title: "Manual Call Point",
    intro: "Wall-mounted break-glass / push-to-operate call point that allows occupants to raise a fire alarm manually from any floor or exit route.",
  },
  {
    id: "zone-panel",
    img: zoneImg,
    title: "2 Zone / 4 Zone Panel",
    intro: "Compact conventional fire alarm panel with 2 or 4 zones — ideal for small offices, shops, schools and warehouses requiring straightforward zone-wise monitoring.",
  },
  {
    id: "control-panel",
    img: facpImg,
    title: "Fire Alarm Control Panel",
    intro: "Addressable / multi-zone fire alarm control panel — the brain of the system, with LCD display, event log and integration with sounders, sprinklers and BMS.",
  },
];

const whyUs = [
  ["Early Detection", "Photoelectric and thermal sensors catch fires in their earliest stages — buying critical evacuation time."],
  ["Custom Engineered", "Zoned or fully addressable system designs tailored to your building layout, risk profile and budget."],
  ["24/7 Monitoring Ready", "Panels integrate with monitoring stations, BMS and notification systems for round-the-clock supervision."],
  ["Installation & AMC", "Cable laying, commissioning, user training and annual maintenance — one accountable partner for the full lifecycle."],
];

function FireAlarmPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Products", href: "/#products" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-fire blur-md opacity-60 group-hover:opacity-100 transition" />
              <div className="relative w-10 h-10 rounded-lg bg-fire grid place-items-center text-white">
                <Flame className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="font-display text-xl tracking-wider leading-none">VYRAAZ</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Firetech</div>
            </div>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="relative group text-foreground/80 hover:text-foreground transition">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fire group-hover:w-full transition-all" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
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
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition"
                >
                  {l.label}
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

      {/* Back link */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-fire opacity-20 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span>/</span>
              <span>Products</span>
              <span>/</span>
              <span className="text-ember">Fire Alarm</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.95]">
              Fire <span className="text-fire">Alarm</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-foreground/80 leading-relaxed">
              Vyraaz fire alarm solutions go beyond technology — they offer peace of mind. With expert design,
              early-detection sensors, customisable panels and round-the-clock monitoring readiness, we help you
              protect what matters most.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="bg-fire hover:bg-fire/90 text-white">Request a Quote</Button>
              <Link to="/"><Button size="lg" variant="outline">Back to Home</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-ember mb-4">Why Vyraaz</div>
              <h2 className="font-display text-4xl md:text-5xl uppercase leading-[1]">
                Detect early. Respond faster.
              </h2>
              <p className="mt-6 text-foreground/70 leading-relaxed">
                Every minute matters in a fire. Our alarm systems combine the right detector for each space, well-placed
                manual call points and a panel architecture that scales — from a single shop to a multi-floor facility.
              </p>
            </div>
            <ul className="space-y-5">
              {whyUs.map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-fire shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">{t}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Catalogue</div>
            <h2 className="font-display text-4xl md:text-5xl uppercase">Alarm <span className="text-fire">Components</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.article
                key={p.id}
                id={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-fire transition-all hover:-translate-y-1 hover:shadow-fire"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.intro}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl uppercase">Plan your fire <span className="text-fire">alarm system</span></h2>
          <p className="mt-6 text-foreground/70">Site survey, zone planning, panel selection and installation — talk to our team for an itemised proposal.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/"><Button size="lg" className="bg-fire hover:bg-fire/90 text-white">Contact Us</Button></Link>
            <Link to="/"><Button size="lg" variant="outline">Back to Home</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}