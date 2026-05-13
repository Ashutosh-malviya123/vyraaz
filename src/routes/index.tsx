import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Flame, Shield, Bell, Droplets, Wrench, Siren, PhoneCall, Mail, MapPin, Menu, X,
  CheckCircle2, ArrowRight, Award, Users, Briefcase, Clock, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import logo from "@/assets/vyraaz-logo.png";
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

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center group">
            <img src={logo} alt="Vyraaz Firetech" className="h-10 md:h-12 w-auto object-contain" />
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {["Home", "About", "Products", "Projects", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="relative group text-foreground/80 hover:text-foreground transition">
                {l}
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
              {["Home", "About", "Products", "Projects", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition"
                >
                  {l}
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
      <section id="top" ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <video
            src="/hero-bg.mp4"
            poster="/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/70" />
        </motion.div>

        <div className="relative w-full max-w-7xl mx-auto px-6 py-24 text-left">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.15 } } }} className="max-w-2xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/40 bg-brand/10 text-ember text-xs uppercase tracking-[0.3em] mb-8">
              <Sparkles className="w-3.5 h-3.5" /> Indore's Trusted Fire Safety Partner
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display uppercase leading-[0.9] tracking-tight text-5xl sm:text-6xl md:text-7xl"
              style={{ textShadow: "0 6px 40px rgba(0,0,0,0.6)" }}
            >
              <span className="block text-white">Vyraaz</span>
              <span className="block text-fire" style={{ textShadow: "0 0 60px rgba(239,68,68,0.55)" }}>
                Firetech
              </span>
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-6 flex items-center gap-4">
              <span className="h-px w-12 bg-fire/60" />
              <span className="text-sm md:text-base uppercase tracking-[0.4em] text-white/90">
                Safeguarding Tomorrow, Today
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base md:text-lg text-white/85 leading-relaxed" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}>
              Premium fire fighting equipment, installation, refilling and AMC services across Indore and Madhya Pradesh.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <a href="#products">
                <Button size="lg" className="bg-fire text-white h-14 px-8 text-base shadow-fire hover:opacity-90 group">
                  Explore Products
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base border-border bg-background/40 backdrop-blur hover:bg-card">
                  Request a Quote
                </Button>
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-14 grid grid-cols-3 max-w-md gap-6">
              {[["10+", "Years"], ["100+", "Projects"], ["24/7", "Support"]].map(([n, l]) => (
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
      <div className="relative py-6 border-y border-border bg-card/40 overflow-hidden">
        <div className="flex marquee-track gap-16 whitespace-nowrap font-display text-3xl md:text-5xl uppercase">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              {["Fire Alarm System", "•", "Fire Fighting Pumps", "•", "Fire Hydrant System", "•", "Fire Extinguishers", "•", "Sprinkler Systems", "•"].map((t, j) => (
                <span key={j} className={t === "•" ? "text-brand" : "text-foreground/40 hover:text-foreground transition"}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

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
