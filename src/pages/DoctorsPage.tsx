import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { doctors } from "@/data/doctors";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import doctorMalik from "@/assets/doctor-malik.jpg";
import doctorIrshad from "@/assets/doctor-irshad.jpg";

const doctorImages: Record<string, string> = {
  "dr-malik": doctorMalik,
  "dr-irshad": doctorIrshad,
};

export default function DoctorsPage() {
  return (
    <Layout>
      <section className="hero-gradient py-16">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Our Doctors</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">Expert medical professionals dedicated to providing exceptional patient care.</p>
        </div>
      </section>
      <section className="container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={doctorImages[doc.id]} alt={doc.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground">{doc.name}</h3>
                <p className="text-sm font-medium text-primary">{doc.specialization}</p>
                <p className="mt-1 text-sm text-muted-foreground">{doc.department} · {doc.experience}</p>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{doc.bio}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {doc.qualifications.map(q => (
                    <span key={q} className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">{q}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="hero" asChild>
                    <Link to={`/book-appointment?doctor=${doc.id}`}>Book Appointment</Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link to={`/doctors/${doc.id}`}>Full Profile</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
