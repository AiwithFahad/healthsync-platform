import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <section className="hero-gradient py-16">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Contact Us</h1>
          <p className="mt-4 text-primary-foreground/80">Get in touch with our team for any inquiries or support.</p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Get In Touch</h2>
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Emergency", value: "+92-300-1234567", sub: "24/7 Available" },
                { icon: Mail, label: "Email", value: "info@medicare-hospital.com", sub: "We respond within 24 hours" },
                { icon: MapPin, label: "Address", value: "123 Healthcare Avenue, Medical District", sub: "City, Country" },
                { icon: Clock, label: "Working Hours", value: "Mon - Sat: 8:00 AM - 8:00 PM", sub: "Emergency: 24/7" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            {sent ? (
              <div className="rounded-2xl border border-border bg-card p-8 text-center">
                <h3 className="font-display text-xl font-bold text-foreground">Message Sent!</h3>
                <p className="mt-2 text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="mb-6 font-display text-xl font-bold text-foreground">Send a Message</h3>
                <div className="space-y-4">
                  <input placeholder="Your Name" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
                  <input placeholder="Your Email" type="email" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
                  <input placeholder="Subject" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
                  <textarea placeholder="Your Message" rows={4} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none" />
                  <Button variant="hero" className="w-full" onClick={() => setSent(true)}>Send Message</Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
