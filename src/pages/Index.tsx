import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Shield, Clock, Award, Users, Activity, ArrowRight, Star, CheckCircle, Phone } from "lucide-react";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-hospital.jpg";
import doctorMalik from "@/assets/doctor-malik.jpg";
import doctorIrshad from "@/assets/doctor-irshad.jpg";

const doctorImages: Record<string, string> = {
  "dr-malik": doctorMalik,
  "dr-irshad": doctorIrshad,
};

const stats = [
  { label: "Patients Served", value: "50,000+", icon: Users },
  { label: "Expert Doctors", value: "120+", icon: Award },
  { label: "Departments", value: "8+", icon: Activity },
  { label: "Years of Service", value: "25+", icon: Shield },
];

const testimonials = [
  { name: "Ahmad Raza", text: "Exceptional care from Dr. Malik for my child. The paediatrics department is world-class.", rating: 5 },
  { name: "Fatima Noor", text: "Dr. Irshad's expertise in internal medicine is unmatched. I felt truly cared for.", rating: 5 },
  { name: "Usman Tariq", text: "The automated appointment system saved me hours. Modern, efficient healthcare.", rating: 5 },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient">
          <div className="container relative z-10 py-20 md:py-32">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
                  🏥 #1 Healthcare Platform
                </span>
                <h1 className="mb-6 font-display text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl">
                  Premium Healthcare,{" "}
                  <span className="opacity-80">Digitally Delivered</span>
                </h1>
                <p className="mb-8 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
                  Experience world-class medical care with our fully automated hospital management system. Book appointments, access records, and connect with expert doctors — all in one platform.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero-outline" size="lg" asChild>
                    <Link to="/book-appointment">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Appointment
                    </Link>
                  </Button>
                  <Button variant="hero-outline" size="lg" asChild>
                    <Link to="/departments">Explore Departments</Link>
                  </Button>
                </div>
                <div className="mt-10 flex items-center gap-8">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/20" />
                    ))}
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-primary-foreground">4.9/5 Rating</p>
                    <p className="text-sm text-primary-foreground/60">from 2,000+ patients</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="hidden lg:block"
              >
                <img
                  src={heroImage}
                  alt="MediCare Hospital"
                  className="rounded-3xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="-mt-8 relative z-20">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="stat-card bg-card"
              >
                <stat.icon className="mb-3 h-8 w-8 text-primary" />
                <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary">Our Departments</span>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Specialized Medical Care</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Our hospital offers comprehensive healthcare across 8 specialized departments, each equipped with state-of-the-art facilities.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={`/departments/${dept.id}`} className="department-card group block">
                  <dept.icon className="mb-4 h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                  <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{dept.shortName}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">{dept.description}</p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary">Expert Team</span>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Meet Our Doctors</h2>
          </div>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {doctors.filter(d => d.featured).map((doc, i) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={doctorImages[doc.id]}
                    alt={doc.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground">{doc.name}</h3>
                  <p className="text-sm font-medium text-primary">{doc.specialization}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{doc.department}</p>
                  <div className="mt-3 flex items-center gap-1">
                    {doc.qualifications.map(q => (
                      <span key={q} className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">{q}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" variant="hero" asChild>
                      <Link to={`/book-appointment?doctor=${doc.id}`}>Book Appointment</Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link to={`/doctors/${doc.id}`}>View Profile</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Us</span>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Advanced Healthcare Services</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Clock, title: "24/7 Emergency", desc: "Round-the-clock emergency medical services with rapid response team." },
              { icon: Shield, title: "Secure & Private", desc: "HIPAA-compliant systems ensuring complete patient data security." },
              { icon: Activity, title: "AI-Ready Platform", desc: "Future-ready infrastructure with AI diagnostic integration capability." },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</span>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">What Our Patients Say</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-card p-8"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-medical-amber text-medical-amber" />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20">
        <div className="container text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Experience Premium Healthcare?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">
            Book your appointment today and experience the future of healthcare management.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/book-appointment">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
