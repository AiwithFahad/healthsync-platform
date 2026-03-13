import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Shield, Award, Users, Heart, Target, Clock } from "lucide-react";
import heroImage from "@/assets/hero-hospital.jpg";

export default function AboutPage() {
  return (
    <Layout>
      <section className="hero-gradient py-16">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">About MediCare Hospital</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">A premier healthcare institution delivering world-class medical services with compassion and innovation.</p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={heroImage} alt="MediCare Hospital" className="rounded-2xl shadow-lg" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground">25+ Years of Excellence</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              MediCare Hospital has been at the forefront of healthcare innovation for over two decades. Our mission is to provide accessible, high-quality medical care through cutting-edge technology and compassionate professionals.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With 8 specialized departments, 120+ expert doctors, and a fully automated digital platform, we deliver a seamless healthcare experience from appointment booking to post-treatment follow-ups.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-foreground">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Heart, title: "Patient First", desc: "Every decision we make centers around the well-being of our patients." },
              { icon: Target, title: "Innovation", desc: "We leverage cutting-edge technology to improve healthcare delivery." },
              { icon: Shield, title: "Integrity", desc: "We maintain the highest standards of medical ethics and data security." },
              { icon: Award, title: "Excellence", desc: "Continuous pursuit of excellence in every aspect of patient care." },
              { icon: Users, title: "Teamwork", desc: "Collaborative approach across departments for comprehensive care." },
              { icon: Clock, title: "Efficiency", desc: "Automated workflows that minimize wait times and maximize care quality." },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-card p-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <val.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{val.title}</h3>
                <p className="text-sm text-muted-foreground">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
