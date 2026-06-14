import { Home, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" style={{ backgroundColor: "#1c2b1e", color: "#d4e8da" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--accent)" }}>
              <Home size={16} color="white" />
            </div>
            <span style={{ fontFamily: "'DM Serif Display', serif", color: "#ffffff", fontSize: "1.2rem" }}>Verdant Homes</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#8fb89f" }}>
            Helping families and investors find properties they truly love since 2009.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-4 text-white" style={{ fontSize: "0.9rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Quick Links</h4>
          <ul className="flex flex-col gap-2">
            {["Home", "Properties", "About", "Book Inspection"].map((l) => (
              <li key={l}>
                <a href="#" className="text-sm transition-colors hover:text-white" style={{ color: "#8fb89f" }}>{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-white" style={{ fontSize: "0.9rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Services</h4>
          <ul className="flex flex-col gap-2">
            {["Property Sales", "Rental Management", "Valuation", "Property Inspection", "Investment Advisory"].map((s) => (
              <li key={s}>
                <span className="text-sm" style={{ color: "#8fb89f" }}>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-white" style={{ fontSize: "0.9rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Contact Us</h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-2 text-sm" style={{ color: "#8fb89f" }}>
              <MapPin size={15} className="mt-0.5 shrink-0" />
              <span>12 Palm Avenue, Lekki Phase 1, Lagos, Nigeria</span>
            </li>
            <li className="flex items-center gap-2 text-sm" style={{ color: "#8fb89f" }}>
              <Phone size={15} />
              <a href="tel:+2348000000000" className="hover:text-white transition-colors">+234 800 000 0000</a>
            </li>
            <li className="flex items-center gap-2 text-sm" style={{ color: "#8fb89f" }}>
              <Mail size={15} />
              <a href="mailto:hello@verdanthomes.ng" className="hover:text-white transition-colors">hello@verdanthomes.ng</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "#2e4030" }}>
        <p className="text-xs" style={{ color: "#5a7a63" }}>© 2025 Verdant Homes. All rights reserved.</p>
        <p className="text-xs" style={{ color: "#5a7a63" }}>Lagos · Abuja · Port Harcourt</p>
      </div>
    </footer>
  );
}
