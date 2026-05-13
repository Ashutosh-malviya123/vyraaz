import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Vyraaz Firetech" },
      { name: "description", content: "Terms and conditions for using Vyraaz Firetech services and website." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link to="/" className="text-sm text-ember uppercase tracking-[0.2em]">← Back to Home</Link>
        <h1 className="font-display text-5xl md:text-6xl uppercase mt-6 mb-4">Terms of <span className="text-fire">Service</span></h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: January 2026</p>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl uppercase mb-3 text-foreground">1. Acceptance of Terms</h2>
            <p>By accessing this website or engaging Vyraaz Firetech for any service, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase mb-3 text-foreground">2. Services</h2>
            <p>Vyraaz Firetech provides fire safety equipment supply, installation, refilling, demonstration, and Annual Maintenance Contracts (AMC) for fire hydrant systems, sprinklers, alarms, and extinguishers. Service availability and timelines may vary based on location and stock.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase mb-3 text-foreground">3. Quotations &amp; Pricing</h2>
            <p>All quotations are valid for 30 days unless otherwise stated. Prices are subject to change based on equipment specifications, site conditions, and applicable taxes. Payment terms will be specified in the formal work order.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase mb-3 text-foreground">4. Customer Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate site information and access for installation or service.</li>
              <li>Ensure equipment is used as per manufacturer guidelines and Indian fire safety norms.</li>
              <li>Schedule timely refilling and AMC visits to maintain warranty coverage.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase mb-3 text-foreground">5. Warranty</h2>
            <p>Equipment supplied carries the manufacturer's standard warranty. Installation work is warranted against defects in workmanship for a period agreed in the work order. Warranty does not cover misuse, tampering, or damage from external causes.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase mb-3 text-foreground">6. Limitation of Liability</h2>
            <p>Vyraaz Firetech shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Maximum liability is limited to the amount paid for the specific service in question.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase mb-3 text-foreground">7. Intellectual Property</h2>
            <p>All content, logos, and designs on this website are the property of Vyraaz Firetech and may not be reproduced without written permission.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase mb-3 text-foreground">8. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Indore, Madhya Pradesh.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase mb-3 text-foreground">9. Contact</h2>
            <p>For questions about these terms, contact us at info@vyraazfiretech.com or +91 81034 98409.</p>
          </section>
        </div>
      </div>
    </div>
  );
}