import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Clock, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Appointments", href: "/book-appointment" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top bar */}
      <div className="hero-gradient text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              Emergency: +92-300-1234567
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Clock className="h-3.5 w-3.5" />
              24/7 Emergency Services
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/patient-portal" className="hover:underline">Patient Portal</Link>
            <span className="opacity-40">|</span>
            <Link to="/admin" className="hover:underline">Staff Login</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="nav-glass sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-display text-lg font-bold text-primary-foreground">
              M+
            </div>
            <div>
              <span className="font-display text-lg font-bold text-foreground">MediCare</span>
              <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">Hospital & Research</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="hero" size="sm" asChild>
              <Link to="/book-appointment">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border lg:hidden"
            >
              <nav className="container flex flex-col gap-1 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      location.pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button variant="hero" className="mt-2" asChild>
                  <Link to="/book-appointment" onClick={() => setMobileOpen(false)}>Book Appointment</Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
