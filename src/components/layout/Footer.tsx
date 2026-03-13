import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="hero-gradient text-primary-foreground">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/20 font-display text-lg font-bold">
                M+
              </div>
              <div>
                <span className="font-display text-lg font-bold">MediCare</span>
                <span className="block text-[10px] uppercase tracking-widest opacity-70">Hospital & Research</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              A premium healthcare institution delivering world-class medical services with compassion, innovation, and excellence.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/departments" className="hover:opacity-100 transition-opacity">Departments</Link></li>
              <li><Link to="/doctors" className="hover:opacity-100 transition-opacity">Our Doctors</Link></li>
              <li><Link to="/book-appointment" className="hover:opacity-100 transition-opacity">Book Appointment</Link></li>
              <li><Link to="/patient-portal" className="hover:opacity-100 transition-opacity">Patient Portal</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold">Departments</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/departments/medicine" className="hover:opacity-100 transition-opacity">Medicine & Allied</Link></li>
              <li><Link to="/departments/surgery" className="hover:opacity-100 transition-opacity">Surgery & Allied</Link></li>
              <li><Link to="/departments/paediatrics" className="hover:opacity-100 transition-opacity">Paediatrics</Link></li>
              <li><Link to="/departments/gynaecology" className="hover:opacity-100 transition-opacity">Gynaecology</Link></li>
              <li><Link to="/departments/diagnostics" className="hover:opacity-100 transition-opacity">Diagnostics</Link></li>
              <li><Link to="/departments/pharmacy" className="hover:opacity-100 transition-opacity">Pharmacy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold">Contact Info</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                123 Healthcare Avenue, Medical District, City
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                +92-300-1234567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                info@medicare-hospital.com
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                24/7 Emergency Services
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} MediCare Hospital & Research Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
