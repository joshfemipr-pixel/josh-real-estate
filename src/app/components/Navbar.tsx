import { useState } from "react";
import { Menu, X, Home } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Properties", "About", "Contact"];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--primary)" }}>
            <Home size={16} color="white" />
          </div>
          <span style={{ fontFamily: "'DM Serif Display', serif", color: "var(--primary)", fontSize: "1.25rem" }}>
            Verdant Homes
          </span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l.toLowerCase())}
                className="text-foreground/70 hover:text-foreground transition-colors"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                {l}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo("booking")}
              className="px-5 py-2 rounded-full text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Book Inspection
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase())}
              className="text-left text-foreground/80 py-1"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo("booking")}
            className="mt-2 px-5 py-2 rounded-full text-white w-full"
            style={{ backgroundColor: "var(--primary)" }}
          >
            Book Inspection
          </button>
        </div>
      )}
    </nav>
  );
}
