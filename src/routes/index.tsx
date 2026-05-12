import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Flame, Shield, Bell, Droplets, Wrench, Siren, PhoneCall, Mail, MapPin,
  CheckCircle2, ArrowRight, Award, Users, Briefcase, Clock, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/hero-fire-protection.jpg";
import hydrantImg from "@/assets/product-hydrant.jpg";
import extImg from "@/assets/product-extinguisher.jpg";
import alarmImg from "@/assets/product-alarm.jpg";
import sprinklerImg from "@/assets/product-sprinkler.jpg";

import p1 from "@/assets/projects/project-1.jpeg";
import p2 from "@/assets/projects/project-2.jpeg";
import p3 from "@/assets/projects/project-3.jpeg";
import p4 from "@/assets/projects/project-4.jpeg";
import p5 from "@/assets/projects/project-5.jpeg";
import p6 from "@/assets/projects/project-6.jpeg";
import p7 from "@/assets/projects/project-7.jpeg";
import p8 from "@/assets/projects/project-8.jpeg";
import p9 from "@/assets/projects/project-9.jpeg";

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
  { icon: Droplets, label: "Fire Hydrant" },
  { icon: Shield, label: "Fire Safety" },
  { icon: Bell, label: "Fire Alarm" },
  { icon: Siren, label: "Fire Station" },
  { icon: ArrowRight, label: "Fire Exit" },
  { icon: Flame, label: "Fire Bell" },
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
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-fire blur-md opacity-60 group-hover:opacity-100 transition" />
              <div className="relative w-10 h-10 rounded-lg bg-fire grid place-items-center text-white">
                <Flame className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="font-display text-xl tracking-wider leading-none">VYRAAZ</div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Firetech</div>
            </div>
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {["Home", "About", "Products", "Projects", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="relative group text-foreground/80 hover:text-foreground transition">
                {l}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fire group-hover:w-full transition-all" />
              </a>
            ))}
          </nav>
          <a href="tel:+918103498409">
            <Button className="bg-fire text-white hover:opacity-90 shadow-glow">
              <PhoneCall className="w-4 h-4 mr-2" /> 8103 498 409
            </Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" ref={heroRef} className="relative min-h-screen flex items-center pt-20">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <img src={heroImg} alt="Industrial fire protection pump room" width={1920} height={1088} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </motion.div>
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }} className="max-w-3xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/40 bg-brand/10 text-ember text-xs uppercase tracking-[0.2em] mb-8">
              <Sparkles className="w-3.5 h-3.5" /> Indore's Trusted Fire Safety Partner
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] uppercase">
              Safeguarding<br/>
              <span className="text-fire">Tomorrow,</span><br/>
              Today.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 text-lg md:text-xl text-foreground/75 max-w-2xl leading-relaxed">
              At <span className="text-foreground font-semibold">Vyraaz Firetech</span>, safety is our top priority. We are an established seller, distributor and installer of premium fire fighting equipment and a complete range of safety products across Indore and Madhya Pradesh.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-4">
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
            <motion.div variants={fadeUp} className="mt-20 grid grid-cols-3 max-w-xl gap-8">
              {[["10+", "Years"], ["1500+", "Projects"], ["24/7", "Support"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-4xl md:text-5xl text-fire">{n}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating side keywords */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 pr-8 opacity-20 font-display text-7xl uppercase leading-none">
          <div>Hydrant</div>
          <div className="text-fire opacity-100">Pumps</div>
          <div>Alarm</div>
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
      <section className="relative py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Some Features & Benefits</div>
            <h2 className="font-display text-4xl md:text-6xl uppercase">What We <span className="text-fire">Cover</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative aspect-square rounded-2xl border border-border bg-background/60 backdrop-blur p-6 flex flex-col items-center justify-center text-center hover:border-brand hover:shadow-glow transition-all"
              >
                <div className="absolute inset-0 bg-fire opacity-0 group-hover:opacity-10 rounded-2xl transition" />
                <div className="relative w-14 h-14 rounded-xl bg-fire grid place-items-center text-white mb-4 group-hover:scale-110 transition">
                  <f.icon className="w-7 h-7" />
                </div>
                <div className="relative font-display text-lg uppercase tracking-wider">{f.label}</div>
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
                className={`relative group overflow-hidden rounded-xl border border-border ${i === 0 || i === 4 ? "md:row-span-2 aspect-[3/4]" : "aspect-square"}`}
              >
                <img src={src} alt={`Vyraaz Firetech project ${i + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition" />
                <div className="absolute bottom-0 left-0 p-5 translate-y-2 group-hover:translate-y-0 transition">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-ember">Project / 0{i + 1}</div>
                  <div className="font-display text-xl uppercase">Site Installation</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
            {[
              { n: "1500+", l: "Total Projects", icon: Briefcase },
              { n: "1200+", l: "Happy Customers", icon: Users },
              { n: "25+", l: "Our Team", icon: Award },
              { n: "10+", l: "Years Experience", icon: Clock },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-border bg-background/60 backdrop-blur text-center"
              >
                <s.icon className="w-7 h-7 text-brand mx-auto mb-4" />
                <div className="font-display text-5xl text-fire">{s.n}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Why Choose Vyraaz</div>
            <h2 className="font-display text-5xl md:text-7xl uppercase">Safety You Can <span className="text-fire">Count On</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, t: "Certified Equipment", d: "All products are ISI-marked and tested to Indian fire safety standards." },
              { icon: Wrench, t: "Expert Installation", d: "Trained engineers ensure correct placement, hydraulic design and code compliance." },
              { icon: PhoneCall, t: "24/7 Emergency Support", d: "Quick response across Indore for refills, repairs and emergency service calls." },
            ].map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative p-10 rounded-3xl border border-border bg-card/50 backdrop-blur hover:border-brand transition-all overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-fire opacity-0 group-hover:opacity-20 blur-3xl rounded-full transition" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-fire grid place-items-center text-white mb-6 shadow-fire">
                    <f.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-2xl uppercase mb-3">{f.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            onSubmit={(e) => e.preventDefault()}
            className="bg-card/70 backdrop-blur-xl border border-border rounded-3xl p-8 md:p-10 space-y-5 shadow-2xl"
          >
            <h3 className="font-display text-3xl uppercase mb-2">Request a Quote</h3>
            <p className="text-sm text-muted-foreground mb-6">Fill the form and our team will reach out within 24 hours.</p>
            {[
              { ph: "Your Name", type: "text" },
              { ph: "Phone Number", type: "tel" },
              { ph: "Email Address", type: "email" },
            ].map((f) => (
              <input
                key={f.ph}
                type={f.type}
                placeholder={f.ph}
                className="w-full bg-background/60 border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition"
              />
            ))}
            <textarea
              rows={4}
              placeholder="Tell us about your requirement"
              className="w-full bg-background/60 border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition resize-none"
            />
            <Button type="submit" className="w-full h-14 text-base bg-fire text-white shadow-fire hover:opacity-90 group">
              Send Enquiry
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
            </Button>
          </motion.form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border py-12 bg-card/40">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-fire grid place-items-center text-white">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display text-lg tracking-wider">VYRAAZ FIRETECH</div>
              <div className="text-xs text-muted-foreground">Indore · Madhya Pradesh</div>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vyraaz Firetech. All rights reserved.
          </div>
          <div className="flex md:justify-end gap-4 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#products" className="hover:text-foreground transition">Products</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
